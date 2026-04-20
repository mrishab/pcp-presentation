<div class="slide-author" data-name="Nicole Zino"></div>

# Proving PCP is Undecidable

---

<div class="slide-author" data-name="Nicole Zino"></div>

<!-- .slide: class="goal-strategy" -->

<div class="theorem-box">
<strong>Theorem 5.15:</strong> PCP is undecidable.
</div>

## 1. Strategy

We reduce from the (known) undecidable language:

<div class="definition-box">
A<sub>TM</sub> = { ⟨M, w⟩ | M is a TM that accepts w }
</div>

<div class="reduction-chain">
  <span class="chain-node">A<sub>TM</sub></span>
  <span class="chain-arrow">&le;<sub>m</sub></span>
  <span class="chain-node">MPCP</span>
  <span class="chain-arrow">&le;<sub>m</sub></span>
  <span class="chain-node">PCP</span>
</div>

---

<div class="slide-author" data-name="Nicole Zino"></div>

## 1.1 The Halting Problem

**Input:** ⟨M, w⟩ where M is a Turing Machine (program) and w is an input

**Question:** does M ever halt (end) on w?

<div class="highlight-box">
No Turing Machine can decide halting correctly for all ⟨M, w⟩.
</div>

---

<div class="slide-author" data-name="Nicole Zino"></div>

## 1.2 Connection to Our Reduction

We reduce from A<sub>TM</sub> because it is undecidable (it is at least as hard as halting).

<div class="highlight-box">
PCP match exists &hArr; the TM has an accepting computation history on w.
</div>

---

<div class="slide-author" data-name="Nicole Zino"></div>

## 2. Define MPCP

<div class="definition-box">
MPCP = { ⟨P⟩ | P is a PCP instance with a match that starts with the first domino }
</div>

- Forces the simulation to start at the initial configuration
- Assumptions: M never moves left off tape; if w = &epsilon; use ␣
- Match starts with first domino

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## 3. Reduce A<sub>TM</sub> to MPCP

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## 3.1 Construction

Given TM M = (Q, &Sigma;, &Gamma;, &delta;, q<sub>0</sub>, q<sub>acc</sub>, q<sub>rej</sub>) and input w:

Construct MPCP instance P&prime; such that:

<div class="highlight-box">
P&prime; has a match &hArr; M accepts w
</div>

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## 3.2 Key Idea

A match in P&prime; encodes an **accepting computation history** of M on w

Each domino simulates a single computation step of M

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## 3.3 Configurations

A configuration represents the TM state at one moment:

<div class="config-box">
&#35; q<sub>0</sub>w<sub>1</sub>w<sub>2</sub>&hellip;w<sub>n</sub> &#35;
</div>

- Marks configuration boundaries
- State symbol appears left of the head position

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## 3.4 Initial Domino

<div class="domino-box large">
  <div class="domino-top">#</div>
  <div class="domino-bottom"># q<sub>0</sub>w<sub>1</sub>w<sub>2</sub>&hellip;w<sub>n</sub> #</div>
</div>

This **must** be the first domino in any match (MPCP requirement)

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## 3.5 Why This Starts the Simulation

<div class="match-visual">
  <div class="match-row">
    <span class="match-label">Top:</span>
    <span class="match-content">#</span>
  </div>
  <div class="match-row">
    <span class="match-label">Bottom:</span>
    <span class="match-content"># q<sub>0</sub>w<sub>1</sub>w<sub>2</sub>&hellip;w<sub>n</sub> #</span>
  </div>
</div>

Bottom is "ahead" &mdash; top must catch up by simulating M

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## 3.6 Right Moves

For every a, b &isin; &Gamma; and q, r &isin; Q where q &ne; q<sub>rej</sub>:

If &delta;(q, a) = (r, b, R), add:

<div class="domino-box large">
  <div class="domino-top">qa</div>
  <div class="domino-bottom">br</div>
</div>

<p><strong>Intuition:</strong> Head moves right, state changes q &rarr; r, cell changes a &rarr; b</p>

<div class="transition-visual horizontal">
  <div class="before">
    Before: &hellip; <span class="state">q</span><span class="tape-cell highlight">a</span> &hellip;
  </div>
  <div class="arrow">&rarr;</div>
  <div class="after">
    After: &hellip; <span class="tape-cell">b</span><span class="state">r</span> &hellip;
  </div>
