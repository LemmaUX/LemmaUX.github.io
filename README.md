# Jorge Terceros - Portfolio Website

A modern, responsive portfolio website for Jorge Terceros, a professional Data Engineer specializing in AI-focused real-time systems.

## 🌟 Features

- **Modern Design**: Clean, dark-themed UI with gradient animations
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive**: Smooth animations and hover effects using Framer Motion
- **Fast**: Built with Vite for lightning-fast development and builds
- **TypeScript**: Full type safety and better developer experience

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📋 Sections

1. **Hero Section**: Animated introduction with call-to-action buttons
2. **About Me**: Professional description with tech stack badges
3. **Projects**: Featured projects with GitHub and demo links
4. **Tech Stack**: Interactive grid of technologies and tools
5. **Resume**: Download section for CV
6. **Contact**: Social media links and contact information

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jorge-terceros-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Hero section with animations
│   ├── About.tsx         # About me section
│   ├── Projects.tsx      # Projects showcase
│   ├── TechStack.tsx     # Technology grid
│   ├── Resume.tsx        # Resume download section
│   └── Contact.tsx       # Contact information
├── App.tsx               # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue gradient theme
- Dark theme: Custom dark color palette
- Accent colors: Purple and cyan highlights

### Content
Update the content in each component file:
- Personal information in `Hero.tsx`
- About text in `About.tsx`
- Project details in `Projects.tsx`
- Contact links in `Contact.tsx`

### Styling
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind classes
- Custom animations are defined in `tailwind.config.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Website**: https://tercius.me
- **Email**: jorge@tercius.me
- **GitHub**: https://github.com/jorge-terceros
- **LinkedIn**: https://linkedin.com/in/jorge-terceros

---

Built with ❤️ by Jorge Terceros 