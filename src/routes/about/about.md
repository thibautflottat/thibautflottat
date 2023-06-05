<script>
    import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
</script>

# About

I am a computational physicist in classical and quantum physical chemistry, who enjoys solving complex scientific and mathematical problems using computers. I am mostly working with molecular simulation and am always keen to learn new techniques, methods and informatic languages.
Currently I write programs to understand structure/properties of Ions Exchange Membranes at the molecular scale.

## Areas of experience:

### Quantum phase transition in strongly correlated systems

You can find my Ph. D. thesis, *Bosons coupled to spin-$1/2$ in lattices* [here](https://simatlab.com).

- **Bosonic Kondo-Hubbard model**

- **Rabi-Hubbard model**

- **Bose-Hubbard model with long-range interaction**

## Interests of research

- Polymers physics
- Membrane physics
- Multiscale numerical simulation
- Ultracold gases
- Condensed matter theory
- Many-body physics




<!-- ## Svelte Math

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

<CodeBlock lang="html" filename="+page.svelte">

```html
<Header />
<Hero />
<About />
<Footer />
```

</CodeBlock>

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
in a user session and we will need to re-render our quadratic expression. -->