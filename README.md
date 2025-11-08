# 🏔️ SSS Adventures - Final Year Trip 2025

![SSS Adventures](https://img.shields.io/badge/SSS-Adventures-gold?style=for-the-badge&logo=mountain)
![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

> An epic final year adventure awaits! Join us on an unforgettable journey through Sri Lanka's most breathtaking destinations. 🌄🏖️

## 🌟 Live Demo

**🚀 Deployed Application:** [Add Your Deployment Link Here]

<!-- Example deployment links - Replace with your actual link -->
<!-- 
- **Vercel:** https://sss-adventures.vercel.app
- **Netlify:** https://sss-adventures.netlify.app
- **GitHub Pages:** https://yourusername.github.io/SSS-Adventures
-->

---

## 🎯 About The Project

**SSS Adventures** is a modern, interactive web application designed for our Final Year Trip 2025. This website features a real-time countdown timer, detailed trip itinerary, and an engaging millionaire-style quiz game to build excitement for our upcoming adventure!

---


## ✨ Features

### 🏠 Home Page
- ⏰ **Real-time Countdown Timer** - Live countdown to trip start (Days, Hours, Minutes, Seconds)
- 🎨 **Animated Background** - Colorful floating particles and glowing effects
- 📍 **Trip Highlights** - Beautiful cards showcasing main destinations
- 🎯 **Interactive CTAs** - Quick navigation to itinerary and quiz

### 📅 Itinerary Page
- 📝 **Detailed Day-by-Day Schedule** - Complete breakdown of all activities
- 🎨 **Colorful Timeline Cards** - Each day with unique gradient colors
- 🗺️ **Location Information** - Precise details for each destination
- ✨ **Smooth Animations** - Hover effects and transitions

### 🎮 Millionaire Quiz
- 🏆 **10 Trip-Related Questions** - Test your knowledge about the adventure
- 💰 **Progressive Prize System** - From ₹1,000 to ₹5,00,00,000
- 🎉 **Winner Celebration** - Every answer shows "WINNER!" animation
- 🎨 **Classic TV Show Style** - Authentic millionaire game experience

### 🎨 Design Features
- 🌈 **Green & Gold Theme** - Vibrant, energetic color scheme
- 📱 **Fully Responsive** - Works perfectly on all devices
- ✨ **Smooth Animations** - Shimmer, glow, float, and bounce effects
- 🎭 **Modern UI/UX** - Glassmorphism and gradient effects
- 🔄 **Interactive Elements** - Hover states and transitions

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.x** - UI library
- **Lucide React** - Beautiful icon system

### Styling
- **Tailwind CSS 3.x** - Utility-first CSS framework
- **Custom CSS Animations** - Keyframe animations for special effects

### Build Tool
- **Vite** - Fast development and build tool

### Development
- **JavaScript (ES6+)** - Modern JavaScript features
- **React Hooks** - useState, useEffect for state management

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**

```bash
# Check Node.js version
node --version

# Check npm version
npm --version
```

---

## 📦 Installation

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/SSS-Adventures.git
cd SSS-Adventures/frontend
```

### 2. Install dependencies

```bash
# Install all required packages
npm install

# OR using yarn
yarn install
```

### 3. Install specific dependencies

```bash
# Install Lucide React (icons)
npm install lucide-react

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind
npx tailwindcss init -p
```

### 4. Configure Tailwind CSS

Create/Update `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 5. Update `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6. Add your logo

Place your logo files in the correct location:
```
src/assets/ssslogo01.png (logo with letters)
src/assets/ssslogo02.png (logo icon)
```

---

## 💻 Usage

### Development Server

```bash
# Start the development server
npm run dev

# OR using yarn
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# OR using yarn
yarn build
```

### Preview Production Build

```bash
# Preview the production build locally
npm run preview

# OR using yarn
yarn preview
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

```bash
# Or use Vercel CLI
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 📁 Project Structure

```
SSS-Adventures/
├── frontend/
│   ├── public/
│   │   └── (static assets)
│   ├── src/
│   │   ├── assets/
│   │   │   ├── ssslogo01.png
│   │   │   └── ssslogo02.png
│   │   ├── App.jsx              # Main application component
│   │   ├── main.jsx             # Application entry point
│   │   └── index.css            # Global styles with Tailwind
│   ├── index.html               # HTML template
│   ├── package.json             # Dependencies and scripts
│   ├── tailwind.config.js       # Tailwind configuration
│   ├── vite.config.js           # Vite configuration
│   └── README.md                # This file
└── .gitignore
```

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
