<script lang="ts">
	import NavLink from '../atoms/NavLink.svelte';
</script>

<nav>
	<ul>
		<NavLink href="/" text="Home" />
		<NavLink href="/about" text="About" />
		<NavLink href="/not-only-science" text="Not only science" />
	</ul>
</nav>

<style lang="scss">
	nav {
		flex-grow: 1;
		padding-top: 2rem;
		z-index: 2;

		ul {
			display: flex;
			letter-spacing: 0.1em;
			text-transform: uppercase;
			flex-direction: column;
			gap: 2rem;
			list-style-type: none;
			margin: 10px 0 10px 0px;
			font-family: 'Michelin';
			font-weight: 300;
			font-style: italic;
		}
	}
</style>
