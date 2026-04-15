# Undecidability & The Post Correspondence Problem

---

## What is this topic?

- Undecidability in theoretical computer science  
- Studied through the **Post Correspondence Problem (PCP)**

<div class="slide-author" data-name="Shahbaaz Gill"></div>

---

## Field
This topic belongs to the study of **Theory of Computation**, which focuses on what problems can and cannot be solved by algorithms.

<div class="slide-author" data-name="Shahbaaz Gill"></div>

---

## Key Terms
- **Algorithm**: A step-by-step procedure used to solve a problem  
- **Turing Machine**: A theoretical model of computation that defines what an algorithm can do  
- **Decidable Problem**: A problem that can be solved by an algorithm for all inputs  
- **Undecidable Problem**: A problem for which no algorithm can always determine the correct answer  

<div class="slide-author" data-name="Shahbaaz Gill"></div>

---

## Why This Topic Matters

- It shows that not all problems can be solved by computers  
- It defines the **limits of computation**, even with unlimited time and resources  
- It helps us understand the boundary between what is computationally possible and impossible  

<div class="slide-author" data-name="Shahbaaz Gill"></div>

---

## What is Decidability?

A problem is **decidable** if there exists an algorithm (or Turing Machine) that:

- Always halts  
- Correctly outputs **YES** or **NO** for every possible input  

<div class="slide-author" data-name="Shahbaaz Gill"></div>

---

## Intuition for the Problem

- We are given domino-like tiles  
- Each tile has a **top string** and **bottom string**  
- Goal: arrange tiles so both strings match  

At first, this seems easy — something a computer should solve.

<div class="slide-author" data-name="Shahbaaz Gill"></div>

---

## Transition

- This problem turns out to be **undecidable**
- No algorithm can always solve it  

Next, we’ll explore the PCP in detail.

<div class="slide-author" data-name="Shahbaaz Gill"></div>