<div class="slide-author" data-name="Rishab Manocha"></div>

# Proving PCP is Undecidable

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Theorem 5.15

<div class="theorem-box">
<strong>Theorem:</strong> PCP is undecidable.
</div>

<div class="fragment">
There is no algorithm that can determine whether an arbitrary PCP instance has a match.
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## The Halting Problem

**Input:** A Turing Machine M and input w

**Question:** Does M halt on w?

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Halting Problem is Undecidable

**Theorem:** There is no algorithm that can decide whether an arbitrary Turing Machine halts on a given input.

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Proof by Contradiction

Assume a decider H exists:

<div class="math-block">
H(&langle;M, w&rangle;) =
<span class="cases">
  accept &nbsp; if M halts on w<br>
  reject &nbsp; if M loops on w
</span>
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Constructing the Contradiction

Define a new TM D that uses H as a subroutine:

<div class="code-block">
D(&langle;M&rangle;):<br>
&nbsp;&nbsp;1. Run H(&langle;M, &langle;M&rangle;&rangle;)<br>
&nbsp;&nbsp;2. If H accepts: loop forever<br>
&nbsp;&nbsp;3. If H rejects: accept
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## The Paradox

What happens when we run D(&langle;D&rangle;)?

- If D halts on &langle;D&rangle; &rarr; H accepts &rarr; D loops <!-- .element: class="fragment" -->
- If D loops on &langle;D&rangle; &rarr; H rejects &rarr; D halts <!-- .element: class="fragment" -->

**Contradiction!** <!-- .element: class="fragment highlight-red" -->

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Therefore...

The Halting Problem is **undecidable**

No algorithm can solve it for all inputs

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## A<sub>TM</sub> is Undecidable

Define the acceptance problem:

<div class="definition-box">
A<sub>TM</sub> = { &langle;M, w&rangle; | M is a TM that accepts w }
</div>

A<sub>TM</sub> is also undecidable (by similar argument)

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Why Does This Matter?

- Fundamental limits of computation <!-- .element: class="fragment" -->
- Cannot write a "universal debugger" <!-- .element: class="fragment" -->
- Many practical problems reduce to the halting problem <!-- .element: class="fragment" -->

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Reductions

To prove a new problem B is undecidable:

1. Assume B is decidable <!-- .element: class="fragment" -->
2. Show how to use B to decide A<sub>TM</sub> <!-- .element: class="fragment" -->
3. Contradiction! <!-- .element: class="fragment" -->

This is called a **reduction** from A<sub>TM</sub> to B

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Our Goal

Prove the **Post Correspondence Problem (PCP)** is undecidable

by reducing A<sub>TM</sub> to PCP

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Proof Strategy

We will show:

<div class="reduction-chain">
  <span class="chain-node">A<sub>TM</sub></span>
  <span class="chain-arrow">&le;<sub>m</sub></span>
  <span class="chain-node">MPCP</span>
  <span class="chain-arrow">&le;<sub>m</sub></span>
  <span class="chain-node">PCP</span>
</div>

<div class="fragment">
If PCP were decidable, then A<sub>TM</sub> would be decidable.
</div>

<div class="fragment highlight-red">
Contradiction!
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Proof Overview

1. Define MPCP (Modified PCP) <!-- .element: class="fragment" -->
2. Reduce A<sub>TM</sub> to MPCP <!-- .element: class="fragment" -->
3. Reduce MPCP to PCP <!-- .element: class="fragment" -->

---

<div class="slide-author" data-name="Rishab Manocha"></div>

# Step 1: Modified PCP (MPCP)

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## MPCP Definition

<div class="definition-box">
MPCP = { &langle;P&rangle; | P is a PCP instance with a match<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>that starts with the first domino</strong> }
</div>

The only difference: match **must** begin with [t<sub>1</sub>/b<sub>1</sub>]

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Why MPCP?

Forces the simulation to start correctly

We control how the computation begins <!-- .element: class="fragment" -->

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Technical Assumptions

Before constructing P&prime;:

1. M never moves head left off the tape <!-- .element: class="fragment" -->
2. If w = &epsilon;, use blank symbol ␣ instead <!-- .element: class="fragment" -->
3. Match must start with first domino <!-- .element: class="fragment" -->

---

<div class="slide-author" data-name="Rishab Manocha"></div>

# Step 2: A<sub>TM</sub> &le;<sub>m</sub> MPCP

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## The Construction

Given TM M = (Q, &Sigma;, &Gamma;, &delta;, q<sub>0</sub>, q<sub>accept</sub>, q<sub>reject</sub>) and input w:

Construct MPCP instance P&prime; such that:

<div class="highlight-box fragment">
P&prime; has a match &hArr; M accepts w
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Key Idea

