import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import { siteConfig } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Nidish - Portfolio",
    template: "%s | Nidish",
  },
  description: "Personal portfolio website of Nidish - Computer Science Engineer and Web Developer",
  authors: [{ name: "Nidish" }],
  creator: "Nidish",
  openGraph: {
    type: "website",
    url: "/",
    title: "Nidish - Portfolio",
    description:
      "Personal portfolio website of Nidish - Computer Science Engineer and Web Developer",
    siteName: "Nidish Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Nidish - Portfolio",
    description:
      "Personal portfolio website of Nidish - Computer Science Engineer and Web Developer",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
