import { describe, expect, it } from "vitest";
import {
  containerVariants,
  glowHover,
  itemVariants,
  rotateHover,
  standardHover,
  subtleHover,
} from "@/lib/animations";

describe("animation variants and presets", () => {
  it("defines standard container and item variants with sensible defaults", () => {
    expect(containerVariants.hidden).toEqual({ opacity: 1 });
    expect(containerVariants.visible).toHaveProperty("opacity", 1);
    expect(containerVariants.visible).toHaveProperty("transition");

    expect(itemVariants.hidden).toEqual({ opacity: 1, y: 0 });
    expect(itemVariants.visible).toHaveProperty("opacity", 1);
  });

  it("exports interactive hover presets", () => {
    expect(standardHover.scale).toBe(1.05);
    expect(glowHover.textShadow).toBeDefined();
    expect(rotateHover.rotate).toBe(5);
    expect(subtleHover.x).toBe(5);
  });
});
