import { describe, expect, it } from "vitest";
import { certificates } from "@/content/certificates";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { socialLinks } from "@/content/social";

describe("CI link and URL validation suite", () => {
  const allUrls: { source: string; url: string }[] = [
    { source: "siteConfig.url", url: siteConfig.url },
    { source: "siteConfig.documentsUrl", url: siteConfig.documentsUrl },
    { source: "siteConfig.forms.submitUrl", url: siteConfig.forms.submitUrl },
    ...Object.entries(siteConfig.social).map(([key, url]) => ({
      source: `siteConfig.social.${key}`,
      url,
    })),
    ...certificates.map((cert) => ({
      source: `Certificate: ${cert.title}`,
      url: cert.link,
    })),
    ...projects.flatMap((project) => [
      { source: `Project GitHub: ${project.title}`, url: project.github },
      ...(project.live ? [{ source: `Project Live: ${project.title}`, url: project.live }] : []),
    ]),
  ];

  it("all public links have valid HTTPS syntax and hostname", () => {
    for (const item of allUrls) {
      expect(() => new URL(item.url), `Invalid URL in ${item.source}`).not.toThrow();
      const parsed = new URL(item.url);
      expect(parsed.protocol, `Insecure protocol in ${item.source}`).toBe("https:");
      expect(parsed.hostname.length, `Missing hostname in ${item.source}`).toBeGreaterThan(3);
    }
  });

  it("all social catalogue keys correspond to configured URLs", () => {
    for (const link of socialLinks) {
      const configuredUrl = siteConfig.social[link.socialKey];
      expect(configuredUrl, `Missing social url for ${link.name}`).toBeDefined();
      expect(configuredUrl.startsWith("https://")).toBe(true);
    }
  });

  it("ensures no malicious or relative protocol strings in remote links", () => {
    for (const item of allUrls) {
      expect(item.url.startsWith("//")).toBe(false);
      expect(item.url.includes("javascript:")).toBe(false);
      expect(item.url.includes("data:")).toBe(false);
    }
  });
});
