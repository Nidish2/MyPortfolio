import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

function getAllSourceFiles(dir: string, fileList: string[] = []): string[] {
  const files = readdirSync(dir);
  for (const file of files) {
    const filePath = join(dir, file);
    if (statSync(filePath).isDirectory()) {
      if (!["node_modules", ".next", ".git", "coverage", "public"].includes(file)) {
        getAllSourceFiles(filePath, fileList);
      }
    } else if (/\.(tsx|ts|jsx|js)$/.test(file)) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

describe("Senior Quality Rules Audit Suite", () => {
  const rootDir = process.cwd();
  const sourceFiles = getAllSourceFiles(rootDir);

  it("zero occurrences of dangerouslySetInnerHTML across application source", () => {
    const appFiles = sourceFiles.filter((f) => !f.includes("tests"));
    const forbiddenPattern = ["dangerously", "SetInnerHTML"].join("");
    for (const file of appFiles) {
      const content = readFileSync(file, "utf-8");
      expect(
        content.includes(forbiddenPattern),
        `Found forbidden ${forbiddenPattern} in: ${file}`,
      ).toBe(false);
    }
  });

  it("zero raw <img> tags in tsx files (must use next/image)", () => {
    const tsxFiles = sourceFiles.filter((f) => f.endsWith(".tsx"));
    const rawImgRegex = /<img\s+[^>]*\/?>/i;

    for (const file of tsxFiles) {
      const content = readFileSync(file, "utf-8");
      expect(
        rawImgRegex.test(content),
        `Found raw <img> tag instead of next/image in: ${file}`,
      ).toBe(false);
    }
  });

  it("all external link targets with target='_blank' have rel='noopener noreferrer'", () => {
    const tsxFiles = sourceFiles.filter((f) => f.endsWith(".tsx"));
    for (const file of tsxFiles) {
      const content = readFileSync(file, "utf-8");
      if (content.includes('target="_blank"')) {
        expect(
          content.includes('rel="noopener noreferrer"'),
          `External link with target="_blank" missing rel="noopener noreferrer" in: ${file}`,
        ).toBe(true);
      }
    }
  });

  it("all source files end with a newline character", () => {
    for (const file of sourceFiles) {
      const content = readFileSync(file, "utf-8");
      expect(content.endsWith("\n"), `File missing trailing newline: ${file}`).toBe(true);
    }
  });
});
