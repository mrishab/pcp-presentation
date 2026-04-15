## What is the Problem?

The Post Correspondence Problem (PCP) is an example of an **undecidable problem**.

This means there is no algorithm (or Turing machine) that can always determine whether a given PCP instance has a match.

- **Given:** a set of dominoes (pairs of strings)  
- **Goal:** find a sequence so the top and bottom match  
- **Question:** does such a sequence exist?

<div class="slide-author" data-name="Reet Singh"></div>

---

## Simple Example

The common example used to introduce PCP is with dominoes. Each domino has one string on the top and one on the bottom.

<div>
\[
\left\{ \left[\frac{b}{ca}\right], \left[\frac{a}{ab}\right], \left[\frac{ca}{a}\right], \left[\frac{abc}{c}\right] \right\}
\]
</div>

<div class="slide-author" data-name="Reet Singh"></div>

---

## Simple Example (cont.)

The goal is to construct a sequence of dominoes so the top and bottom strings are identical.

- Dominoes can be reused  
- Strings cannot be split into individual characters

<div class="slide-author" data-name="Reet Singh"></div>

---

One possible matching sequence is:

<div>$$\left\{ \left[\frac{a}{ab}\right],\ \left[\frac{b}{ca}\right],\ \left[\frac{ca}{a}\right],\ \left[\frac{a}{ab}\right],\ \left[\frac{abc}{c}\right] \right\}$$</div>

Top: $abcaaabc$  
Bottom: $abcaaabc$

So we have a match.

For the proof, we modify the problem to require the sequence to start with the first domino, $\left[\frac{a}{ab}\right]$.

This is called the Modified Post Correspondence Problem (MPCP).

<div class="slide-author" data-name="Reet Singh"></div>

---

## The Problem

- No algorithm can always determine if a PCP instance has a match
- We prove this by reduction from Turing Machine acceptance

<div class="slide-author" data-name="Reet Singh"></div>

---

- Idea:
  - Convert a Turing Machine into a PCP instance
  - Dominoes simulate the machine’s computation

- A match exists  
  ⇔ the Turing Machine accepts the input

<div class="slide-author" data-name="Reet Singh"></div>