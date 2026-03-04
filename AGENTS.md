# AGENTS.md

## Project Snapshot
- Stack: React 19 + TypeScript + Vite + Mantine + Vitest + Storybook.
- Node version: use `.nvmrc`.
- Package manager in CI: `npm` (`npm ci` is used by GitHub Actions).

## Development Workflow
1. Install dependencies:
   - `npm ci`
2. Start local app:
   - `npm run dev`
3. Run Storybook when working on components:
   - `npm run storybook`

## Validation Workflow
1. Fast checks while iterating:
   - `npm run typecheck`
   - `npm run lint`
   - `npm run vitest`
2. Full pre-merge gate:
   - `npm run test`
   - This runs: typecheck, prettier check, lint, vitest, and production build.

## Build and Preview Workflow
1. Build production assets:
   - `npm run build`
2. Preview built output locally:
   - `npm run preview`

## GitHub Workflows
- PR checks: `.github/workflows/npm_test.yml`
  - Trigger: pull requests to any branch.
  - Steps: `npm ci` -> `npm run build` -> `npm run test`.
- Pages deploy: `.github/workflows/deploy.yml`
  - Trigger: push to `main` or `master` (and manual dispatch).
  - Steps: `npm ci` -> `npm run build` -> upload `dist` -> deploy to GitHub Pages.

## Command Reference
- `npm run dev`: Start Vite dev server.
- `npm run build`: Type-check and build production bundle.
- `npm run preview`: Preview built app.
- `npm run typecheck`: Run TypeScript checks without emitting files.
- `npm run eslint`: Run ESLint.
- `npm run stylelint`: Run Stylelint for CSS files.
- `npm run lint`: Run ESLint + Stylelint.
- `npm run prettier`: Run Prettier check for TS/TSX files.
- `npm run prettier:write`: Format TS/TSX files with Prettier.
- `npm run vitest`: Run tests once.
- `npm run vitest:watch`: Run tests in watch mode.
- `npm run test`: Run full quality gate + build.
- `npm run storybook`: Start Storybook dev server.
- `npm run storybook:build`: Build static Storybook output.
