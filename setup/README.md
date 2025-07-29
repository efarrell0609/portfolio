# Portfolio Website Setup Guide

Complete setup documentation for a modern React portfolio website with live comments and email notifications.

## 🚀 Quick Setup

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Set up Firebase** (for comments)
4. **Configure EmailJS** (for email notifications)
5. **Run development server**: `npm run dev`
6. **Deploy to hosting**

## 📁 Setup Files

- **[Firebase Setup](./firebase-setup.md)** - Firebase configuration
- **[EmailJS Setup](./emailjs-setup.md)** - Email notifications

## 🎯 Features

- ✅ React with TypeScript
- ✅ Vite for fast development
- ✅ Responsive design
- ✅ Dark/light mode
- ✅ Color themes
- ✅ Live comments (Firebase)
- ✅ Email notifications (EmailJS)
- ✅ Smooth animations
- ✅ Mobile menu
- ✅ FaultyTerminal background effect
- ✅ Scroll animations

## 🔧 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, ScrollReveal
- **Backend**: Firebase Firestore
- **Email**: EmailJS
- **WebGL**: OGL (for FaultyTerminal effect)
- **Icons**: Heroicons, Lucide React

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Key Dependencies

- `react` & `react-dom` - UI framework
- `react-router-dom` - Routing
- `tailwindcss` - Styling
- `framer-motion` - Animations
- `firebase` - Backend services
- `@emailjs/browser` - Email notifications
- `ogl` - WebGL rendering
- `lucide-react` - Icons

## 🎨 Customization

- **Colors**: Update `currentColor` in SettingsContext
- **Content**: Edit components in `src/components/`
- **Styling**: Modify Tailwind classes
- **Animations**: Adjust Framer Motion settings