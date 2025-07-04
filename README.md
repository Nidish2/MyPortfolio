# Personal Portfolio - Nidish

🚀 Live Site: [i-am-nidish.vercel.app](https://i-am-nidish.vercel.app/)

---

## 📌 Overview

This is a sleek and modern personal portfolio website built using **Next.js (App Router)**, **React**, **Vite**, and **Tailwind CSS**, designed to showcase the skills, projects, and personality of **Nidish**, a passionate software developer. The portfolio is responsive, interactive, and minimalistic — providing recruiters and visitors with a smooth, enjoyable browsing experience.

---

## 🧠 Features

* 🎯 **Hero Section** with typewriter animation and optional 3D globe sphere
* 🧑‍💻 **About Me** with background, personality, and career mission
* 🧱 **Professional Goals** for short-term and long-term objectives
* 🧩 **Projects** with live demos, GitHub links, and tech stack icons
* 🎓 **Education** timeline with structured achievements
* 💼 **Experience** highlights for past roles and internships
* 🏅 **Achievements & Certifications** section
* 🎭 **Personality Traits** for soft skills exposure
* 🎉 **Extracurricular Activities & Hackathons** to show versatility
* 🧪 **Skills Section** with modern visual representation
* 📫 **Contact Section** with working **EmailJS** form
* 🖱️ **Copy to Clipboard** for easy contact info copying
* 🌘 **Theme Toggle** (Light/Dark mode support via `next-themes`)
* 💬 Footer with social media and copyright
* ⚡ Smooth transitions & framer-motion animations
* 📱 Fully Responsive across all screen sizes

---

## ⚙️ Tech Stack

| Category          | Technologies                      |
| ----------------- | --------------------------------- |
| **Frontend**      | React, Next.js (App Router), Vite |
| **Styling**       | Tailwind CSS, PostCSS             |
| **Animation**     | Framer Motion                     |
| **Icons**         | Lucide Icons                      |
| **Theming**       | `next-themes`                     |
| **Forms**         | EmailJS                           |
| **Type Checking** | TypeScript                        |
| **Deployment**    | Vercel                            |

---

## 📁 Folder Structure

```bash
├── app/                 # Next.js App Router configuration
├── components/          # Section-based components
│   ├── ui/              # Reusable UI components (toggle, footer, buttons...)
│   ├── about.tsx
│   ├── achievements.tsx
│   ├── certificates.tsx
│   ├── connect.tsx
│   ├── contact.tsx
│   ├── copy.tsx
│   ├── education.tsx
│   ├── experience.tsx
│   ├── extracurricular.tsx
│   ├── footer.tsx
│   ├── hackathons.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   ├── hero-3d.tsx
│   ├── navbar.tsx
│   ├── personality.tsx
│   ├── professional-goals.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
├── hooks/               # Custom hooks
├── lib/                 # Utility functions
├── public/              # Static assets
├── styles/              # Tailwind base styles
├── components.json      # Component mapping
├── next.config.mjs      # Next.js config
├── tailwind.config.ts   # Tailwind config
├── postcss.config.mjs   # PostCSS setup
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/<your-username>/MyPortfolio
cd MyPortfolio
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Start the development server**

```bash
pnpm dev
```

4. **Build for production**

```bash
pnpm build && pnpm start
```

5. **Environment Variables**
   Create `.env.local` file for EmailJS:

```env
NEXT_PUBLIC_EMAILJS_SERVICE=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE=your_template_id
NEXT_PUBLIC_EMAILJS_KEY=your_public_key
```

---

## 📤 Deployment

* Hosted on [Vercel](https://vercel.com/)
* Push to `main` triggers auto-deployment
* Custom domain and SSL support by default

---

## 💡 Future Enhancements

* 🌐 Add internationalization (multi-language)
* 📝 Blog & Case Studies section
* 📈 Analytics with Plausible or Google Analytics
* 🔍 SEO optimization & Open Graph metadata
* 🌓 Enhanced system-level theme preference sync
* 🎥 Project video walkthrough embedding

---

## 🙌 Acknowledgments

* [Lucide Icons](https://lucide.dev/)
* [Framer Motion](https://www.framer.com/motion/)
* [EmailJS](https://www.emailjs.com/)
* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)

---

## 🧑‍🎓 Author

**Nidish**
🌍 Portfolio: [i-am-nidish.vercel.app](https://i-am-nidish.vercel.app/)
📫 Email: [nidish2207@gmail.com](nidish2207@gmail.com) 
🔗 LinkedIn: [Nidish](https://www.linkedin.com/in/nidish-26929524b/)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

### ⭐ If you like this project

Star it ⭐ | Fork it 🍴 | Share it 📣 | Use it 🚀
