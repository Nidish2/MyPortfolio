import type { siteConfig } from "@/content/site";

export type SocialIconName =
  | "github"
  | "linkedin"
  | "leetcode"
  | "geeksForGeeks"
  | "hackerRank"
  | "instagram";

export interface SocialLink {
  name: string;
  socialKey: keyof typeof siteConfig.social;
  icon: SocialIconName;
  color: string;
}

export const socialLinks: readonly SocialLink[] = [
  {
    name: "GitHub",
    socialKey: "github",
    icon: "github",
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "LinkedIn",
    socialKey: "linkedin",
    icon: "linkedin",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "LeetCode",
    socialKey: "leetcode",
    icon: "leetcode",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "GeeksforGeeks",
    socialKey: "geeksForGeeks",
    icon: "geeksForGeeks",
    color: "from-teal-600 to-emerald-800",
  },
  {
    name: "HackerRank",
    socialKey: "hackerRank",
    icon: "hackerRank",
    color: "from-lime-400 to-green-600",
  },
  {
    name: "Instagram",
    socialKey: "instagram",
    icon: "instagram",
    color: "from-pink-500 to-purple-600",
  },
] as const;
