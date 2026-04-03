<div class="slide-author" data-name="Tolu Adekore"></div>

# PCP: A Worked Example

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Our Domino Collection

We have 3 dominoes:

<div class="domino-row">
  <div class="domino-box large">
    <div class="domino-top">a</div>
    <div class="domino-bottom">aaa</div>
  </div>
  <div class="domino-box large">
    <div class="domino-top">aa</div>
    <div class="domino-bottom">a</div>
  </div>
  <div class="domino-box large">
    <div class="domino-top">aaa</div>
    <div class="domino-bottom">aa</div>
  </div>
</div>

**Goal:** Find a sequence of indices so the top and bottom strings match.

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## What Are We Looking For?

We want to pick a sequence like [1, 2, 3, 1, ...] such that:

<div class="highlight-box">
  Concatenated top = Concatenated bottom
</div>

Let's work through it step by step.

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Step 1: Start with Domino 1

<div class="domino-row">
  <div class="domino-box large">
    <div class="domino-top">a</div>
    <div class="domino-bottom">aaa</div>
  </div>
</div>

<div class="match-visual">
  <div class="match-row">
    <span class="match-label">Top so far:</span>
    <span class="match-content">a</span>
  </div>
  <div class="match-row">
    <span class="match-label">Bottom so far:</span>
    <span class="match-content">aaa</span>
  </div>
</div>

Bottom is ahead by 2 — we need to grow the top.

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Step 2: Add Domino 2

<div class="domino-row">
  <div class="domino-box large">
    <div class="domino-top">aa</div>
    <div class="domino-bottom">a</div>
  </div>
</div>

<div class="match-visual">
  <div class="match-row">
    <span class="match-label">Top so far:</span>
    <span class="match-content">a + aa = <strong>aaa</strong></span>
  </div>
  <div class="match-row">
    <span class="match-label">Bottom so far:</span>
    <span class="match-content">aaa + a = <strong>aaaa</strong></span>
  </div>
</div>

Top grew faster — but bottom is still ahead by 1.

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Step 3: Add Domino 2 Again

<div class="match-visual">
  <div class="match-row">
    <span class="match-label">Top so far:</span>
    <span class="match-content">aaa + aa = <strong>aaaaa</strong></span>
  </div>
  <div class="match-row">
    <span class="match-label">Bottom so far:</span>
    <span class="match-content">aaaa + a = <strong>aaaaa</strong></span>
  </div>
</div>

<div class="highlight-box">
  ✅ Match found! Sequence: [1, 2, 2] &rarr; both = <strong>aaaaa</strong>
</div>

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Verifying the Match

<div class="domino-row">
  <div class="domino-box large">
    <div class="domino-top">a</div>
    <div class="domino-bottom">aaa</div>
  </div>
  <div class="domino-box large">
    <div class="domino-top">aa</div>
    <div class="domino-bottom">a</div>
  </div>
  <div class="domino-box large">
    <div class="domino-top">aa</div>
    <div class="domino-bottom">a</div>
  </div>
</div>

<div class="match-visual">
  <div class="match-row">
    <span class="match-label">Top:</span>
    <span class="match-content">a + aa + aa = <strong>aaaaa</strong></span>
  </div>
  <div class="match-row">
    <span class="match-label">Bottom:</span>
    <span class="match-content">aaa + a + a = <strong>aaaaa</strong></span>
  </div>
</div>

Both sides produce the same 5-character string. &checkmark;

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Another Valid Match: Sequence [1, 3]

<div class="domino-row">
  <div class="domino-box large">
    <div class="domino-top">a</div>
    <div class="domino-bottom">aaa</div>
  </div>
  <div class="domino-box large">
    <div class="domino-top">aaa</div>
    <div class="domino-bottom">aa</div>
  </div>
</div>

<div class="match-visual">
  <div class="match-row">
    <span class="match-label">Top:</span>
    <span class="match-content">a + aaa = <strong>aaaa</strong></span>
  </div>
  <div class="match-row">
    <span class="match-label">Bottom:</span>
    <span class="match-content">aaa + aa = <strong>aaaaa</strong></span>
  </div>
</div>

<div class="highlight-box">
  ❌ Not equal &mdash; off by one!
</div>

Multiple sequences exist; not all of them work.

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Now: A PCP Instance With No Solution

<div class="domino-row">
  <div class="domino-box large">
    <div class="domino-top">ab</div>
    <div class="domino-bottom">abab</div>
  </div>
  <div class="domino-box large">
    <div class="domino-top">b</div>
    <div class="domino-bottom">a</div>
  </div>
  <div class="domino-box large">
    <div class="domino-top">aba</div>
    <div class="domino-bottom">b</div>
  </div>
</div>

No sequence produces a match for this collection. The answer is **NO**.

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Why Can't We Just Check All Sequences?

- There are **infinitely many** possible sequences to try
- If no match exists, we'd search forever and never know
- We can't distinguish "no match" from "haven't found it yet"

<div class="highlight-box">
  This is exactly why PCP is undecidable.
</div>

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Key Observations

- A match may require trying **many** combinations before finding one
- Some instances have **multiple** valid matches, some have **none**
- There is **no shortcut** — no pattern to predict which sequences work
- The unpredictability here mirrors the unpredictability of Turing Machine execution

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Connecting Back to the Proof

<div class="definition-box">
  When A<sub>TM</sub> is reduced to PCP, domino sequences encode
  Turing Machine computation histories. A match exists
  <strong>if and only if</strong> the machine accepts.
</div>

The simple string-matching we just did encodes something as powerful as arbitrary computation.
