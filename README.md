# GitHub Highlights ✅

**GitHub Highlights** is a small Angular (v21) application that displays quick insights about GitHub users and their repositories — stars, languages, forks, and repo counts. The app supports Server-Side Rendering (SSR) via `@angular/ssr` and can be run in development mode with the Angular CLI or served in production as an Express server.

## 🔍 Features

- Search GitHub users by username
- Dashboard with user info and top repositories
- Language color highlights (based on `src/app/constants.ts`)
- Reusable components: Star Count, Fork Count, Repo Count, Language Highlights
- SSR-ready (see `src/main.server.ts` and `src/server.ts`)

## 🛠️ Requirements

- Node.js (recommended: **Node 20 LTS** or newer)
- npm (project recorded `packageManager: "npm@11.6.2"`)
- A GitHub API-accessible network (the app calls `https://api.github.com` directly)

If you have a recommended Node/npm version, tell me and I will add it to the README.

## 📦 Installation

```bash
git clone <repo-url>
cd github-highlights
# Install dependencies using your package manager (e.g., pnpm or yarn)
pnpm install
```

## 🧑‍💻 Development

Start the local development server (hot-reload):

```bash
ng serve
```

Open http://localhost:4200 in your browser. The root page is a search box where you can enter a GitHub username and navigate to `/dashboard/:username`.

To run a file watcher for development builds:

```bash
ng build --watch --configuration development
```


## ⚙️ Build & Production (SSR)

This project is configured for SSR. Build the production artifacts (browser + server) with the Angular CLI:

```bash
ng build --configuration production
```

After a production build, run the server bundle directly (uses `dist/github-highlights/server/server.mjs`):

```bash
node dist/github-highlights/server/server.mjs
# or with a custom port
PORT=8080 node dist/github-highlights/server/server.mjs
```

The Express server defaults to port `4000` if `PORT` is not set (see `src/server.ts`).

> Note: `ng serve` runs the app in development mode (no SSR). After building for production with `ng build --configuration production`, run the server bundle (`node dist/github-highlights/server/server.mjs`) to serve SSR.

---

## ✅ Testing

Unit tests run via Vitest through the Angular test builder:

```bash
ng test
```

There are also component spec files under `src/app/**/*.spec.ts`.

---

## 🧭 Project Structure (high level)

- `src/` — application source
  - `main.ts` — client bootstrap
  - `main.server.ts` — server bootstrap
  - `server.ts` — Express server for SSR
  - `app/` — components and routes (Search, Dashboard, StarCount, ForkCount, RepoCount, LanguageHighlights)
- `public/` — static assets
- `angular.json`, `package.json` — build and scripts

---

## ✅ Contributing

Contributions are welcome — open an issue or submit a pull request. Please follow the existing project style (Prettier configuration is included in `package.json`). If you want, I can add a CONTRIBUTING.md and setup a simple PR template.

