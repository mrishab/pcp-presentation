<div class="slide-author" data-name="Tolu Adekore"></div>

# Let's Try a PCP Example

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Here's our domino set

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

We need to pick a sequence of these (repeats allowed) so the top and bottom strings line up.

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## So what are we actually trying to do?

Pick indices like [1, 2, 1, 3, ...] so that when you stack and concatenate:

<div class="highlight-box">
  top string = bottom string
</div>

Let's just try it and see what happens.

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Start with domino 1

<div class="domino-row">
  <div class="domino-box large">
    <div class="domino-top">ab</div>
    <div class="domino-bottom">a</div>
  </div>
</div>

<div class="match-visual">
  <div class="match-row">
    <span class="match-label">Top:</span>
    <span class="match-content">ab</span>
  </div>
  <div class="match-row">
    <span class="match-label">Bottom:</span>
    <span class="match-content">a</span>
  </div>
</div>

Top is ahead — we need to match the extra "b".

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Add domino 2

<div class="domino-row">
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

✅ Now they match!

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Full picture of that match

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

## What if we tried [1, 3] instead?

<div class="domino-row">
  <div class="domino-box large">
    <div class="domino-top">ab</div>
    <div class="domino-bottom">a</div>
  </div>
  <div class="domino-box large">
    <div class="domino-top">a</div>
    <div class="domino-bottom">ba</div>
  </div>
</div>

<div class="match-visual">
  <div class="match-row">
    <span class="match-label">Top:</span>
    <span class="match-content">ab + a = <strong>aba</strong></span>
  </div>
  <div class="match-row">
    <span class="match-label">Bottom:</span>
    <span class="match-content">a + ba = <strong>aba</strong></span>
  </div>
</div>

✅ This also matches — multiple sequences can work.

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Now let's look at one with NO solution

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

No tile has the same last character on both top and bottom → the strings can never end the same.

Therefore, no match exists.

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## So why can't we just... brute force it?

- There are infinitely many sequences to check
- If a match exists, great — you'll eventually find it
- But if there's no match? You search forever and never know when to stop

<div class="highlight-box">
  You can't tell "no match exists" apart from "haven't found it yet" — that's the problem.
</div>

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## A few things to take away from this

- Some PCP instances are solvable, some aren't — and they can look identical upfront
- Even solvable ones might need you to try many sequences before hitting the right one
- There's no clever shortcut — no pattern that tells you which sequences will work

---

<div class="slide-author" data-name="Tolu Adekore"></div>

## Tying it back to the proof

<div class="definition-box">
  In the reduction from A<sub>TM</sub>, domino sequences encode
  computation steps of a Turing Machine. A match exists
  <strong>if and only if</strong> that machine accepts its input.
</div>

What looked like a simple string puzzle is secretly running arbitrary computation.
