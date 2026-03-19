# Jess Portfolio - Jacinta Nthenya Nzomo

A stunning, ultra-modern portfolio website for Jacinta Nthenya Nzomo, a Public Health Professional and Healthcare Manager.

![Portfolio Preview](public/preview.png)

## 🚀 Features

- **Ultra-modern Design**: Pink/Purple/Teal gradient color scheme with glassmorphism effects
- **3D Particle Background**: Interactive Three.js particle system with floating geometric shapes
- **Smooth Animations**: Framer Motion-powered transitions and micro-interactions
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Dark Mode**: Beautiful dark theme with vibrant gradient accents
- **Optimized Performance**: Fast loading with optimized assets and lazy loading
- **Clean Code**: Well-organized, maintainable TypeScript codebase

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn or pnpm

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/steph500/jess-portfolio.git
   cd jess-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors

The portfolio uses a custom pink/purple/teal gradient scheme defined in `src/app/globals.css`:

```css
.gradient-pink {
  @apply from-pink-400 via-purple-400 to-teal-400;
}
```

To change the color scheme, modify the Tailwind utility classes throughout the components.

### Content

All content is managed in individual components:

- **Hero**: `src/components/Hero.tsx`
- **About**: `src/components/About.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Experience**: `src/components/Experience.tsx`
- **Certifications**: `src/components/Certifications.tsx`
- **Contact**: `src/components/Contact.tsx`

### 3D Effects

The particle background is in `src/components/ParticlesBackground.tsx`. You can adjust:

- Particle count (currently 2000)
- Colors (pink, purple, teal)
- Floating shapes
- Animation speed

## 📁 Project Structure

```
jess-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and custom animations
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Main page component
│   └── components/
│       ├── Hero.tsx             # Hero section with name and tagline
│       ├── About.tsx            # About section with personal info
│       ├── Skills.tsx           # Skills grid with categories
│       ├── Experience.tsx       # Work experience timeline
│       ├── Certifications.tsx   # Certifications and training
│       ├── Contact.tsx          # Contact form and info
│       ├── Footer.tsx           # Footer component
│       ├── Navigation.tsx       # Navigation menu
│       └── ParticlesBackground.tsx  # 3D particle background
├── public/                      # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🌐 Deployment

The portfolio is deployed on GitHub Pages at:
**[Live URL Coming Soon]**

### Deploy to GitHub Pages

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Export static files** (add to package.json scripts):
   ```json
   "export": "next export"
   ```

3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select source: `gh-pages` branch or `main` folder `/out`
   - Save and wait for deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

- **Name**: Jacinta Nthenya Nzomo
- **Email**: jacintanthenyajnn@gmail.com
- **LinkedIn**: [Jacinta Nzomo](https://www.linkedin.com/in/jacinta-nzomo-b3a627205/)
- **Phone**: +254-791575544

---

Built with ❤️ using Next.js, Three.js, and Framer Motion
