# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (runs on port 9002 with turbopack)
- **Build**: `npm run build`
- **Start production**: `npm start`
- **Lint**: `npm run lint`
- **Type check**: `npm run typecheck`
- **AI development**: `npm run genkit:dev` (Genkit development server)
- **AI watch mode**: `npm run genkit:watch` (Genkit with hot reload)

## Architecture Overview

This is a Next.js 15 portfolio application with AI capabilities, built with TypeScript and Tailwind CSS.

### Core Structure
- **Frontend**: Next.js with App Router, React components using shadcn/ui
- **AI Integration**: Google Genkit AI for cover letter generation and job suggestions
- **Styling**: Tailwind CSS with custom design system and dark mode support
- **Data**: Static project data defined in TypeScript objects

### Key Directories
- `src/app/` - Next.js App Router pages and components
- `src/ai/` - AI flows and Genkit configuration
- `src/components/ui/` - shadcn/ui components
- `src/lib/` - Utilities and data (projects, utils)
- `docs/` - Project documentation and blueprints

### AI Features
The application includes two main AI flows:
1. **Cover Letter Generator** (`src/ai/flows/ai-cover-letter-generator.ts`) - Generates personalized cover letters
2. **Job Opportunity Suggester** (`src/ai/flows/job-opportunity-suggester.ts`) - Suggests relevant job opportunities

Both use Google's Gemini 2.0 Flash model via Genkit framework.

### Component Architecture
- **Sections**: Main content sections (Intro, Projects, Experience, etc.)
- **Shared**: Reusable components (Header, Footer, Cards, etc.)
- **UI**: shadcn/ui component library with custom theming

### Data Management
- Project data is statically defined in `src/lib/projects-data.ts`
- Uses TypeScript interfaces for type safety
- No external database - all content is file-based

### Styling System
- Custom Tailwind configuration with CSS variables for theming
- Dark/light mode support via next-themes
- Responsive design with mobile-first approach
- Uses Geist fonts (sans and mono variants)

### Build Configuration
- TypeScript and ESLint errors are ignored during builds (development-focused)
- Supports remote images from placehold.co
- Configured for Firebase hosting via apphosting.yaml