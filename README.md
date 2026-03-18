# PCP Presentation – Reveal.js

## Project Overview

This project presents the **Post Correspondence Problem (PCP)** and demonstrates its undecidability.

The presentation is built using **Reveal.js** and runs directly in the browser as a slide-based web application.

---

## Work Distribution

- **Nicole Zino**: Reveal.js Setup / Framework, Conclusion  
  [`index.html`](index.html), [`slides/conclusion.md`](slides/conclusion.md)

- **Shahbaaz Gill**: Intro + Background  
  [`slides/intro.md`](slides/intro.md)

- **Reet Singh**: PCP Explanation  
  [`slides/pcp.md`](slides/pcp.md)

- **Rishab Manocha**: Undecidability Proof  
  [`slides/proof.md`](slides/proof.md)

- **Tolu Adekore**: Example  
  [`slides/example.md`](slides/example.md)

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

- `index.html` – main presentation file  
- `slides/` – slide content (one file per section)  
- `dist/` – Reveal.js core files  
- `plugin/` – Reveal.js plugins  

---

## Tools

- HTML / CSS  
- Reveal.js  
- GitHub (version control)

---

## Dependencies

This project uses **Reveal.js** as the presentation framework.

Source: https://github.com/hakimel/reveal.js

---

## How to Run

1. Clone the repository  
2. Open `index.html` in a browser or via GitHub Pages  
3. Use arrow keys to navigate slides  

---

## Development Process

During development, several issues were encountered and resolved:

- Plugin loading errors due to incorrect file paths (404 errors)  
- Markdown slides not rendering due to missing or misconfigured plugins  
- Module-related issues when using `.mjs` files  
- Resolved by switching to browser-compatible `.js` plugin files  
- Tested presentation locally using a Python HTTP server  

These steps ensured the final presentation runs correctly.

---

## Notes

- Each team member edits only their assigned file in the `slides/` folder  
- Do not modify `dist/` or `plugin/` folders  
- All slides are loaded dynamically into `index.html`  

---

## References

- Sipser, *Introduction to the Theory of Computation*, 3rd Edition  
- https://revealjs.com/installation/  

### Additional Tools

- ChatGPT (used for debugging Reveal.js setup and structuring the project)