A match in P&prime; encodes an **accepting computation history** of M on w

Each domino simulates one step of M <!-- .element: class="fragment" -->

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Configurations

A configuration represents the TM state at one moment:

<div class="config-box">
# q<sub>0</sub>w<sub>1</sub>w<sub>2</sub>&hellip;w<sub>n</sub> #
</div>

- # marks configuration boundaries <!-- .element: class="fragment" -->

- State symbol appears left of the head position <!-- .element: class="fragment" -->

---

<div class="slide-author" data-name="Rishab Manocha"></div>

# Part 1: Initial Domino

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## First Domino

<div class="domino-box large">
  <div class="domino-top">#</div>
  <div class="domino-bottom"># q<sub>0</sub>w<sub>1</sub>w<sub>2</sub>&hellip;w<sub>n</sub> #</div>
</div>

This **must** be the first domino in any match (MPCP requirement)

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## What This Achieves

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

Bottom is "ahead" &mdash; top must catch up by simulating M <!-- .element: class="fragment" -->

---

<div class="slide-author" data-name="Rishab Manocha"></div>

# Part 2: Right Moves

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Right Move Dominos

For every a, b &isin; &Gamma; and q, r &isin; Q where q &ne; q<sub>reject</sub>:

If &delta;(q, a) = (r, b, R), add:

<div class="domino-box large">
  <div class="domino-top">qa</div>
  <div class="domino-bottom">br</div>
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Intuition: Right Move

<div class="transition-visual">
  <div class="before">
    Before: &hellip; <span class="state">q</span><span class="tape-cell highlight">a</span> &hellip;
  </div>
  <div class="arrow">&darr;</div>
  <div class="after">
    After: &hellip; <span class="tape-cell">b</span><span class="state">r</span> &hellip;
  </div>
</div>

Head moves right, state changes q &rarr; r, cell changes a &rarr; b

---

<div class="slide-author" data-name="Rishab Manocha"></div>

# Part 3: Left Moves

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Left Move Dominos

For every a, b, c &isin; &Gamma; and q, r &isin; Q where q &ne; q<sub>reject</sub>:

If &delta;(q, a) = (r, b, L), add:

<div class="domino-box large">
  <div class="domino-top">cqa</div>
  <div class="domino-bottom">rcb</div>
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Intuition: Left Move

<div class="transition-visual">
  <div class="before">
    Before: &hellip; <span class="tape-cell">c</span><span class="state">q</span><span class="tape-cell highlight">a</span> &hellip;
  </div>
  <div class="arrow">&darr;</div>
  <div class="after">
    After: &hellip; <span class="state">r</span><span class="tape-cell">c</span><span class="tape-cell">b</span> &hellip;
  </div>
</div>

Need c (left symbol) for context &mdash; head moves left

---

<div class="slide-author" data-name="Rishab Manocha"></div>

# Part 4: Copy Symbols

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Copy Dominos

For every a &isin; &Gamma;, add:

<div class="domino-box large">
  <div class="domino-top">a</div>
  <div class="domino-bottom">a</div>
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Why Copy?

Only the head position changes each step

All other tape cells remain the same <!-- .element: class="fragment" -->

These dominos copy unchanged symbols <!-- .element: class="fragment" -->

---

<div class="slide-author" data-name="Rishab Manocha"></div>

# Part 5: Configuration Separators

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Separator Dominos

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

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Purpose

- First domino: copies the separator # <!-- .element: class="fragment" -->
- Second domino: adds blank ␣ for tape expansion <!-- .element: class="fragment" -->

(Simulates infinite blank tape to the right) <!-- .element: class="fragment" -->

---

<div class="slide-author" data-name="Rishab Manocha"></div>

# Part 6: Accepting State

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Cleanup Dominos

For every a &isin; &Gamma;, add:

<div class="domino-row">
  <div class="domino-box">
    <div class="domino-top">a q<sub>accept</sub></div>
    <div class="domino-bottom">q<sub>accept</sub></div>
  </div>
  <div class="domino-box">
    <div class="domino-top">q<sub>accept</sub> a</div>
    <div class="domino-bottom">q<sub>accept</sub></div>
  </div>
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## What This Does

After M accepts, the head "eats" adjacent symbols

<div class="fragment">
Allows top string to catch up with bottom string
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Visualization

<div class="cleanup-visual">
  <div>&hellip; a b q<sub>accept</sub> c d &hellip;</div>
  <div class="arrow">&darr;</div>
  <div>&hellip; a q<sub>accept</sub> d &hellip;</div>
  <div class="arrow">&darr;</div>
  <div>&hellip; q<sub>accept</sub> d &hellip;</div>
  <div class="arrow">&darr;</div>
  <div>&hellip; q<sub>accept</sub> &hellip;</div>
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

