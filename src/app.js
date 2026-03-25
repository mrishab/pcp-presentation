import 'reveal.js/reset.css';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown';
import RevealHighlight from 'reveal.js/plugin/highlight';
import RevealNotes from 'reveal.js/plugin/notes';

Reveal.initialize({
  hash: true,
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
});
