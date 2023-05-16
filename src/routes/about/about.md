# About

I am a quantum chemical physicist and scientific programmer who enjoys solving complex scientific and mathematical problems using computers. Currently I write programs to understand how particles inside atoms and molecules interact using quantum theory.

## Areas of experience:

    3Body library: Developed extensive library of high accuracy programs applicable to solving the Schrödinger equation for any three-particle system, exploring new quantum chemical physics using their wavefunctions.

    Density-Energy Space: Developed new physical framework showing a direct relationship between radial electron density and the total energy for quantum mechanical systems; a realisation of the Hohenberg and Kohn theorem.

    Electron Correlation: Calculated the current best electron correlation data for two-electron atoms through the Fully Correlated (FC) and Hartree Fock (HF) programs I developed in the 3Body library. I developed highly optimized, vectorized and parallelized C program to rapidly calculate millions of two-electron integrals using 200-digit precision with rigorous error bounds for each integral.

    Density Functional Theory Investigation: Implemented work of Colle and Salvetti (CS), Lee, Yang and Parr (LYP) and other DFT functionals to interface with my high accuracy FC and HF wavefunctions.

    Weakly Bound and Excited States: Implemented theoretical methodologies to analyse asymmetric behaviour of fermions in two-electron systems. I developed a deep learning inspired GPU technique using PyTorch to successfuly circumvent computational difficulties owing to ill-conditioned matrices.

I have expertise in greater than double precision calculations using DoubleDouble/QuadDouble data types as well as ball arithmetic; and parallel/GPU programming techniques using a variety of programming languages. I also routinely use machine learning in my research.

I run a blog called Textbook to Terminal, T>T, where I discuss scientific and mathematical related problems and how to program them (click the link on your left!)

In my spare time I enjoy powerlifting and strongman training, astrophotography, oil painting and tinkering with Raspberry Pi’s.
Education

    2014 - 2018: PhD in Quantum Chemical Physics, The University of Sussex, UK, “The few-particle quantum chemical physics of atoms and molecules.”
    2010 - 2014: Master of Physics and Astrophysics, The University of kent, UK.

Awards

    2019 NVIDIA GPU grant award

    Awarded a Titan V GPU from NVIDIA as part of their Accelerated Data Science grant program.

    2017 Young Modellers Forum (YMF) talk prize

    Awarded for my talk titled, “Going beyond standard approximations in quantum chemistry.”

    2016 Doctoral Overseas Grant award, The University of Sussex

    I was awarded £1000 by the University of Sussex to attend the International Society for Theoretical Chemical Physics (ISTCP). I presented a poster on my research.

    2016 Institute of Physics funding award, Institute of Physics

    I was awarded £300 to attend the International Society for Theoretical Chemical Physics (ISTCP) which took place in North Dakota USA. I presented a poster on my research.

    2014 MPHYS final year research prize, School of Physical Sciences, The University of Kent

    Awarded to the student in their final year with the best research project.

    2011 Second year student prize, School of Physical Sciences, The University of Kent

    Awarded to the student with the highest total mark in second year.



## Svelte Math

Svelte $\mu \alpha \theta \eta \mu \alpha$.

$$
\hat{\mathcal{H}} = -t \sum_{<i,j>} <a_{i}^{\dagger}a_{j} + h.c.> +\,\hat{\mathcal{V}}
$$

---

In its simplest form, $\hat{\mathcal{V}}$ is a on-site interaction which writes:

$$
\hat{\mathcal{V}} = \mathcal{U}
$$
## Displaying mathematics in Svelte and SvelteKit

