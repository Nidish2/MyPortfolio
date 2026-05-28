# Personal Portfolio - Nidish

Live Site: [i-am-nidish.vercel.app](https://i-am-nidish.vercel.app/)

## Overview

A personal portfolio website built with Next.js, React, and Tailwind CSS. It showcases Nidish's profile, experience, education, projects, skills, certifications, hackathons, achievements, extracurricular activities, and contact details.

## Features

- Hero section with typewriter-style role text
- Profile section with photo and quick contact details
- Work experience and education sections
- Projects with GitHub and live demo links
- Skills grouped by technical area
- Certifications with document links
- Hackathons, achievements, and extracurricular activities
- Contact form using Web3Forms
- Light/dark theme toggle
- Footer with professional/social coding links

## Tech Stack

| Category | Technologies |
| --- | --- |
| Frontend | React, Next.js App Router |
| Styling | Tailwind CSS, PostCSS |
| Animation | Framer Motion |
| Icons | Lucide Icons |
| Forms | Web3Forms |
| Type Checking | TypeScript |
| Deployment | Vercel |

## Folder Structure

```bash
app/
  globals.css
  layout.tsx
  page.tsx
components/
  about.tsx
  achievements.tsx
  certificates.tsx
  contact.tsx
  education.tsx
  experience.tsx
  extracurricular.tsx
  footer.tsx
  hackathons.tsx
  hero.tsx
  navbar.tsx
  projects.tsx
  skills.tsx
public/
  Resume.pdf
  Profile.jpg
  certificate images
```

## Setup

```bash
pnpm install
pnpm dev
```

For production:

```bash
pnpm build
pnpm start
```

Create `.env.local` for the contact form:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key
```

## Author

**Nidish**

- Portfolio: [i-am-nidish.vercel.app](https://i-am-nidish.vercel.app/)
- Email: [nidish2207@gmail.com](mailto:nidish2207@gmail.com)
- LinkedIn: [Nidish](https://www.linkedin.com/in/nidishofficial/)
