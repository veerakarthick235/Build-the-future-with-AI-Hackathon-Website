# Build the Future with AI — From Code to No-Code 🚀

> A world-class, premium SaaS-style landing page for the global AI hackathon.

This repository contains the source code for the "Build the Future with AI" hackathon website. It features a stunning dark-mode aesthetic inspired by Apple, Stripe, and Vercel, complete with smooth animations, particle backgrounds, glassmorphism, and real-time statistics sync.

## ✨ Features

- **Premium UI/UX:** Deep dark theme with Neon Blue, Indigo, and Purple accents.
- **Glassmorphism:** Elegant frosted glass cards with smooth hover effects.
- **Dynamic Animations:** Scroll-triggered entry animations and interactive elements powered by Framer Motion.
- **Custom Canvas Background:** Interactive particle background with mouse repulsion and connecting nodes.
- **Real-Time Stats:** Automatically scrapes and updates the participant and prize count directly from the Devpost dashboard.
- **Mobile-First:** Fully responsive design that looks flawless on phones, tablets, and desktops.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## 🚀 Getting Started

Follow these steps to run the website locally on your machine.

### 1. Install Dependencies
Make sure you have Node.js installed, then run:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 3. Production Build
To test the optimized production build (how it will run on Vercel):
```bash
npm run build
npm start
```

## 📝 Customization

- **Logo & Favicon:** Replace `public/logo.jpeg` and `app/icon.png` to update your branding.
- **Team & Judges:** Update the respective components (`components/sections/Team.tsx` and `components/sections/Judges.tsx`) with real images by adding them to the `public/images/` folder.
- **Links:** Update WhatsApp, Devpost, and social links in `components/sections/Footer.tsx` and `components/sections/Hero.tsx`.

## 🌍 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Simply push this code to a GitHub repository, connect it to Vercel, and it will automatically deploy and update whenever you push changes!

---

*Designed and built for builders worldwide. 💻❤️*
