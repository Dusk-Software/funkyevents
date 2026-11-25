# Funky Events

A responsive event-planning website built with Astro, TypeScript, and Tailwind CSS. The site is statically generated and ready to deploy to Cloudflare Pages.

## Getting started

- Requires Node.js 22 or newer.
- `npm install` installs dependencies.
- `npm run dev` starts the local development server.
- `npm run check` checks Astro and TypeScript diagnostics.
- `npm run build` generates the production site in `dist/`.
- `npm run preview` previews the production build locally.

## Content and assets

- Add Markdown articles in `src/content/blog/`. Each post uses the collection schema in `src/content.config.ts`.
- Shared copy, event services, portfolio entries, navigation, and verified Google review excerpts live in `src/data/site.ts`.
- Import local images from `src/assets/` and use Astro’s `<Image />` component to generate optimized WebP output.
- The gallery uses selected event photos supplied for Funky Events. Service imagery is separate from the portfolio; no stock portrait is presented as Josephine.
- Blog posts are drafts by default. Set `draft: false` in a post’s frontmatter before publishing it.

## Verified business details

The planner name (Josephine Ishioye), email (`funkeishioye@gmail.com`), phone (`401-516-0937`), website (`funkyevents.net`), services, and service area come from supplied business materials. The contact form submits directly to the configured Formspree endpoint. Confirm the notification email and form settings in Formspree before launch. The Google Maps listing is linked for directions and reviews.

## Cloudflare Pages

Create a Pages project from this repository and use:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22`

The site uses Astro’s static output and does not require a server adapter or client-side framework.
