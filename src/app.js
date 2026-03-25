import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import Reveal from 'reveal.js/dist/reveal.esm.js';
import RevealMarkdown from 'reveal.js/dist/plugin/markdown/markdown.mjs';
import RevealHighlight from 'reveal.js/dist/plugin/highlight/highlight.mjs';
import RevealNotes from 'reveal.js/dist/plugin/notes/notes.mjs';

Reveal.initialize({
  hash: true,
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
});
