<div class="slide-author" data-name="Nicole Zino"></div>

# Wrapping Up

---

<div class="slide-author" data-name="Nicole Zino"></div>

## Key Takeaway

PCP looks like a string puzzle, but it can encode arbitrary computation.

<div class="reduction-chain large">
  <span class="chain-node">A<sub>TM</sub></span>
  <span class="chain-arrow">&le;<sub>m</sub></span>
  <span class="chain-node">MPCP</span>
  <span class="chain-arrow">&le;<sub>m</sub></span>
  <span class="chain-node">PCP</span>
</div>

If PCP had a decider, we could use it to decide A<sub>TM</sub>, which we know is impossible.

So PCP can't have a decider either.

---

<div class="slide-author" data-name="Nicole Zino"></div>

## Why This Matters

<div class="highlight-box">
  PCP looks nothing like a Turing Machine. Yet it can encode one.
</div>

That's why undecidability shows up in problems that don't look like "computation" on the surface.

---

<div class="slide-author" data-name="Nicole Zino"></div>

## Real-World Implications

- **Bug detection**: you can't write a tool that catches every possible bug automatically
- **Compilers**: some code analyses are provably impossible to get right in every case
- **AI & verification**: there are questions about program behavior that no system can always answer

Knowing where the hard limits are saves you from chasing solutions that don't exist.

---

<div class="slide-author" data-name="Nicole Zino"></div>

## One Sentence

<div class="theorem-box">
  Some problems just don't have general solutions. PCP is a perfect example.
  It's simple enough to explain to anyone, but hard enough that no algorithm can solve it.
</div>

---

## Reflection

- **What worked well:**
  - Clear division of topics helped us explain the proof step by step  
  - Visual domino examples made PCP easier to understand  

- **What could be improved:**
  - We should have reduced repetition and slide count earlier  
  - More time for final review would have improved consistency and flow  

- **Overall:**
  - This project gave us a stronger understanding of undecidability and PCP.

<div class="slide-author" data-name="Nicole Zino"></div>

---

# Questions?

---

## References

- Sipser, M. *Introduction to the Theory of Computation*, 3rd ed., Chapter 5.2
- Post, E. "A variant of a recursively unsolvable problem" (1946)
- Hopcroft, Motwani, Ullman. *Introduction to Automata Theory, Languages, and Computation*
- Reveal.js — https://revealjs.com  
- AI assistance (ChatGPT) used for structuring and refining explanations
