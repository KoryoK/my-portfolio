# koryo-kakinoki.com

Portfolio and journal for Koryo Kakinoki (柿木滉亮) — GenAI engineer, data analyst and trainer.

Next.js 16 (App Router) + Tailwind 4, statically generated and deployed on Vercel.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerendered)
npm run lint     # tsc --noEmit
```

## Content

All content lives in `src/data/*.ts` as typed arrays — there is no CMS. Adding an entry
publishes its page, sitemap entry and (for posts) OG image automatically.

| File | Drives |
| --- | --- |
| `works.ts` | Career timeline on the home page |
| `projects.ts` | `/projects` and `/projects/[slug]` |
| `blog.ts` | `/blog` and `/blog/[slug]` |
| `services.ts` | Services section |
| `training.ts` | Training section |

Every entry needs both languages: `_ja` fields are Japanese, the plain fields are English.
Japanese is served at the root, English under `/en`, with hreflang links between them.

See `.claude/skills/add-entry/SKILL.md` for the entry-authoring workflow.
