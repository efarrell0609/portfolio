# React Portfolio

A modern React portfolio website built with React 18, TypeScript, Vite, and TailwindCSS 3.

## Tech Stack

- **Frontend**: React 18 + React Router 6 (SPA) + TypeScript + Vite + TailwindCSS 3
- **UI**: Radix UI + TailwindCSS 3 + Lucide React icons
- **Testing**: Vitest

## Project Structure

```
client/                   # React SPA frontend
├── pages/                # Route components (Index.tsx = home)
├── components/ui/        # Pre-built UI component library
├── App.tsx               # App entry point with SPA routing setup
└── global.css            # TailwindCSS 3 theming and global styles
```

## Key Features

### SPA Routing System

The routing system is powered by React Router 6:

- `client/pages/Index.tsx` represents the home page.
- Routes are defined in `client/App.tsx` using the `react-router-dom` import
- Route files are located in the `client/pages/` directory

For example, routes can be defined with:

```typescript
import { BrowserRouter, Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Index />} />
  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
  <Route path="*" element={<NotFound />} />
</Routes>;
```

### Styling System

- **Primary**: TailwindCSS 3 utility classes
- **Theme and design tokens**: Configure in `client/global.css` 
- **UI components**: Pre-built library in `client/components/ui/`
- **Utility**: `cn()` function combines `clsx` + `tailwind-merge` for conditional classes

```typescript
// cn utility usage
className={cn(
  "base-classes",
  { "conditional-class": condition },
  props.className  // User overrides
)}
```

## Development Commands

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run preview    # Preview production build
npm run typecheck  # TypeScript validation
npm test          # Run Vitest tests
```

## Adding Features

### Add new colors to the theme

Open `client/global.css` and `tailwind.config.ts` and add new tailwind colors.

### New Page Route
1. Create component in `client/pages/MyPage.tsx`
2. Add route in `client/App.tsx`:
```typescript
<Route path="/my-page" element={<MyPage />} />
```

## Production Deployment

- **Standard**: `npm run build` creates optimized production build
- **Preview**: `npm run preview` to test production build locally
- **Deploy**: Upload the `dist` folder to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Architecture Notes

- Modern React 18 with TypeScript
- Vite for fast development and optimized builds
- Full hot reload for rapid development
- Production-ready with static hosting support
- Comprehensive UI component library included
- Responsive design with TailwindCSS