# Part 7: Final Domino

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Completing the Match

<div class="domino-box large">
  <div class="domino-top">q<sub>accept</sub> # #</div>
  <div class="domino-bottom">#</div>
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Result

This domino lets the top finally equal the bottom

<div class="highlight-box fragment">
Match complete &hArr; M accepted w
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

# Step 3: MPCP &le;<sub>m</sub> PCP

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## The Problem

MPCP: match **must** start with first domino

PCP: match can start with **any** domino

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Solution: Force the Start

Modify dominos so only the first one **can** start a match

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## The &ast; Transformation

For any string u = u<sub>1</sub>u<sub>2</sub>&hellip;u<sub>n</sub>, define:

<div class="transform-box">
  <div class="transform-row">
    <span class="transform-name">&ast;u</span>
    <span class="transform-def">= &ast;u<sub>1</sub>&ast;u<sub>2</sub>&ast;&hellip;&ast;u<sub>n</sub></span>
  </div>
  <div class="transform-row">
    <span class="transform-name">u&ast;</span>
    <span class="transform-def">= u<sub>1</sub>&ast;u<sub>2</sub>&ast;&hellip;&ast;u<sub>n</sub>&ast;</span>
  </div>
  <div class="transform-row">
    <span class="transform-name">&ast;u&ast;</span>
    <span class="transform-def">= &ast;u<sub>1</sub>&ast;u<sub>2</sub>&ast;&hellip;&ast;u<sub>n</sub>&ast;</span>
  </div>
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Example

Let u = abc

<div class="example-box">
  <div>&ast;u = &ast;a&ast;b&ast;c</div>
  <div>u&ast; = a&ast;b&ast;c&ast;</div>
  <div>&ast;u&ast; = &ast;a&ast;b&ast;c&ast;</div>
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Converting P&prime; to P

If P&prime; = { [t<sub>1</sub>/b<sub>1</sub>], [t<sub>2</sub>/b<sub>2</sub>], &hellip;, [t<sub>k</sub>/b<sub>k</sub>] }

Then P = :

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## New Domino Set

<div class="domino-row small">
  <div class="domino-box">
    <div class="domino-top">&ast;t<sub>1</sub></div>
    <div class="domino-bottom">&ast;b<sub>1</sub>&ast;</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">&ast;t<sub>2</sub></div>
    <div class="domino-bottom">b<sub>2</sub>&ast;</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">&hellip;</div>
    <div class="domino-bottom">&hellip;</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">&ast;t<sub>k</sub></div>
    <div class="domino-bottom">b<sub>k</sub>&ast;</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">&ast;</div>
    <div class="domino-bottom">&empty;</div>
  </div>
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Why This Works

<div class="domino-box highlight">
  <div class="domino-top">&ast;t<sub>1</sub></div>
  <div class="domino-bottom">&ast;b<sub>1</sub>&ast;</div>
</div>

**Only** this domino has &ast; at the start of **both** top and bottom

Any match **must** begin here! <!-- .element: class="fragment" -->

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## The Final Domino

<div class="domino-box">
  <div class="domino-top">&ast;</div>
  <div class="domino-bottom">(empty)</div>
</div>

Allows top to add the trailing &ast; to complete the match

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Correctness

- Original symbols appear at even positions <!-- .element: class="fragment" -->
- &ast; symbols interleave but don't affect matching <!-- .element: class="fragment" -->
- First domino is forced &rarr; MPCP constraint satisfied <!-- .element: class="fragment" -->

---

<div class="slide-author" data-name="Rishab Manocha"></div>

# Putting It All Together

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## The Reduction Chain

<div class="reduction-chain large">
  <span class="chain-node">A<sub>TM</sub></span>
  <span class="chain-arrow">&le;<sub>m</sub></span>
  <span class="chain-node">MPCP</span>
  <span class="chain-arrow">&le;<sub>m</sub></span>
  <span class="chain-node">PCP</span>
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## The Logic

1. A<sub>TM</sub> is undecidable (proven earlier) <!-- .element: class="fragment" -->
2. If MPCP were decidable &rarr; A<sub>TM</sub> decidable <!-- .element: class="fragment" -->
3. Therefore MPCP is undecidable <!-- .element: class="fragment" -->
4. If PCP were decidable &rarr; MPCP decidable <!-- .element: class="fragment" -->
5. Therefore PCP is undecidable <!-- .element: class="fragment highlight-red" -->

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Therefore

<div class="theorem-box">
<strong>Theorem 5.15:</strong> PCP is undecidable.
</div>

No algorithm can decide whether an arbitrary PCP instance has a match.
