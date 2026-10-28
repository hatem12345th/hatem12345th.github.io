# Hatem Taleb — 2026 portfolio

Existing Astro portfolio, updated in place. Static HTML, scoped components, a shared stylesheet, and a small animated canvas. No backend, framework migration, or new runtime dependencies.

## Run locally

Use Node.js **22.23.4 or newer** (the installed Astro 7.4.2 requires this minimum) and pnpm **10.25.0**.

```sh
nvm use
pnpm install --frozen-lockfile
pnpm dev --background
```

Visit the URL printed by Astro, normally `http://localhost:4321`.

```sh
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

## Production preview

```sh
pnpm build
pnpm preview
```

Astro generates `dist/`, which can be served by any static web server. There are no API routes or contact service requirements. Email links open the visitor's email client.

## Edit content

- `src/data/portfolio.ts`: profile, project descriptions/status, grouped technologies, and security interests.
- `src/pages/index.astro`: Home, About, Experience, Projects, Security, and Contact content.
- `src/components/`: navigation, background, project cards, technology list, and SVG icons.
- `src/styles/global.css`: responsive layout, purple/cyan palette, focus styles, and reduced-motion support.
- `public/`: personal H logo, locally hosted Devicon logos, robots.txt, and sitemap.

## GitHub Pages user-site deployment

Target repository: `hatem12345th/hatem12345th.github.io`.

1. Test locally with `pnpm build` and `pnpm preview`.
2. In GitHub repository **Settings → Pages**, choose **GitHub Actions** as the source.
3. When ready, push the tested changes to `main`, or run **Deploy portfolio to GitHub Pages** manually from Actions.
4. The workflow installs the locked pnpm dependencies, builds `dist/`, and deploys to `https://hatem12345th.github.io/`.

`astro.config.mjs` explicitly uses static output and the root user-site URL. No repository subdirectory base path is needed. Canonical metadata and sitemap use the same production URL.

Nothing is published merely by running the build. No changes have been pushed as part of this update.

## Content evidence and remaining confirmations

Checked against the public GitHub profile/API and the owner's supplied brief on 2026-10-28:

- Public profile: <https://github.com/hatem12345th>. Confirms JavaScript/TypeScript, React, Node.js, Express, MongoDB, SQLite, and Tailwind. Docker is listed as learning.
- Public Prisma/Express manifest: <https://github.com/hatem12345th/privateschool/blob/main/package.json>.
- Public security repositories: <https://github.com/hatem12345th/ctf-writeups> and <https://github.com/hatem12345th/ctf-blog>. These are linked without rankings, disclosure claims, or invented certifications.
- `OwnControlle`, `AntStore`, and `SanteConsult` returned 404 to unauthenticated GitHub API requests. They may be private, renamed, or unavailable. Cards use the owner's descriptions, say public source is unavailable, and do not include broken links. Confirm public URLs before adding source/demo buttons.
- OwnControl and AntStore use the neutral status “Application project”; no completion claim is made. Confirm current delivery status if a more specific label is wanted.
- Diagnostic Center (previously Medical Center Management Suite) is ongoing; SanteConsult is in development. Their listed areas are project focus, not claims that every feature has shipped.
- The public `Pos_system` README only says it is a desktop app using Wails; there is not enough evidence to equate it with OwnControl, so it is not substituted.
- Contact email uses `hatemtaleb803@gmail.com` from the public profile. The previous site used `h.taleb@esi-sba.dz`; confirm if that should be preferred instead.
- Education and June 2025 internship are owner-supplied; the owner corrected the earlier September date. No internship responsibilities, stack, achievements, graduation dates, or seniority were inferred.
- The owner identified Vuln3ra as their CTF team. The team name and profile are verified at <https://ctftime.org/team/373233/>; the security section links directly to it without embedding changing rankings or attributing team results to an individual.
- Local `../AntStore` inspection confirms React, TypeScript, Vite, and Tailwind on the frontend, with Bun, Hono, and `bun:sqlite` on the backend. Its POS, inventory, supplier, purchase-order, and permission modules support the updated retail application description. Analytics, performance, and integrations are marked as locked future routes and are not described as delivered features. The current manifests do not include Capacitor, so the previous Android/Capacitor description is not used for this version.
- Bun and Deno are included at the owner's request as runtime experience. AntStore's checked source uses Bun, not Deno; no Deno-specific project is claimed.
- PostgreSQL, Microsoft SQL Server, Drizzle ORM, and handwritten SQL queries are included at the owner's request as database skills. They are not attributed to a specific project without further evidence.
- Go is included under Backend at the owner's request. Wails 3 and Capacitor appear under Desktop & Android, describing desktop development and Android APK packaging from web builds. This does not claim that a Capacitor interface is written in native Android UI code. The local Wails icon is a generic desktop illustration.
- Hono is included under Backend and verified in the local AntStore source. Elysia is included at the owner's request and is not attributed to AntStore.
- Ghidra and Redis were not added as practical skills without supporting evidence. AI, cloud security, malware analysis, and forensics are described as interests or learning.
- The Currently Learning section presents AI for Developers and Cloud Engineering as learning paths requested by the owner. Topics describe intended study areas, not completed courses, certifications, or production expertise. Edit them in `learningPaths` in `src/data/portfolio.ts`.

Technology logos are from [Devicon](https://github.com/devicons/devicon), hosted locally under `public/icons/`. See the accompanying Devicon license. Product names and logos belong to their respective owners.

The Drizzle and Hono logos are from [Simple Icons](https://github.com/simple-icons/simple-icons), distributed under CC0. The Elysia logo is from [Elysia's official website](https://elysiajs.com/assets/elysia.svg). The generic SQL database icon is a local SVG.
