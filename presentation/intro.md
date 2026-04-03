# Intro + Why This Topic Matters

## Topic
Section 5.2, A Simple Undecidable Problem

## Introduction
This section introduces a simple but powerful idea in theoretical computer science: not every well-defined problem can be solved by an algorithm.

The problem is presented using domino-like pieces with strings on the top and bottom. The goal is to determine whether there exists some sequence of pieces such that the combined top string matches the combined bottom string.

At first, this may seem like a puzzle that a computer should always be able to solve. However, Section 5.2 shows that this is not true in general.

## Why This Topic Matters
This topic matters because it introduces the idea of undecidability. An undecidable problem is not just difficult or time-consuming. It is a problem for which no algorithm can always correctly decide the answer for every possible input.

That is important because it shows a fundamental limit of computation. Computer science is not only about what computers can do, but also about what they cannot do.

This domino-style problem is significant because it gives a concrete example of a problem that looks simple on the surface but is actually impossible to solve in full generality. It helps us understand the power and the limits of algorithms.

## Transition to the Proof
The next part of the presentation explains why this problem is undecidable by showing how solving it would also solve another problem already known to be undecidable.