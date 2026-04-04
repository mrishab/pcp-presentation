## What is the Problem?

The Post Correspondence Problem is problem of undecidability with the manipulation of strings. Undecidability is to say that we cannot construct a Turing machine for this language. The goal is to prove its undecidability.

<div class="slide-author" data-name="Reet Singh"></div>

---

## Simple Example

The common example to understand the concept is that of dominoes. Consider a collection of dominoes, each with one string on the top and one string on the bottom. 

$$ \set{\left[\frac{a}{ab}\right], \left[\frac{abc}{c}\right], \left[\frac{ca}{a}\right], \left[\frac{b}{cd}\right] } $$

<div class="slide-author" data-name="Reet Singh"></div>

---

## Simple Example (cont.)

The goal is to make the string at the top equals the string on the bottom using the strings given in the original problem. This is referred to as a match. 
Repetition of strings is allowed *but* we cannot split strings into their individual characters.

<div class="slide-author" data-name="Reet Singh"></div>

---
From the example above, our result would be the following.
$$\set{\left[\frac{a}{ab}\right], \left[\frac{b}{ca}\right], \left[\frac{ca}{a}\right], \left[\frac{abc}{c}\right]}$$

The top is $abcdabcd$ and the bottom is $abcdabcd$, both strings are the same so we have a match.
For the proof, we modify this problem to make the match start with the first domino, ($\left[ \frac{a}{ab} \right]$ would be the start of our simple example). This is called the Modified Post Correspondence Problem (MPCP).

<div class="slide-author" data-name="Reet Singh"></div>

---

## The Problem

A turing machine cannot determine if a domino set has a match for every possible input. It is impossible as it would be uncomputable. The proof will work by showing that if we could solve the PCP, we could solve the problem of if a turing machine accepts a given input. We will construct a turing machine for a specific input for a specific set of domino where we can build a match by simulating the turing machine's computation step by step. A complete match will only exist if the machine reaches an accepting state. 

<div class="slide-author" data-name="Reet Singh"></div>