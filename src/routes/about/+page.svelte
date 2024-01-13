<script lang="ts">
	import { math, display } from 'mathlifier';
	let n = 2;
	$: xN = `x^{${n}}`;
	import simbox from '$lib/assets/vmdscene.dat.jpg?enhanced';
</script>

<h2>About</h2>
<p>
	Ph. D. in theoretical physics, I am a Research Engineer at <a
		href="https://michelin.com"
		title="Michelin"
		target="_blank">Michelin</a
	>. I work on understanding the physico-chemical mechanisms in soft matter for tires and hydrogen
	fuel cells applications.<br /><br />

	From September 2021 to September 2023, I was a post-doctoral fellow at
	<a href="https://simatlab.com" title="SiMatLab" target="_blank">SiMatLab</a>. I worked on Ions
	Exchange Membranes (IEM) for hydrogen fuel cells applications, using classical and reactive
	molecular dynamics.<br /><br />

	Before that, I was development engineer at CELAD for the
	<a href="https://cnes.fr" title="CNES" target="_blank">CNES</a>, working on Megha-Tropiques
	mission to study the water cycle in the tropical atmosphere in the context of climate change.<br
	/><br />

	I have obtained my Ph. D. at the University Nice-Sophia Antipolis in the field of ultracold atoms
	and condensed matter theory under the supervision of
	<a
		href="https://scholar.google.com/citations?user=5wZZnu8AAAAJ&hl=fr"
		title="George Batrouni"
		target="_blank">George Batrouni</a
	>. My research activities focused on strongly correlated systems in atomic gases loaded on optical
	lattices and cavity quantum electrodynamics. These systems are governed by extended Bose-Hubbard
	Hamiltonians which I mainly tackled with exact numerical methods (quantum Monte Carlo and exact
	diagonalization) and approximated approaches (mean field theory).
</p>

<!-- <div>
	Inline math (static): {@html math('A = \\pi r^2')}
</div>
<div>
	Inline math (dynamic): {@html math(xN)}
</div>
<div>
	Display math: {@html display(xN)}
</div> -->

<style lang="scss">
	h2 {
		text-align: center;
		padding: 2rem 0;
	}
	p {
		line-height: 1.6;
	}
</style>
