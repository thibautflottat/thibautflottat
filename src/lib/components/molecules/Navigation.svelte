<script lang="ts">
	import NavLink from "../atoms/NavLink.svelte";
</script>

<nav class="grow pt-8">
	<ul class="text-zinc-400 uppercase flex flex-col gap-8 tracking-widest">
		<NavLink href="/" text="Home" />
		<NavLink href="/about" text="About" />
		<NavLink href="/research" text="Research" />
		<NavLink href="/not-only-science" text="Not only science" />
	</ul>
</nav>