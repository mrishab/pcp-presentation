<div class="slide-author" data-name="Nicole Zino"></div>

# Wrapping Up

---

<div class="slide-author" data-name="Nicole Zino"></div>

## Here's what we went through

- **Decidability** — what it even means for a problem to be solvable by an algorithm
- **PCP** — a deceptively simple puzzle about matching strings
- **The undecidability proof** — showing PCP is as hard as A<sub>TM</sub> via reduction
- **A worked example** — trying it out on real domino sets, seeing both sides

---

<div class="slide-author" data-name="Nicole Zino"></div>

## The reduction chain one more time

<div class="reduction-chain large">
  <span class="chain-node">A<sub>TM</sub></span>
  <span class="chain-arrow">&le;<sub>m</sub></span>
  <span class="chain-node">MPCP</span>
  <span class="chain-arrow">&le;<sub>m</sub></span>
  <span class="chain-node">PCP</span>
</div>

If PCP had a decider, we could use it to decide A<sub>TM</sub> — which we know is impossible.

So PCP can't have a decider either.

---

<div class="slide-author" data-name="Nicole Zino"></div>

## The wild part

<div class="highlight-box">
  PCP looks nothing like a Turing Machine — yet it can encode one.
</div>

That's what makes it such a useful example. It shows undecidability shows up in problems that have nothing to do with machines or computation on the surface.

---

<div class="slide-author" data-name="Nicole Zino"></div>

## This stuff actually comes up in the real world

- **Bug detection** — you can't write a tool that catches every possible bug automatically
- **Compilers** — some code analyses are provably impossible to get right in every case
- **AI & verification** — there are questions about program behavior that no system can always answer

Knowing where the hard limits are saves you from chasing solutions that don't exist.

---

<div class="slide-author" data-name="Nicole Zino"></div>

## The big takeaway

<div class="theorem-box">
  Some problems just don't have general solutions — and PCP is a perfect example.
  It's simple enough to explain to anyone, but hard enough that no algorithm can solve it.
</div>

---

## Reflection

- **What worked well:**
  - Clear division of topics between team members  
  - Visual approach (domino examples) helped simplify complex ideas  

- **What could be improved:**
  - Earlier coordination on slide structure  
  - More time for final polish and consistency  

- **Overall:**
  - Strong collaboration and deeper understanding of undecidability concepts

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
