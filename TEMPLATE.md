# Next.js Project Template

This template provides a production-ready Next.js project structure with best practices built-in.

## Quick Start

```bash
# Copy this entire folder as a starting point
cp -r templates/nextjs-template new-project
cd new-project
npm install
npm run dev
```

## Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/       # Reusable React components
│   ├── ui/          # UI primitives
│   └── layout/      # Layout components
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
├── types/           # TypeScript definitions
├── styles/          # Global & component styles
├── constants/       # App constants
└── services/        # API services
```

## Configuration Files

- **next.config.ts**: Next.js configuration
- **tsconfig.json**: TypeScript settings
- **eslint.config.mjs**: ESLint rules
- **netlify.toml**: Netlify build settings
- **.github/workflows/ci-cd.yml**: GitHub Actions CI/CD

## Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
DATABASE_URL=your_database_url
```

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run type-check  # Run TypeScript type checking
```

## CI/CD Setup

1. Push to GitHub
2. GitHub Actions runs type-check & lint
3. If passing, builds the project
4. On main branch, deploys to Netlify automatically

### Secrets Required in GitHub

Set these in your GitHub repository settings → Secrets:

- `NETLIFY_AUTH_TOKEN`: Get from https://app.netlify.com/user/applications/personal
- `NETLIFY_SITE_ID`: Found in Netlify project settings

## Deployment

### Automatic (via GitHub)
Push to `main` → Netlify auto-deploys

### Manual (via CLI)
```bash
netlify deploy --prod
```

## Best Practices Included

✅ TypeScript for type safety
✅ ESLint for code quality
✅ GitHub Actions CI/CD pipeline
✅ Netlify auto-deployment
✅ Component-based architecture
✅ Path aliases (`@/*` → `src/*`)
✅ Performance optimizations
✅ SEO-friendly structure
