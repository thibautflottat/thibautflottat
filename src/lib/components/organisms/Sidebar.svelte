<script lang="ts">
    import Head from "../molecules/Head.svelte";
    import Navigation from "../molecules/Navigation.svelte";
    import Foot from "../molecules/Foot.svelte";
    import HamburgerButton from "../atoms/HamburgerButton.svelte";
    import { isMenuOpen } from '$lib/stores/menu'
</script>

<!-- <aside class="fixed flex flex-col top-0 left-0 p-5 my-auto text-center bg-stone-300 dark:bg-stone-800 h-full w-64"> -->

<HamburgerButton />

<aside
class="main-nav nav"
class:open={$isMenuOpen}
> 

<!-- <nav
class="main-nav nav"
class:open={$isMenuOpen}
> -->

<Head />

<Navigation />

<Foot />
<!-- </nav> -->

</aside>

<style lang="scss">
    @import '$lib/scss/_breakpoints.scss';

    aside {

        @include menu-down {
			display: block;
			position: fixed;
			transition: transform .4s cubic-bezier(1, 0, 0, 1), opacity .4s cubic-bezier(1, 0, 0, 1);
			transform: translateX(0);
			background: var(--color--post-page-background); 
			width: 100vw;
			// height: 100vh;
			top: 0;
			left: -100vw;
			display: flex;
			flex-wrap: wrap;
			place-content: center;
			padding: 3rem;
			opacity: 0;
			z-index: 10;

			&.open,
			&:focus-within {
				transform: translateX(100vw);
				opacity: 1;
			}
		}
        display: flex; 
        position: fixed; 
        top: 0; 
        left: calc(27.5% - 16rem); 
        padding: 1.25rem; 
        text-align: center; 
        flex-direction: column; 
        width: 16rem; 
        height: 100%; 
        background: var(--color--post-page-background); 

    //     .main-nav {
	// 	// text-align: right;

	// 	@media (max-width: 1200px) {
	// 		display: block;
	// 		position: fixed;
	// 		transition: transform .4s cubic-bezier(1, 0, 0, 1), opacity .4s cubic-bezier(1, 0, 0, 1);
	// 		transform: translateX(0);
	// 		background: hsla(var(--blackHSL), 0.95);
	// 		width: 100vw;
	// 		height: 100vh;
	// 		top: 0;
	// 		left: -100vw;
	// 		display: flex;
	// 		flex-wrap: wrap;
	// 		place-content: center;
	// 		padding: 3rem;
	// 		opacity: 0;
	// 		z-index: 10;

	// 		&.open,
	// 		&:focus-within {
	// 			transform: translateX(100vw);
	// 			opacity: 1;
	// 		}
	// 	}

	// 	@media (min-width: 1200px) {
	// 		// display: flex;
    //         // direction: flex-col;
	// 	}
	// }
    }
    
</style>