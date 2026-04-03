# Undecidability & The Post Correspondence Problem

## What is this topic?
This presentation explores the concept of **undecidability** in theoretical computer science using the **Post Correspondence Problem (PCP)**.

## Field
This topic belongs to the study of **Theory of Computation**, which focuses on what problems can and cannot be solved by algorithms.

## Key Terms
- **Algorithm**: A step-by-step procedure used to solve a problem  
- **Turing Machine**: A theoretical model of computation that defines what an algorithm can do  
- **Decidable Problem**: A problem that can be solved by an algorithm for all inputs  
- **Undecidable Problem**: A problem for which no algorithm can always determine the correct answer  

---

## Why This Topic Matters

- It shows that not all problems can be solved by computers  
- It defines the **limits of computation**, even with unlimited time and resources  
- It helps us understand the boundary between what is computationally possible and impossible  

---

## What is Decidability?

A problem is **decidable** if there exists an algorithm (or Turing Machine) that:

- Always halts  
- Correctly outputs **YES** or **NO** for every possible input  

---

## Intuition for the Problem

The Post Correspondence Problem involves matching sequences of strings using domino-like tiles. Each tile has a string on the top and bottom, and the goal is to arrange them so both sides match exactly.

At first glance, this seems like a problem a computer should be able to solve.

---

## Transition

However, this problem turns out to be **undecidable**.  

In the next section, we will explore the Post Correspondence Problem in detail and see how it leads to this surprising result.