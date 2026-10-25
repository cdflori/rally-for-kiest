# Rally for Kiest

Website for **Rally for Kiest**, a coalition of Dallas neighbors, parents, players and students working to keep Kiest Tennis Center a place where any kid can play tennis for free, whoever holds the city's management contract.

> Work in progress. This first commit sets up the project and its content model; pages and design come next.

## Stack

- [Astro 5](https://astro.build) with content collections (typed with Zod)
- [Tailwind CSS 4](https://tailwindcss.com) via the Vite plugin
- Self-hosted variable fonts via Fontsource
- GitHub Actions CI: type check and build on every push

## Run it locally

```bash
npm install
cp .env.example .env   # optional
npm run dev            # http://localhost:4321
npm run build          # type check + static build to dist/
```

## Where the content lives

| What | File |
| --- | --- |
| Petition, social and city links, upcoming events | `src/site.config.ts` |
| Sourced history, 1950s to today | `src/content/timeline.json` |
| RFP and public-records tracker | `src/content/milestones.json` |
| Key figures used across the site | `src/content/facts.json` |

Every timeline entry and milestone carries a `sources` list, so claims on the site can be traced to the public record. A link left blank in `site.config.ts` is hidden rather than shown broken.
