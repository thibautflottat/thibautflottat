<script lang="ts">
	import { isMenuOpen } from "$lib/stores/menu";
	import { page } from '$app/stores';
	export let href: string;
	export let text: string;
</script>


<li
	class="nav__item"
	class:open={$isMenuOpen}
>
	<a
		{href}
		class="hover:text-zinc-50 transition duration-300 hover:duration-300"
		class:active={$page.url.pathname === href}
	>	
		<span>{text}</span>
	</a>	
</li>