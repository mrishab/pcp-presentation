# PCP Presentation – Reveal.js

## Project Overview

This project presents the **Post Correspondence Problem (PCP)** and demonstrates its undecidability.

The presentation is built using **Reveal.js** and runs directly in the browser as a slide-based web application.

---

## Work Distribution

- **Nicole Zino**: Reveal.js Setup / Framework, Conclusion  
- [`public/index.html`](public/index.html), [`public/slides/conclusion.md`](public/slides/conclusion.md)

- **Shahbaaz Gill**: Intro + Background  
- [`public/slides/intro.md`](public/slides/intro.md)

- **Reet Singh**: PCP Explanation  
- [`public/slides/pcp.md`](public/slides/pcp.md)

- **Rishab Manocha**: Undecidability Proof  
- [`public/slides/proof.md`](public/slides/proof.md)

- **Tolu Adekore**: Example  
- [`public/slides/example.md`](public/slides/example.md)

---

## Plan of Work

- Set up Reveal.js presentation framework  
- Divide topics among team members  
- Research PCP and undecidability proof  
- Create slides for each section  
- Test and debug presentation  

---

## Project Structure

The project is organized as follows:

- `public/index.html` – Vite entry page that loads the bundled `src/app.js` module and points Reveal to the markdown slides.  
- `public/slides/` – slide content files consumed by the Markdown plugin (one section per file).  
- `src/app.js` – entry script that imports Reveal.js, its CSS/theme, and the Markdown/highlight/notes plugins before calling `Reveal.initialize`.  
- `node_modules/reveal.js/` – npm-provided runtime, themes, and plugin packages used by `src/app.js`.  
- `dist/` – generated Vite build output (ignored in version control).

---

## Tools

- HTML / CSS
- Reveal.js (via `node_modules/reveal.js`)
- Node / npm
- Vite (dev server + bundler)
- GitHub (version control)

## Environment Setup

- Node 20.19.0 is pinned in `.nvmrc`; if you use direnv/autoenv the supplied `.envrc` will call `nvm use` when you `cd` into the repo.  
- Run `nvm install` (only once per machine or when the version changes) before installing dependencies so you match the runtime expected by Reveal.js and Vite.

---

## Dependencies

This project relies on **Reveal.js** from npm for the core runtime, themes, and Markdown/highlight/notes plugins. Vite is configured as a dev dependency to bundle `src/app.js` plus its CSS imports, emit `dist/` as the production bundle, and copy the `public/slides/` markdown files into the output.  
Set the Node runtime with `nvm install`/`nvm use` before running `npm install` so the dependency tree is built against the pinned Node 20.19.0 runtime.

Source: <https://github.com/hakimel/reveal.js>

---

## How to Run

1. Clone the repository
2. Run `nvm install` (this also automatically switches to Node 20.19.0 via `.nvmrc` and the provided `.envrc`) and then `npm install`
3. Run `npm run dev` and open the address printed by Vite (typically `http://localhost:5173`) so the ES module entry at `public/index.html` can be loaded
4. Navigate the slides with the arrow keys
5. When you want to produce the distributable bundle, run `npm run build`; the generated files land in `dist/` and can be previewed with `npm run preview`

---

## Development Process

- Adopted the npm `reveal.js` package and relocated the entry HTML + slides under `public/` so Vite can treat them as its root assets
- Built `src/app.js` as the ES module entry point that imports Reveal.js, the theme CSS, and the Markdown/highlight/notes plugins before calling `Reveal.initialize`
- Added `vite.config.js` to root production output in `dist/`, copy `public/slides/`, and allow the dev server to read `src/`

---

## Notes

- Each team member edits only their assigned file in `public/slides/`
- `public/index.html` is the single entry page and `src/app.js` drives the Reveal setup; `dist/` is produced by Vite and should not be committed
- All slides are still loaded dynamically via `data-markdown` so the Markdown plugin can hydrate them at runtime

---

## Deployment

- GitHub Actions workflow `.github/workflows/deploy.yml` builds the Vite bundle and publishes `dist/` to GitHub Pages on pushes to `main` and manual dispatches.
- The workflow sets up Node 20, runs `npm install` → `npm run build`, uploads `dist/` via `actions/upload-pages-artifact@v3`, and finally deploys with `actions/deploy-pages@v4`.
- Keep your local Node version synced with `.nvmrc` so your manual builds match the CI environment.
-

---

## References

- Sipser, *Introduction to the Theory of Computation*, 3rd Edition  
- <https://revealjs.com/installation/>  

### Additional Tools

- ChatGPT (used for debugging Reveal.js setup and structuring the project)
