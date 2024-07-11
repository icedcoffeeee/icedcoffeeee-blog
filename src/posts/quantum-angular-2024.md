---
title: 'Quick Concepts: Quantum Orbital and Spin'
date: '2024-07-06'
tags:
  - quickconcepts
  - quantumphysics
---

This note was from my classes and everyone that have read it found it profound,
so I thought I'd share it here. Enjoy!

### Orbital Angular Momentum

- Definition

  $$
  \vec{\bold L}=
  \vec{\bold r}\times\vec{\bold p}=
  \begin{bmatrix}
  \bold x\\\bold y\\\bold z
  \end{bmatrix}\times
  \begin{bmatrix}
  \bold p_x\\\bold p_y\\\bold p_z
  \end{bmatrix}=
  \begin{bmatrix}
  \bold y\bold p_z-
  \bold z\bold p_y\\
  \bold z\bold p_x-
  \bold x\bold p_z\\
  \bold x\bold p_y-
  \bold y\bold p_x\\
  \end{bmatrix}
  $$

  This introduces each component: $\bold L_x$, $\bold L_y$, $\bold L_z$

  They’re all noncommutative with each other (relations given below), but they
  each _do_ commute with $\bold L^2=\bold L\cdot\bold L$

  - Commutators

    $$
    [\bold L_x,\bold L_y]=i\hbar\bold L_z
    $$

    Generally a cyclic pattern:

    - $(x,y)→z$
    - $(y,z)→x$
    - $(y,x)→-z$

    For arbitrary reason, we choose $\bold L_z$ as the special child, and form
    two eigenequations:

- Eigenstates of $\bold L^2$ and $\bold L_z$

  <span id="angular-identity"/>

  $$
  \bold L^2\ket{l}=
  \hbar^2l(l+1)\ket{l}
  \qquad
  \bold L_z\ket{m}=
  \hbar m\ket{m}
  $$

  The eigenvalues are chosen to reflect their quantization properties.

  Since both equations can be satisfied (commutative observables), a state may
  be an eigenstate of both $L^2$ and $\bold L_z$ simultaneously: $\ket{l\quad
  m}$

  - $l$ — the orbital quantum number, $l\in\{0,1,…,n\}$ where $n$ is the principle q.n.
  - $m$ — the orbital angular momentum, $m\in\{-l,-l+1,…,l\}$

  There’s a max value on $m$ because the angular momentum _component_ can’t be
  larger than the _magnitude_.

  There’s a max value on $l$ because the angular momentum _magnitude_ is fully
  dependant on its _energy_.

- Ladder operators
  We’ll form ‘ladder operators’ out of the $\bold L_x$ and $\bold L_y$:

  $$
  \bold L_\pm=\bold L_x\pm i\bold L_y
  $$

  which kinda looks like a generic complex number. Hence,

  $$
  \bold L_x=
  \frac{\bold L_++\bold L_-}2\qquad
  \bold L_y=
  \frac{\bold L_+-\bold L_-}{2i}
  $$

  It’s called a ladder because it raises/lowers the z-component eigenvalue by
  $\hbar$

  $$
  \bold L_\pm\ket{m}=
  \hbar\sqrt{l(l+1)-m(m\pm1)}\ket{m\pm1}
  $$

  The weird scaling is just to normalize the new state. You can see that when
  the $m$ is lowest $(m=-l)$, the normalization collapses the new state
  denoting the ‘lowest rung’. And vice versa! The highest rung also collapses,
  $(m=l)$.

  - Commutation with z-component

    $$
    [\bold L_\pm,\bold L_z]
    =[\bold L_x\pm i\bold L_y,
    \bold L_z]
    =[\bold L_x,\bold L_z]
    \pm i[\bold L_y,\bold L_z]
    =\pm\hbar\bold L_\pm
    $$

### Spin Angular Momentum

- Exactly the same as before, with differences:

  1. The spin quantum number replaces the orbital quantum number, $l\to s$

     Every particle has a immutable spin q.n. associated with it. Electrons:
     1/2, Photons: 1, Gravitons (don’t remember).

  2. The spin angular momentum is equivalent to orbital counterpart, $m\to m_s$

     Sometimes we drop the subscript cuz we’re not talking abt the orbital one.

- Electrons

  Electrons have $s=1/2$, which means they have two values of $m_s=\pm1/2$,
  commonly referred to as ‘up’ and ‘down’ (because they’re eigenvalues of
  $\bold S_z$ [remember](#angular-identity)?).

  Because of this, we let other states (a combination of both) be easily
  represented in a 2D column vector format.

  $$
  \chi=
  a\chi_++b\chi_-=
  a\ket{\uparrow}+b\ket{\downarrow}=
  \begin{bmatrix}a\\b
  \end{bmatrix}
  $$

  (there’s a lot of notation used everywhere)

  Due to the vector notation, the spin operators, $\bold S^2$ (and the rest)
  naturally takes the form of a matrix (which transform the coefficients in the
  $z$ component basis). For eigenstates of each operator, the eigenvalue
  yielded are indeed the observed values.

- Operators of spin as matrices

  $$
  \bold S^2=\frac34\hbar^2
  \begin{bmatrix}1&0\\0&1
  \end{bmatrix}
  $$

  $$
  \bold S_z=\frac\hbar2
  \begin{bmatrix}1&0\\0&-1
  \end{bmatrix}\qquad
  \bold S_x=\frac\hbar2
  \begin{bmatrix}0&1\\1&0
  \end{bmatrix}\qquad
  \bold S_y=\frac\hbar2
  \begin{bmatrix}0&-i\\i&0
  \end{bmatrix}
  $$

  The component operators have common factors, the unit-element matrices are
  the **Pauli Matrices**, $\sigma$.

  They each have eigenstates that we write in the basis of the $z$-component.
