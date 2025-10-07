# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 frontend application for TRAQ, built with Vite. The app fetches content from a Strapi CMS backend and displays events, programming schedules, and organizational information.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:5174)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Data Flow
- **Strapi CMS Backend**: Content is managed in Strapi and fetched via REST API
- **API Service** (`src/services/api.js`): Centralized axios client for all API calls
- **Pinia Store** (`src/stores/content.js`): Global state management for home, about, and events data
- **Components**: Data flows from store → views → components

### Routing & Navigation
The app uses Vue Router with custom page transitions:
- Route definitions in `src/router/index.js`
- **GlobalTransition** component (`src/components/global/GlobalTransition.vue`) handles all page transitions using GSAP
- Transitions animate a full-screen overlay and reset scroll position using Lenis
- **Important**: Page transitions are handled globally via router hooks in GlobalTransition, not per-component

### Smooth Scrolling
- **Lenis** is initialized in `src/main.js` and exposed globally as `window.lenis`
- GlobalTransition uses `window.lenis.scrollTo(0, { immediate: true })` to reset scroll on navigation
- All components can access the Lenis instance via `window.lenis`

### Component Structure
```
src/
├── components/
│   ├── global/         # GlobalHeader, GlobalFooter, GlobalNavigation, GlobalTransition
│   ├── home/           # Home page sections (Hero, Intro, Events, Upcoming, Newsletter, Donation)
│   ├── about/          # About page sections (Hero, Content)
│   ├── programmation/  # Programming page sections (Hero, List)
│   ├── single/         # Single event page sections (Hero, Content, Events)
│   └── contact/        # Contact page sections (Content)
├── views/              # Page-level components that compose sections
├── services/
│   ├── api.js         # Axios instance and API methods
│   └── time.js        # Date/time formatting utilities
└── stores/
    └── content.js     # Pinia store for CMS content
```

### API Integration
- Base URL configured via `VITE_API_URL` environment variable (defaults to production Strapi instance)
- All endpoints follow pattern: `/api/{resource}?populate=*`
- Events are fetched by `documentId` field for single event pages

### Path Aliases
- `@` is aliased to `./src` (configured in `vite.config.js` and `jsconfig.json`)
- Always use `@/` imports for consistency

### Deployment
- Configured for Vercel with SPA routing (`vercel.json` handles client-side routing)
- All routes rewrite to `index.html` for Vue Router to handle
