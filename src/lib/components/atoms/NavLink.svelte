<script lang="ts">
	import { isMenuOpen } from "$lib/stores/menu";
	import { page } from '$app/stores';
	export let href: string;
	export let text: string;
</script>


<li
	class="nav_item"
	class:open={$isMenuOpen}
>
	<a
		{href}
		class:active={$page.url.pathname === href}
	>	
		<span>{text}</span>
	</a>	
</li>

<style lang="scss">
	li {

		a {
			text-decoration: none;

		}
	}

</style>