# Safari Site

Static-first Astro site for the Kenya and Tanzania safari itinerary.

## Commands

All commands below run from the `site` folder:

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run media:optimize` | Generate responsive publishable images from local source files |
| `npm run dev` | Optimize media if needed, then start the Astro dev server |
| `npm run build` | Optimize media if needed, then build the production site |
| `npm run preview` | Preview the built site |

## Media Workflow

Original source images live in `src/media/source/`.

Media metadata and attribution live in `src/data/media-library.json`.

Optimized publishable variants are generated into `public/media/optimized/` during the build. The originals stay out of the published asset tree.

The optimizer keeps a local manifest in `.media-cache/manifest.json` so unchanged source images are skipped on later runs.

To add a new image:

1. Drop the highest-quality licensed source file into `src/media/source/`.
2. Add its metadata, attribution, and responsive widths to `src/data/media-library.json`.
3. Optionally attach it to shared destination keys or specific day slugs.
4. Run `npm run media:optimize`.
5. Reference the generated asset set through `src/components/ResponsivePhoto.astro` or the helpers in `src/data/media-library.ts`.