</div>

 

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## 3.7 Left Moves

For every a, b, c &isin; &Gamma; and q, r &isin; Q where q &ne; q<sub>rej</sub>:

If &delta;(q, a) = (r, b, L), add:

<div class="domino-box large">
  <div class="domino-top">cqa</div>
  <div class="domino-bottom">rcb</div>
</div>

<p><strong>Intuition:</strong> Need c (left symbol) for context &mdash; head moves left</p>

<div class="transition-visual horizontal">
  <div class="before">
    Before: &hellip; <span class="tape-cell">c</span><span class="state">q</span><span class="tape-cell highlight">a</span> &hellip;
  </div>
  <div class="arrow">&rarr;</div>
  <div class="after">
    After: &hellip; <span class="state">r</span><span class="tape-cell">c</span><span class="tape-cell">b</span> &hellip;
  </div>
</div>

 

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## 3.8 Copy Symbols

For every a &isin; &Gamma;, add:

<div class="domino-box large">
  <div class="domino-top">a</div>
  <div class="domino-bottom">a</div>
</div>

<p><strong>Why copy?</strong> Only the head position changes each step; the rest of the tape stays the same.</p>

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## 3.9 Configuration Separators

<div class="domino-row">
  <div class="domino-box">
    <div class="domino-top">#</div>
    <div class="domino-bottom">#</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">#</div>
    <div class="domino-bottom">␣#</div>
  </div>
</div>

- First domino copies the separator #
- Second domino adds blank ␣ for tape expansion (simulates infinite blank tape to the right)

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## 3.10 Accepting State Cleanup

For every a &isin; &Gamma;, add:

<div class="domino-row">
  <div class="domino-box">
    <div class="domino-top">a q<sub>acc</sub></div>
    <div class="domino-bottom">q<sub>acc</sub></div>
  </div>
  <div class="domino-box">
    <div class="domino-top">q<sub>acc</sub> a</div>
    <div class="domino-bottom">q<sub>acc</sub></div>
  </div>
</div>

After M reaches the accepting state, special dominos remove surrounding symbols so the top string can catch up.

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## 3.11 Final Domino

<div class="domino-box large">
  <div class="domino-top">q<sub>acc</sub> # #</div>
  <div class="domino-bottom">#</div>
</div>

<div class="highlight-box">
Match complete &hArr; M accepted w
</div>

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## 3.12 Why Not Use P&prime; as PCP?

<div class="warning-box">
If we view P&prime; as a PCP instance (not MPCP), it <strong>always</strong> has a trivial match, regardless of whether M accepts w!
</div>

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## 3.13 Tile Summary (P&prime;)

All *Types* of dominos we added

<div class="domino-row small">
  <div class="domino-box">
    <div class="domino-top">#</div>
    <div class="domino-bottom"># q<sub>0</sub>w&hellip; #</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">qa</div>
    <div class="domino-bottom">br</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">cqa</div>
    <div class="domino-bottom">rcb</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">a</div>
    <div class="domino-bottom">a</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">#</div>
    <div class="domino-bottom">#</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">#</div>
    <div class="domino-bottom">␣#</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">a q<sub>acc</sub></div>
    <div class="domino-bottom">q<sub>acc</sub></div>
  </div>
  <div class="domino-box">
    <div class="domino-top">q<sub>acc</sub> a</div>
    <div class="domino-bottom">q<sub>acc</sub></div>
  </div>
  <div class="domino-box">
    <div class="domino-top">q<sub>acc</sub> # #</div>
    <div class="domino-bottom">#</div>
  </div>
</div>

---

<div class="slide-author" data-name="Tolu Adekore"></div>

Where is a **trivial match** hiding if we allow a PCP match to start anywhere?

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## 3.14 The Trivial Match

<div class="domino-box large">
  <div class="domino-top">#</div>
  <div class="domino-bottom">#</div>
</div>

<p>Just use the separator domino from Part 5 alone!</p>

<p> Top = "#" = Bottom &rarr; Match!</p>

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## 3.15 Why This Is a Problem

This trivial match exists whether or not M accepts w

We need to **force** the match to start with the first domino

That's why we must convert MPCP to PCP properly

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## 4. Reduce MPCP to PCP

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## 4.1 The Problem

