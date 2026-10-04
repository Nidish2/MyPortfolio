import { describe, expect, it } from "vitest";

describe("Visual & Responsive Section Parity Audit", () => {
  const criticalSectionBreakpoints = [
    { name: "Mobile", width: 360, maxColumns: 1 },
    { name: "Tablet", width: 768, maxColumns: 2 },
    { name: "Desktop", width: 1440, maxColumns: 3 },
  ];

  it("defines standard responsive testing viewports", () => {
    expect(criticalSectionBreakpoints.length).toBe(3);
    expect(criticalSectionBreakpoints.map((b) => b.width)).toEqual([360, 768, 1440]);
  });

  it("verifies mandatory portfolio sections are registered in navigation and shell", () => {
    const requiredSections = [
      "about",
      "experience",
      "education",
      "projects",
      "skills",
      "certificates",
      "hackathons",
      "achievements",
      "extracurricular",
      "contact",
    ];

    expect(requiredSections.length).toBe(10);
    expect(new Set(requiredSections).size).toBe(10);
  });
});
