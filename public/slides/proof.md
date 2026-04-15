<div class="slide-author" data-name="Rishab Manocha"></div>

# Proving PCP is Undecidable

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Theorem 5.15

<div class="theorem-box">
<strong>Theorem:</strong> PCP is undecidable.
</div>

There is no algorithm that can determine, for every input, whether a PCP instance has a match.

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## The Halting Problem

**Input:** A Turing Machine M and input w

**Question:** Does M halt on w?

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Halting Problem is Undecidable

**Theorem:** There is no algorithm that can decide, for every input, whether a Turing Machine halts.

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Proof by Contradiction

Assume a decider H exists:

<div class="math-block">
H(⟨M, w⟩) =
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
D(⟨M⟩):<br>
&nbsp;&nbsp;1. Run H(⟨M, ⟨M⟩⟩)<br>
&nbsp;&nbsp;2. If H accepts: loop forever<br>
&nbsp;&nbsp;3. If H rejects: accept
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## The Paradox

What happens when we run D(⟨D⟩)?

- If D halts on ⟨D⟩ → H accepts → D loops  
- If D loops on ⟨D⟩ → H rejects → D halts

**Contradiction!**

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
A<sub>TM</sub> = { ⟨M, w⟩ | M is a TM that accepts w }
</div>

A<sub>TM</sub> is also undecidable (by similar argument)

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Why Does This Matter?

- Fundamental limits of computation
- Cannot write a "universal debugger"
- Many practical problems reduce to the halting problem

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Reductions

To prove a new problem B is undecidable:

1. Assume B is decidable
2. Show how to use B to decide A<sub>TM</sub>
3. Contradiction!

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

If PCP were decidable, then A<sub>TM</sub> would be decidable.

**Contradiction!**

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Proof Overview

1. Define MPCP (Modified PCP)
2. Reduce A<sub>TM</sub> to MPCP
3. Reduce MPCP to PCP

---

<div class="slide-author" data-name="Rishab Manocha"></div>

# Step 1: Modified PCP (MPCP)

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## MPCP Definition

<div class="definition-box">
MPCP = { ⟨P⟩ | P is a PCP instance with a match<br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>that starts with the first domino</strong> }
</div>

The only difference: match **must** begin with [t<sub>1</sub>/b<sub>1</sub>]

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Why MPCP?

- Forces the simulation to start with the initial configuration  
- Ensures the computation begins correctly

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Technical Assumptions

Before constructing P&prime;:

1. M never moves head left off the tape
2. If w = &epsilon;, use blank symbol ␣ instead
3. Match must start with first domino

---

<div class="slide-author" data-name="Rishab Manocha"></div>

# Step 2: A<sub>TM</sub> &le;<sub>m</sub> MPCP

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## The Construction

Given TM M = (Q, &Sigma;, &Gamma;, &delta;, q<sub>0</sub>, q<sub>accept</sub>, q<sub>reject</sub>) and input w:

Construct MPCP instance P&prime; such that:

<div class="highlight-box">
P&prime; has a match &hArr; M accepts w
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Key Idea

A match in P&prime; encodes an **accepting computation history** of M on w

Each domino simulates a single computation step of M

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Configurations

A configuration represents the TM state at one moment:

<div class="config-box">
# q<sub>0</sub>w<sub>1</sub>w<sub>2</sub>&hellip;w<sub>n</sub> #
</div>

- marks configuration boundaries
- State symbol appears left of the head position

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

Bottom is "ahead" &mdash; top must catch up by simulating M

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

All other tape cells remain the same

These dominos copy unchanged symbols

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

- First domino: copies the separator #
- Second domino: adds blank ␣ for tape expansion

(Simulates infinite blank tape to the right)

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

After M reaches the accepting state, special dominos remove surrounding symbols.

This allows the top string to catch up with the bottom string until both strings are identical.

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

<div class="highlight-box">
Match complete &hArr; M accepted w
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Why Not Use P&prime; Directly as PCP?

<div class="warning-box">
If we view P&prime; as a PCP instance (not MPCP), it <strong>always</strong> has a trivial match &mdash; regardless of whether M accepts w!
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## The Trivial Match

Can you find it? (Hint: It's very short)

---
<div class="slide-author" data-name="Rishab Manocha"></div>

<div class="domino-box large">
  <div class="domino-top">#</div>
  <div class="domino-bottom">#</div>
</div>

<p>Just use the separator domino from Part 5 alone!</p>

<p> Top = "#" = Bottom &rarr; Match!</p>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## The Problem

This trivial match exists whether or not M accepts w

We need to **force** the match to start with the first domino

That's why we must convert MPCP to PCP properly

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

## The ◇ Transformation

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
    <span class="transform-def">= ◇u<sub>1</sub>◇u<sub>2</sub>◇&hellip;◇u<sub>n</sub>◇</span>
  </div>
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Example

Let u = abc

<div class="example-box">
  <div>◇u = ◇a◇b◇c</div>
  <div>u◇ = a◇b◇c◇</div>
  <div>◇u◇ = ◇a◇b◇c◇</div>
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
    <div class="domino-top">◇t<sub>1</sub></div>
    <div class="domino-bottom">◇b<sub>1</sub>◇</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">t<sub>1</sub>◇</div>
    <div class="domino-bottom">b<sub>1</sub>◇</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">t<sub>2</sub>◇</div>
    <div class="domino-bottom">b<sub>2</sub>◇</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">&hellip;</div>
    <div class="domino-bottom">&hellip;</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">t<sub>k</sub>◇</div>
    <div class="domino-bottom">b<sub>k</sub>◇</div>
  </div>
  <div class="domino-box">
    <div class="domino-top">◇</div>
    <div class="domino-bottom">&empty;</div>
  </div>
</div>

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Why This Works

<div class="domino-box highlight">
  <div class="domino-top">◇t<sub>1</sub></div>
  <div class="domino-bottom">◇b<sub>1</sub>◇</div>
</div>

**Only** this domino has ◇ at the start of **both** top and bottom

Any match **must** begin here!

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## The Final Domino

<div class="domino-box">
  <div class="domino-top">◇</div>
  <div class="domino-bottom">␣</div>
</div>

Allows top to add the trailing ◇ to complete the match

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Correctness

- Original symbols appear at even positions
- ◇ symbols interleave but don't affect matching
- First domino is forced &rarr; MPCP constraint satisfied

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

1. A<sub>TM</sub> is undecidable (proven earlier)
2. If MPCP were decidable &rarr; A<sub>TM</sub> decidable
3. Therefore MPCP is undecidable
4. If PCP were decidable &rarr; MPCP decidable
5. Therefore PCP is undecidable

---

<div class="slide-author" data-name="Rishab Manocha"></div>

## Therefore

<div class="theorem-box">
<strong>Theorem 5.15:</strong> PCP is undecidable.
</div>

No algorithm can decide whether an arbitrary PCP instance has a match.