MPCP: match **must** start with first domino

PCP: match can start with **any** domino

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## 4.2 Solution: Force the Start

Modify dominos so only the first one **can** start a match

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## 4.3 The ◇ Transformation

For any string u = u<sub>1</sub>u<sub>2</sub>&hellip;u<sub>n</sub>, define:

<div class="transform-box">
  <div class="transform-row">
    <span class="transform-name">◇u</span>
    <span class="transform-def">= ◇u<sub>1</sub>◇u<sub>2</sub>◇&hellip;◇u<sub>n</sub></span>
  </div>
  <div class="transform-row">
    <span class="transform-name">u◇</span>
    <span class="transform-def">= u<sub>1</sub>◇u<sub>2</sub>◇&hellip;◇u<sub>n</sub>◇</span>
  </div>
  <div class="transform-row">
    <span class="transform-name">◇u◇</span>
    <span class="transform-def"> = ◇u<sub>1</sub>◇u<sub>2</sub>◇&hellip;◇u<sub>n</sub>◇</span>
  </div>
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## 4.4 Example

Let u = abc

<div class="example-box">
  <div>◇u = ◇a◇b◇c</div>
  <div>u◇ = a◇b◇c◇</div>
  <div>◇u◇ = ◇a◇b◇c◇</div>
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## 4.5 New Domino Set

Given P&prime; = { [t<sub>1</sub>/b<sub>1</sub>], [t<sub>2</sub>/b<sub>2</sub>], &hellip;, [t<sub>k</sub>/b<sub>k</sub>] }, construct P by:

- Adding [◇t<sub>1</sub>/◇b<sub>1</sub>◇] (forced start)
- For each i = 1..k, adding [◇t<sub>i</sub>/b<sub>i</sub>◇]
- Adding [◇/&epsilon;]

<div class="domino-row small">
  <div class="domino-box">
    <div class="domino-top">◇t<sub>1</sub></div>
    <div class="domino-bottom">◇b<sub>1</sub>◇</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">◇t<sub>1</sub></div>
    <div class="domino-bottom">b<sub>1</sub>◇</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">◇t<sub>2</sub></div>
    <div class="domino-bottom">b<sub>2</sub>◇</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">&hellip;</div>
    <div class="domino-bottom">&hellip;</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">◇t<sub>k</sub></div>
    <div class="domino-bottom">b<sub>k</sub>◇</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">◇</div>
    <div class="domino-bottom">&epsilon;</div>
  </div>
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## 4.6 Why This Works

<div class="domino-box highlight">
  <div class="domino-top">◇t<sub>1</sub></div>
  <div class="domino-bottom">◇b<sub>1</sub>◇</div>
</div>

**Only** this domino has ◇ at the start of **both** top and bottom

Any match **must** begin here!

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## 4.7 The Final Domino

<div class="domino-box">
  <div class="domino-top">◇</div>
  <div class="domino-bottom">&epsilon;</div>
</div>

Allows top to add the trailing ◇ to complete the match

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## 4.8 Correctness

- Original symbols appear at even positions
- ◇ symbols interleave but don't affect matching
- First domino is forced &rarr; MPCP constraint satisfied

---

<div class="slide-author" data-name="Nicole Zino"></div>

## 5. Putting It All Together

---

<div class="slide-author" data-name="Nicole Zino"></div>

## 5.1 The Reduction Chain

<div class="reduction-chain large">
  <span class="chain-node">A<sub>TM</sub></span>
  <span class="chain-arrow">&le;<sub>m</sub></span>
  <span class="chain-node">MPCP</span>
  <span class="chain-arrow">&le;<sub>m</sub></span>
  <span class="chain-node">PCP</span>
</div>

---

<div class="slide-author" data-name="Nicole Zino"></div>

## 5.2 The Logic

1. A<sub>TM</sub> is undecidable (proven earlier)
2. If MPCP were decidable &rarr; A<sub>TM</sub> decidable
3. Therefore MPCP is undecidable
4. If PCP were decidable &rarr; MPCP decidable
5. Therefore PCP is undecidable

---

<div class="slide-author" data-name="Nicole Zino"></div>

## 5.3 Therefore

<div class="theorem-box">
<strong>Theorem 5.15:</strong> PCP is undecidable.
</div>

No algorithm can decide whether an arbitrary PCP instance has a match.
