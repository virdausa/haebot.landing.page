# Haebot Teknologi - Company Website

## Overview

This is a company landing page and contact form application for **Haebot Teknologi**, an Indonesian CNC (Computer Numerical Control) machine parts supplier. The site showcases their services, product categories, and provides a contact/inquiry form. It's built as a full-stack TypeScript application with a React frontend and Express backend, using PostgreSQL for data storage.

The application is a single-page marketing website with one API endpoint (`POST /api/inquiries`) that stores contact form submissions in the database. External links point to `store.haebot.com` (product catalog) and `project.haebot.com` (projects).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — currently only `/` (Home) and a 404 page
- **Styling**: Tailwind CSS with CSS variables for theming (industrial tech palette: deep blue, steel gray, electric cyan accents)
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives — full component library in `client/src/components/ui/`
- **Fonts**: Space Grotesk (display/headings) and Outfit (body text), loaded via Google Fonts. CSS variables `--font-display` and `--font-body` are defined; Tailwind should extend `fontFamily` with `display` and `body` keys
- **State Management**: TanStack React Query for server state; React Hook Form + Zod for form validation
- **Icons**: Lucide React
- **Path aliases**: `@/` → `client/src/`, `@shared/` → `shared/`, `@assets/` → `attached_assets/`

### Backend
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, run with `tsx` in development
- **API**: Single REST endpoint — `POST /api/inquiries` for contact form submissions
- **Validation**: Zod schemas shared between client and server (defined in `shared/schema.ts` and `shared/routes.ts`)
- **Development**: Vite dev server is used as middleware in development (HMR via `server/vite.ts`); in production, static files are served from `dist/public`

### Shared Layer (`shared/`)
- **`schema.ts`**: Drizzle ORM table definitions and Zod insert schemas. Currently has one table: `inquiries` (id, name, email, message, createdAt)
- **`routes.ts`**: Type-safe API route definitions with method, path, input schema, and response schemas. This pattern allows both client and server to share validation logic

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL, connected via `DATABASE_URL` environment variable
- **Connection**: `pg` Pool in `server/db.ts`
- **Migrations**: Use `npm run db:push` (drizzle-kit push) to sync schema to database. Migration files go to `./migrations/`
- **Schema location**: `shared/schema.ts`

### Build Process
- **Development**: `npm run dev` — runs tsx with Vite middleware for HMR
- **Production build**: `npm run build` — Vite builds the client to `dist/public`, esbuild bundles the server to `dist/index.cjs`
- **Production start**: `npm start` — runs `node dist/index.cjs`

### Project Structure
```
client/           → React frontend
  src/
    components/   → App components (Navigation, ContactForm, ServiceCard, ProductCategory)
    components/ui/→ shadcn/ui component library
    hooks/        → Custom hooks (use-inquiries, use-toast, use-mobile)
    lib/          → Utilities (queryClient, utils)
    pages/        → Page components (Home, not-found)
server/           → Express backend
  index.ts        → App entry point, middleware setup
  routes.ts       → API route handlers
  storage.ts      → Database access layer (IStorage interface + DatabaseStorage)
  db.ts           → Database connection
  vite.ts         → Vite dev server integration
  static.ts       → Production static file serving
shared/           → Shared between client and server
  schema.ts       → Drizzle table definitions + Zod schemas
  routes.ts       → Type-safe API route contracts
script/           → Build scripts
```

### Key Design Patterns
- **Storage interface pattern**: `server/storage.ts` defines an `IStorage` interface, with `DatabaseStorage` as the implementation. This allows for easy swapping of storage backends
- **Shared validation**: Zod schemas are defined once in `shared/` and used on both client (form validation) and server (request validation)
- **Type-safe API contracts**: `shared/routes.ts` defines API routes with their methods, paths, input/output schemas — used by both frontend hooks and backend handlers

## External Dependencies

- **PostgreSQL**: Required database, connected via `DATABASE_URL` environment variable. Must be provisioned before the app can start
- **Google Fonts**: Outfit, Space Grotesk, DM Sans, Fira Code, Geist Mono, Architects Daughter (loaded via CDN in `index.html` and `index.css`)
- **External sites**: Navigation links to `store.haebot.com` (catalog) and `project.haebot.com` (projects) — these are separate applications, not part of this codebase
- **Replit plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` (dev-only, conditional on `REPL_ID`)