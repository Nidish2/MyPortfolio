export type AchievementCategory = "academic" | "ncc" | "sports" | "competition";
export type AchievementIconName = "award" | "castle" | "medal" | "star" | "trophy";

export interface Achievement {
  title: string;
  organization: string;
  year: string;
  icon: AchievementIconName;
  badge: string;
  description?: string;
  category: AchievementCategory;
}

export const achievements: readonly Achievement[] = [
  {
    title: "Group Song - Gold Medal",
    organization: "National Cadet Corps",
    year: "2023, 2025",
    icon: "trophy",
    badge: "NCC · Cultural",
    description:
      "Awarded gold medals for outstanding performance in NCC cultural competitions, demonstrating teamwork and artistic excellence.",
    category: "ncc",
  },
  {
    title: "Tent Pitching - Gold Medal",
    organization: "National Cadet Corps",
    year: "2023, 2025",
    icon: "medal",
    badge: "NCC · Field training",
    description:
      "Recognized for exceptional skills in military training exercises and outdoor survival techniques.",
    category: "ncc",
  },
  {
    title: "Award of Excellence in PUC",
    organization: "National Students's Union of India",
    year: "2022",
    icon: "award",
    badge: "Academic",
    description:
      "Recognized for outstanding academic performance and contributions to student activities.",
    category: "academic",
  },
  {
    title: "Award of Excellence in PUC",
    organization: "Adarsha Seva Sangha",
    year: "2022",
    icon: "star",
    badge: "Academic",
    description: "Honored for exceptional academic achievements and community service.",
    category: "academic",
  },
  {
    title: "Chess District Level Participation",
    organization: "District Chess Association",
    year: "2017, 2019",
    icon: "castle",
    badge: "Sports",
    description:
      "Participated in district-level chess competitions, demonstrating strategic thinking and competitive spirit.",
    category: "sports",
  },
] as const;
