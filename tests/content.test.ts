import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { achievements } from "@/content/achievements";
import { certificates } from "@/content/certificates";
import { educationItems } from "@/content/education";
import { experiences } from "@/content/experience";
import { activities } from "@/content/extracurricular";
import { hackathons } from "@/content/hackathons";
import { heroMetrics, heroWords } from "@/content/hero";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { skillCategories, skillHighlights } from "@/content/skills";
import { socialLinks } from "@/content/social";

const isHttpsUrl = (value: string) => new URL(value).protocol === "https:";
const isNonEmptyText = (value: string) => value.trim().length > 0;
const isSafeLocalAssetPath = (value: string) =>
  value.startsWith("/") &&
  !value.startsWith("//") &&
  !value.includes("?") &&
  !value.includes("#") &&
  !value.includes("\\") &&
  !value.includes("..");
const allowsOnlyStrongMarkup = (value: string) => !/<(?!\/?strong>)[^>]+>/i.test(value);

describe("public portfolio content", () => {
  it("uses HTTPS for public remote links", () => {
    expect(isHttpsUrl(siteConfig.url)).toBe(true);
    expect(isHttpsUrl(siteConfig.documentsUrl)).toBe(true);
    expect(isHttpsUrl(siteConfig.forms.submitUrl)).toBe(true);

    for (const url of Object.values(siteConfig.social)) {
      expect(isHttpsUrl(url)).toBe(true);
    }

    for (const certificate of certificates) {
      expect(isHttpsUrl(certificate.link)).toBe(true);
    }

    for (const project of projects) {
      expect(isHttpsUrl(project.github)).toBe(true);
      if (project.live) expect(isHttpsUrl(project.live)).toBe(true);
    }
  });

  it("does not place credentials in public URLs", () => {
    const urls = [
      siteConfig.url,
      siteConfig.documentsUrl,
      siteConfig.forms.submitUrl,
      ...Object.values(siteConfig.social),
      ...certificates.map(({ link }) => link),
      ...projects.flatMap(({ github, live }) => [github, ...(live ? [live] : [])]),
    ];

    for (const value of urls) {
      const url = new URL(value);
      expect(url.username).toBe("");
      expect(url.password).toBe("");
    }
  });

  it("keeps public asset paths local and query-free", () => {
    expect(isSafeLocalAssetPath(siteConfig.resumePath)).toBe(true);

    for (const certificate of certificates) {
      expect(isSafeLocalAssetPath(certificate.image)).toBe(true);
    }
  });

  it("references public assets that exist in the repository", () => {
    const assets = [siteConfig.resumePath, ...certificates.map(({ image }) => image)];

    for (const asset of assets) {
      expect(existsSync(join(process.cwd(), "public", asset))).toBe(true);
    }
  });

  it("keeps the social catalog aligned with the public social configuration", () => {
    const configuredSocialKeys = Object.keys(siteConfig.social).sort();
    const renderedSocialKeys = socialLinks.map(({ socialKey }) => socialKey).sort();

    expect(renderedSocialKeys).toEqual(configuredSocialKeys);
    expect(new Set(socialLinks.map(({ name }) => name)).size).toBe(socialLinks.length);
  });

  it("keeps NCC achievement labels distinct", () => {
    const nccBadges = achievements
      .filter(({ category }) => category === "ncc")
      .map(({ badge }) => badge);

    expect(nccBadges.length).toBeGreaterThan(1);
    expect(new Set(nccBadges).size).toBe(nccBadges.length);
  });

  it("keeps content records uniquely identifiable", () => {
    expect(new Set(certificates.map(({ title }) => title)).size).toBe(certificates.length);
    expect(
      new Set(achievements.map(({ title, organization }) => `${title}-${organization}`)).size,
    ).toBe(achievements.length);
    expect(new Set(activities.map(({ title }) => title)).size).toBe(activities.length);
    expect(new Set(experiences.map(({ company }) => company)).size).toBe(experiences.length);
    expect(new Set(educationItems.map(({ degree }) => degree)).size).toBe(educationItems.length);
    expect(new Set(heroMetrics.map(({ label }) => label)).size).toBe(heroMetrics.length);
    expect(new Set(hackathons.map(({ name }) => name)).size).toBe(hackathons.length);
    expect(new Set(projects.map(({ title }) => title)).size).toBe(projects.length);
    expect(new Set(skillCategories.map(({ name }) => name)).size).toBe(skillCategories.length);
    expect(new Set(skillHighlights.map(({ title }) => title)).size).toBe(skillHighlights.length);
  });

  it("keeps every rendered collection complete and human-readable", () => {
    const requiredRecords = [
      ...achievements.map(({ title, organization, year, badge }) => [
        title,
        organization,
        year,
        badge,
      ]),
      ...certificates.map(({ title, issuer, date, description }) => [
        title,
        issuer,
        date,
        description,
      ]),
      ...educationItems.map(({ degree, institution, period, details, score }) => [
        degree,
        institution,
        period,
        details,
        score,
      ]),
      ...activities.map(({ title, organization, duration }) => [title, organization, duration]),
      ...hackathons.map(({ name, duration, project, description, year }) => [
        name,
        duration,
        project,
        description,
        year,
      ]),
      ...projects.map(({ title, year, description, impact, focus }) => [
        title,
        year,
        description,
        impact,
        focus,
      ]),
      ...socialLinks.map(({ name, color }) => [name, color]),
      ...skillCategories.map(({ name, level }) => [name, level]),
      ...skillHighlights.map(({ title, description }) => [title, description]),
      ...heroMetrics.map(({ value, label }) => [value, label]),
    ];

    expect(requiredRecords.length).toBeGreaterThan(0);
    for (const fields of requiredRecords) {
      expect(fields.every(isNonEmptyText)).toBe(true);
    }
  });

  it("keeps nested content ready for its renderer", () => {
    expect(heroWords.every(isNonEmptyText)).toBe(true);

    for (const category of skillCategories) {
      expect(category.skills.length).toBeGreaterThan(0);
      expect(
        category.skills.every(
          ({ name, level }) => isNonEmptyText(name) && level >= 0 && level <= 100,
        ),
      ).toBe(true);
    }

    for (const activity of activities) {
      expect(activity.description.length).toBeGreaterThan(0);
      expect(activity.achievements.length).toBeGreaterThan(0);
    }

    for (const hackathon of hackathons) {
      expect(hackathon.technologies.length).toBeGreaterThan(0);
    }

    for (const project of projects) {
      expect(project.technologies.length).toBeGreaterThan(0);
    }

    for (const experience of experiences) {
      expect(experience.roles.length).toBeGreaterThan(0);

      for (const role of experience.roles) {
        expect(isNonEmptyText(role.title)).toBe(true);
        expect(isNonEmptyText(role.period)).toBe(true);
        expect((role.description?.length ?? 0) + (role.projects?.length ?? 0)).toBeGreaterThan(0);
      }
    }
  });

  it("limits rich experience copy to the supported strong tag", () => {
    const richText = experiences.flatMap((experience) =>
      experience.roles.flatMap((role) => [
        role.summary,
        ...(role.description ?? []),
        ...(role.infra ?? []),
        ...(role.projects?.flatMap(({ bullets }) => bullets) ?? []),
      ]),
    );

    for (const value of richText) {
      if (value) expect(allowsOnlyStrongMarkup(value)).toBe(true);
    }
  });
});
