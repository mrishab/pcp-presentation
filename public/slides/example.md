<div class="slide-author" data-name="Tolu Adekore"></div>

# Let's Try a PCP Example

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Goal

Three dominoes over the alphabet {a, b}:

<div class="domino-row">
  <div class="domino-box large">
    <div class="domino-top">ab</div>
    <div class="domino-bottom">a</div>
  </div>
  <div class="domino-box large">
    <div class="domino-top">b</div>
    <div class="domino-bottom">bb</div>
  </div>
  <div class="domino-box large">
    <div class="domino-top">a</div>
    <div class="domino-bottom">ba</div>
  </div>
</div>

Pick a sequence (repeats allowed) so that:

<div class="highlight-box">
  concatenated top string = concatenated bottom string
</div>

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## A Match: [1, 2]

<div class="domino-row">
  <div class="domino-box large">
    <div class="domino-top">ab</div>
    <div class="domino-bottom">a</div>
  </div>
  <div class="domino-box large">
    <div class="domino-top">b</div>
    <div class="domino-bottom">bb</div>
  </div>
</div>

<div class="match-visual">
  <div class="match-row">
    <span class="match-label">Top:</span>
    <span class="match-content">ab + b = <strong>abb</strong></span>
  </div>
  <div class="match-row">
    <span class="match-label">Bottom:</span>
    <span class="match-content">a + bb = <strong>abb</strong></span>
  </div>
</div>

✅ Sequence [1, 2] gives a match.

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## An Instance With No Solution

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

No matter what sequence you try, the top and bottom never match.

No match exists.

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Can we Brute Force?

- Infinitely many sequences to check
- If a match exists — you'll eventually find it
- If NO match exists - you'll search forever and never know when to stop

<div class="highlight-box">
  You can't tell "no match exists" apart from "haven't found it yet" — that's the problem.
</div>

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Tying it to the proof

<div class="definition-box">
  In the reduction from A<sub>TM</sub>, domino sequences encode
  computation steps of a Turing Machine.<br/>A match exists
  <strong>if and only if</strong> that machine accepts its input.
</div>
