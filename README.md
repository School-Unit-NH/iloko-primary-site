# Iroko (Iloko) Primary School Website

A modern, high-performance static website for Iroko (Iloko) Primary School, built with React 19 and Vite.

## 🚀 Project Overview

This project is a complete rewrite of the school's online presence, transitioning from a secondary school context to a primary school focus. It is designed to be fast, SEO-friendly, and easy to maintain by developers.

- **URL**: [https://github.com/School-Unit-NH/iloko-primary-site](https://github.com/School-Unit-NH/iloko-primary-site)
- **Status**: Active Development / Production Ready

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite 7](https://vitejs.dev/)
- **SSG Engine**: [vite-react-ssg](https://github.com/antfu/vite-react-ssg)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/)

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── about/           # Components for the About page
│   ├── academics/       # Components for the Academics section
│   ├── admissions/      # Enrollment and pricing components
│   ├── contact/         # Forms and contact info
│   ├── gallery/         # Image and video displays
│   ├── home/            # Homepage-specific sections
│   └── layout/          # Footer, Navbar, and Shell
├── pages/               # Top-level Page components (Home, About, etc.)
├── App.tsx              # Application shell and Routes definition
├── main.tsx             # Entry point (ViteReactSSG setup)
└── index.css            # Global styles and Tailwind imports
```

## 🛠 Development & Build

### Installation

```bash
npm install
```

### Local Development

Runs the project in development mode with HMR.

```bash
npm run dev
```

### Static Build (Recommended for Production)

This project uses **Static Site Generation (SSG)** to ensure maximum compatibility with static hostings (like CPanel) and optimal SEO.

```bash
npm run build:static
```

**Why `build:static`?**
- **SEO**: Generates actual HTML files for every route, making it easily indexable by search engines.
- **Performance**: Near-instant initial load as the browser receives pre-rendered HTML.
- **Compatibility**: Works on any host that can serve static files (CPanel `public_html`, Netlify, Vercel, etc.) without needing a Node.js runtime for the client.

### Standard Build

Standard Single Page Application (SPA) build. Uses standard Vite build process.

```bash
npm run build
```

## 📋 Maintenance Guide

### Adding a New Page
1. Create a new component in `src/pages/`.
2. Add the route configuration in `src/App.tsx`.
3. If using `build:static`, the new route will automatically be picked up and rendered to HTML during the build process.

### Updating Styles
Tailwind CSS is used for all styling. Global tokens (colors, fonts) are defined in `tailwind.config.js`.

## 📄 License

Private - All rights reserved.
