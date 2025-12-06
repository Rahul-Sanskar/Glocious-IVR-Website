# 🚀 SoftBiz | Antigravity
> **State-of-the-Art Digital Agency Experience**

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js&logoColor=white) 
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react) 
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-Animation-green?style=for-the-badge&logo=greensock)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-white?style=for-the-badge&logo=three.js&logoColor=black)

---

## 🌌 Overview

**SoftBiz** (codenamed *Antigravity*) is a next-generation agency portfolio website engineered to deliver an immersive, high-performance user experience. It defies standard web design tropes by blending **cinematic 3D visuals**, **fluid GSAP animations**, and a **premium dark-mode aesthetic** into a cohesive, lightning-fast application.

Built on the cutting-edge **Next.js App Router**, this project prioritizes **Core Web Vitals** while pushing the boundaries of what's possible in a browser.

## ✨ Key Features

### 🎨 Immersive UI/UX
- **3D Particle Core**: A stunning, interactive 3D constellation effect in the Hero section, lazy-loaded for zero impact on initial load time.
- **Glassmorphism Design System**: A carefully curated dark theme utilizing deep blacks, neon accents (`#6366f1` / `#06b6d4`), and translucent glass panels.
- **Smooth Scrolling**: Integrated **Lenis** for buttery smooth scroll mechanics that give the site a native app feel.

### ⚡ Performance Engineers
- **Global Asset Loader**: A custom-built client-side loader that handles asset simulation and provides a "System Online" boot-up sequence.
- **Lazy Loading**: Heavy components (like the Three.js canvas) are dynamically imported to keep the main bundle size minimal.
- **React Server Components**: effectively utilizes RSCs for static content rendering to ensure instant HTML delivery.

### 🛠 Functional Depth
- **Dynamic Service Pages**: deeply detailed, SEO-optimized landing pages for every service (Shopify, Web Dev, Amazon FBA, etc.) with unique deliverables and FAQs.
- **Animated Navigation**: A full-screen overlay mobile menu with staggered GSAP entrance animations.
- **Typewriter Effects**: A robust, fail-safe typing animation engine for the main headline.

---

## 🏗 Tech Stack

| Category | Technology | Usage |
|----------|------------|-------|
| **Core** | [Next.js 15](https://nextjs.org/) | App Router, Server Actions, Layouts |
| **UI** | [Tailwind CSS](https://tailwindcss.com/) | Styling, Utility-first Design |
| **Motion** | [GSAP](https://gsap.com/) | Complex Sequences, ScrollTrigger, TextPlugin |
| **3D** | [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | Particles, Canvas Management |
| **Icons** | [Lucide React](https://lucide.dev/) | Consistent, lightweight SVG icons |
| **Scroll** | [Lenis](https://lenis.studiofreight.com/) | Inertia-based smooth scrolling |

---

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites
- **Node.js**: v18.17.0 or higher
- **npm** or **yarn** or **pnpm**

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/antigravity.git
    cd antigravity
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Launch**
    Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout (Server Component)
│   ├── page.tsx          # Home page
│   ├── services/[slug]/  # Dynamic Service Detail pages
│   └── globals.css       # Global styles & CSS variables
├── components/           # React Components
│   ├── home/             # Landing page sections (Hero, Services, etc.)
│   ├── layout/           # Header, Footer, GlobalLoader
│   └── ui/               # Reusable primitives (Buttons, Cards)
└── lib/                  # Utilities and helper functions
```

---

## 🎨 Theme Configuration

The design system is centrally managed in `globals.css` via CSS variables. You can easily rebrand the application by adjusting these values:

```css
:root {
  --background: #050508;       /* Deep Space Black */
  --primary: #6366f1;          /* Electric Indigo */
  --secondary: #0f1115;        /* Obsidian */
  --accent: #06b6d4;           /* Cyber Cyan */
}
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Engineered with ❤️ by <b>SoftBiz Team</b></p>
  <p><i>The Future Is Now.</i></p>
</div>
