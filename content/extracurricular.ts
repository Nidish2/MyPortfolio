export type ActivityType = "ncc" | "leadership";
export type ActivityIconName = "shield" | "target";

export interface Activity {
  title: string;
  organization: string;
  duration: string;
  description: readonly string[];
  achievements: readonly string[];
  type: ActivityType;
  icon: ActivityIconName;
}

export const activities: readonly Activity[] = [
  {
    title: "NCC Cadet",
    organization: "National Cadet Corps",
    duration: "3 Years | B & C Certificate Holder",
    description: [
      "Attended two CATC Camps (2023 and 2025) and one Army Attachment Camp - ATT (2023)",
      "Led social awareness drives and community service programs",
      "Developed leadership skills through military training and discipline",
      "Participated in cultural activities and competitive events",
    ],
    achievements: [
      "Gold Medal in Group Song (2023, 2025)",
      "Gold Medal in Tent Pitching (2023, 2025)",
      "B Certificate (2023)",
      "C Certificate (2025)",
    ],
    type: "ncc",
    icon: "shield",
  },
  {
    title: "Super 60 Program",
    organization: "BNMIT",
    duration: "1 Year (Ongoing)",
    description: [
      "Selected through 4-stage screening process for leadership and technical excellence",
      "Intensive training in Data Structures and Algorithms using Java",
      "Strategic thinking and problem-solving workshops",
      "Communication and presentation skills development",
    ],
    achievements: [
      "Selected from 1000+ applicants",
      "Advanced DSA proficiency",
      "Leadership development",
      "Strategic thinking certification",
    ],
    type: "leadership",
    icon: "target",
  },
] as const;
