<h1 align="center">
  Nidish's Personal Portfolio
</h1>

<p align="center">
  A highly responsive, animated, and modern portfolio built to showcase experience, projects, skills, and achievements.
  <br>
  <strong><a href="https://i-am-nidish.vercel.app/" target="_blank">View Live Website</a></strong>
</p>

---

## Overview

This is my personal portfolio website, meticulously crafted using **Next.js**, **React**, and **Tailwind CSS**. It is designed to be highly responsive and visually appealing with micro-animations powered by **Framer Motion**. It effectively presents my technical profile, software engineering projects, work experience, education, and extracurricular activities.

## Key Features

- **Interactive Hero Section:** 3D tilt effects, typewriter animations, and particle backgrounds.
- **Fully Responsive Design:** Carefully tailored layouts that adapt seamlessly from mobile devices to ultrawide monitors.
- **Dark & Light Modes:** Built-in seamless theme switching with customized palettes for both viewing experiences.
- **Comprehensive Showcases:** Dedicated sections for Projects, Certifications, Hackathons, Skills, and Experience.
- **Working Contact Form:** Fully functional "Get in Touch" form integrated with Web3Forms.
- **Framer Motion Animations:** Smooth page loads, scroll-reveals, and micro-interactions on hover.

## Tech Stack

| Category | Technologies Used |
| :--- | :--- |
| **Framework** | Next.js (App Router), React 19 |
| **Styling** | Tailwind CSS, PostCSS |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Form Backend** | Web3Forms |
| **Deployment** | Vercel |

## Getting Started

Follow these steps to run the portfolio locally on your machine.

### Prerequisites
Make sure you have Node.js and `pnpm` installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory for the contact form to work:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
   ```
   *(You can get a free key from [Web3Forms](https://web3forms.com/))*

4. **Run the development server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```text
portfolio/
├── app/                  # Next.js App Router (layout, page, globals.css)
├── components/           # Reusable UI Sections (Hero, Projects, Skills, etc.)
├── public/               # Static assets (Images, Resume.pdf)
├── tailwind.config.ts    # Tailwind CSS Configuration
└── package.json          # Dependencies & Scripts
```

## Known IDE Warnings (False Positives)

If you are using a strict IDE setup (like SonarLint or i18n-ally in VS Code), you may see around ~44 warnings. **These are strictly IDE-specific warnings and not actual code bugs:**

- **`JSX element not internationalized`:** The IDE is suggesting wrapping every piece of text in a translation package like `i18next`. Since this is an English-only personal portfolio, translation overhead is unnecessary. These can be safely ignored.
- **`Unknown at rule @tailwind`:** This is a standard warning for PostCSS/Tailwind files if your IDE's CSS language server isn't specifically configured for Tailwind. It does not affect the build or styles.

## Author

**Nidish**
- **Website:** [i-am-nidish.vercel.app](https://i-am-nidish.vercel.app/)
- **LinkedIn:** [linkedin.com/in/nidishofficial](https://www.linkedin.com/in/nidishofficial/)
- **Email:** [nidish2207@gmail.com](mailto:nidish2207@gmail.com)
