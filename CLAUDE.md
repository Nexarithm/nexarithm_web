# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture Overview

This is a React + TypeScript personal website built with:
- **Vite** as the build tool and dev server
- **React Router** for client-side routing
- **Tailwind CSS** for styling with typography plugin
- **Vercel Analytics** for web analytics
- **React Markdown** for blog content rendering

### Project Structure

- `src/pages/` - Main application pages (Home, About, Blogs, BlogPost, Projects)
- `src/components/` - Reusable UI components (Header, SocialLinks)  
- `src/data/` - Static data definitions (blogs.ts contains BlogPost interface and blog content)
- `public/` - Static assets including avatar images

### Key Architecture Patterns

**Blog System**: Blog posts are defined as objects in `src/data/blogs.ts` with markdown content stored as strings. Each post has:
- `id` (URL slug)
- `internalId` (numeric identifier) 
- `title`, `date`, `content` (markdown string)

**Routing**: Uses React Router with routes:
- `/` - Home page
- `/about` - About page  
- `/blogs` - Blog listing
- `/blog/:blogId` - Individual blog posts
- `/projects` - Projects page

**Responsive Design**: Mobile-first approach with responsive breakpoints (md:) throughout components.

**Content Management**: Static blog content is stored directly in TypeScript files rather than using a CMS or markdown files.

## Deployment

- Deployed on Vercel with SPA routing configuration in `vercel.json`
- Analytics integrated via `@vercel/analytics`
- Production builds via `npm run build` (includes TypeScript compilation)
