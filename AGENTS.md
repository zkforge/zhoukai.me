# Repository Guidelines

## Project Structure & Module Organization
- Root configs: `astro.config.ts`, `tsconfig.json`, `eslint.config.js`, `remark-collapse.d.ts`, `tailwind` plugins. Build artifacts land in `dist/`; static assets live in `public/` (search index copied to `public/pagefind/` after build).
- Source layout: `src/pages/` for routes; `src/layouts/` for shared shells; `src/components/` for UI parts; `src/assets/` for icons/images; `src/styles/` for global styles; `src/utils/` for helpers; `src/constants.ts` and `src/config.ts` for site-wide config; markdown content in `src/data/blog/`.

## Build, Test, and Development Commands
- Install: `pnpm install` (lockfile is `pnpm-lock.yaml`).
- Develop: `pnpm dev` (serves on `localhost:4321` by default). Use `pnpm astro <cmd>` for direct Astro CLI access.
- Type/Build: `pnpm build` runs `astro check` then production build, generates `pagefind`, and copies the index into `public/`.
- Preview: `pnpm preview` serves the built site for sanity checks.
- Quality: `pnpm lint` (ESLint), `pnpm format:check` / `pnpm format` (Prettier), `pnpm sync` (generate Astro types). Docker support: `docker compose up -d` for dev, `docker build -t astropaper .` then `docker run -p 4321:80 astropaper`.

## Coding Style & Naming Conventions
- Formatting: Prettier defaults (2-space indent, semicolons per tool, trailing commas where allowed) with `prettier-plugin-astro` and Tailwind sorting.
- Linting: ESLint with `@typescript-eslint` and `eslint-plugin-astro`; fix issues or justify disables inline.
- Naming: components/layouts PascalCase; utilities and functions camelCase; routes and content files kebab-case (`new-post.md`); config/constants in English with descriptive semantics.
- Styling: prefer Tailwind utility classes; keep shared tokens in `src/styles/` and avoid inline style duplication.

## Testing Guidelines
- No standalone automated tests today; minimum gate is `pnpm lint` + `pnpm build`. Treat `pnpm preview` plus a quick UI smoke (navigation, search, dark/light toggle) as required before PRs.
- When adding utilities, include usage examples in `src/utils/` docstrings or update related content to validate rendering.

## Commit & Pull Request Guidelines
- Commits follow Conventional Commits; `cz.yaml` is configured for Commitizen (e.g., `feat: add search refinements`). Keep commits focused and include rationale in the body when behavior changes.
- PRs should describe scope, testing performed, and any visual changes (attach screenshots/GIFs for UI). Link issues when available, note breaking changes, and update docs/content alongside code when relevant.
