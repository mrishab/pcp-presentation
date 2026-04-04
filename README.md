# PCP Presentation

Reveal.js presentation for COMP382 on the Post Correspondence Problem.

[View Live Site](https://mrishab.github.io/COMP382-Assignment3/)

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

## Plan of Work

- Set up Reveal.js presentation framework  
- Divide topics among team members  
- Research PCP and undecidability proof  
- Create slides for each section  
- Test and debug presentation  

## Notes

- Each team member edits only their assigned file in `public/slides/`
- `public/index.html` is the single entry page and `src/app.js` drives the Reveal setup; `dist/` is produced by Vite and should not be committed
- All slides are still loaded dynamically via `data-markdown` so the Markdown plugin can hydrate them at runtime

## Structure

- `public/index.html` is the app entry.
- `src/app.js` initializes Reveal.js and imports the theme/plugins.
- `public/slides/` contains the Markdown slides.
- `dist/` is the generated build output.

## Setup

This project uses Node `20.19.0` from `.nvmrc`.

```bash
nvm install
npm install
```

If you use `direnv`, `.envrc` will run `nvm use` automatically.

## Development

```bash
npm run dev
```

Open the local Vite URL, usually `http://localhost:5173/`.

## Build

```bash
npm run build
```

This outputs the site to `dist/` with:

- `dist/index.html`
- `dist/assets/`
- `dist/slides/`

## Deploy

GitHub Pages is deployed by `.github/workflows/deploy.yml`.

- Push to `main`, or run the workflow manually.
- The workflow runs `npm ci`, builds the site, and publishes `dist/`.

## References

- <https://revealjs.com/installation/>
- <https://github.com/hakimel/reveal.js>

## Individual Contributions (Detailed)

### Shahbaaz Gill – Intro + Background

**Responsibilities:**
- Introduced the concept of undecidability
- Provided intuitive explanation of the domino-style (PCP) problem
- Explained why the topic matters in computer science
- Created supporting documentation and presentation notes

**Files contributed:**
- public/slides/intro.md
- presentation/intro.md
- presentation/slide_content.md
- logs/shahbaaz_log.md

## Nicole's Development Process when first creating this repo before Rishab added more stuff:

During development, several issues were encountered and resolved:

- Plugin loading errors due to incorrect file paths (404 errors)  
- Markdown slides not rendering due to missing or misconfigured plugins  
- Module-related issues when using `.mjs` files  
- Resolved by switching to browser-compatible `.js` plugin files  
- Tested presentation locally using a Python HTTP server  

These steps ensured the final presentation runs correctly.