For something simple and static like `$x=2$` in Svelte (but not SvelteKit),
the [KaTeX auto-render extension](https://katex.org/docs/autorender.html)
could work.

However, it will not work for server side rendering in SvelteKit, and
markup like `$\frac{1}{3}$` will fail
due to Svelte's interpretation of curly braces.

We explore 3 methods to get around this problem.

### Our recommendations

Content-heavy sites will do best using MDsveX with plugins: markdown is a great for content,
and we get to preserve the `$,$$` LaTeX syntax.

If dynamic and reactive math is required, we personally prefer the function-based approach as opposed
to using a component.

---

## Comparison of different methods

||`$,$$` syntax|<abbr title="server-side rendering">SSR</abbr>|Dynamic|Reactive|
|---|:---:|:---:|:---:|:---:|
|[Functional-based approach](./function-based)||✅|✅|✅|
|[Component-based approach](./component-based)|||✅|✅|
|[MDsveX with plugins](https://mdsvex-math-starter.vercel.app/)|✅|✅|||

### `$,$$` syntax

The ability use LaTeX-style delimiters like `$x+2$` and `$$ax^2+bx+c=0$$` in
our app makes inserting math easy.

### Server-side rendering (SSR)

SSR, along with all its benefits, is a big part of SvelteKit. Support for this feature
means that the math we want to render is already sent to the client as HTML without
having the client to render it again with JavaScript.

### Dynamic

We will use the word <dfn>dynamic</dfn> to refer to process of using Javascript
to generate the $LaTeX$ markup to be rendered. This is in contrast to the <dfn>static</dfn>
situation where the $LaTeX$ markup is hand-typed.

For example, rendering `2x^2+3x+4` directly will be considered static, while
the following will be considered dynamic:

```js
const a = 2, b = 3, c = 4;
const expression = `${a}x^2+${b}x+c`;
```

### Reactive

We will use the word <dfn>reactive</dfn> to refer to expressions that will change -- for example,
in response to user input.

The above dynamic example will not be considered reactive if the constants `a,b,c` do not change: there will be
no need to re-render our quadratic expression after the initial render.

It will be considered reactive if the values of `a,b,c` change
in a user session and we will need to re-render our quadratic expression.

# Svelte Math

Svelte $\mu \alpha \theta \eta \mu \alpha$.

$$
\mathrm{e}^{\mathrm{i}\pi} = -1
$$

---

## Displaying mathematics in Svelte and SvelteKit

For something simple and static like `$x=2$` in Svelte (but not SvelteKit),
the [KaTeX auto-render extension](https://katex.org/docs/autorender.html)
could work.

However, it will not work for server side rendering in SvelteKit, and
markup like `$\frac{1}{3}$` will fail
due to Svelte's interpretation of curly braces.

We explore 3 methods to get around this problem.

### Our recommendations

Content-heavy sites will do best using MDsveX with plugins: markdown is a great for content,
and we get to preserve the `$,$$` LaTeX syntax.

If dynamic and reactive math is required, we personally prefer the function-based approach as opposed
to using a component.

---

## Comparison of different methods

||`$,$$` syntax|<abbr title="server-side rendering">SSR</abbr>|Dynamic|Reactive|
|---|:---:|:---:|:---:|:---:|
|[Functional-based approach](./function-based)||✅|✅|✅|
|[Component-based approach](./component-based)|||✅|✅|
|[MDsveX with plugins](https://mdsvex-math-starter.vercel.app/)|✅|✅|||

### `$,$$` syntax

The ability use LaTeX-style delimiters like `$x+2$` and `$$ax^2+bx+c=0$$` in
our app makes inserting math easy.

### Server-side rendering (SSR)

SSR, along with all its benefits, is a big part of SvelteKit. Support for this feature
means that the math we want to render is already sent to the client as HTML without
having the client to render it again with JavaScript.

### Dynamic

We will use the word <dfn>dynamic</dfn> to refer to process of using Javascript
to generate the $LaTeX$ markup to be rendered. This is in contrast to the <dfn>static</dfn>
situation where the $LaTeX$ markup is hand-typed.

For example, rendering `2x^2+3x+4` directly will be considered static, while
the following will be considered dynamic:

```js
const a = 2, b = 3, c = 4;
const expression = `${a}x^2+${b}x+c`;
```

### Reactive

We will use the word <dfn>reactive</dfn> to refer to expressions that will change -- for example,
in response to user input.

The above dynamic example will not be considered reactive if the constants `a,b,c` do not change: there will be
no need to re-render our quadratic expression after the initial render.

It will be considered reactive if the values of `a,b,c` change
in a user session and we will need to re-render our quadratic expression.