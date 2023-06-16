<script lang="ts">
    import Head from "../molecules/Head.svelte";
    import Navigation from "../molecules/Navigation.svelte";
    import Foot from "../molecules/Foot.svelte";
    import HamburgerButton from "../atoms/HamburgerButton.svelte";
    import { isMenuOpen } from '$lib/stores/menu'
    import { onMount } from "svelte";
    import { loadFull } from "tsparticles";
	import { theme } from '$lib/stores/theme';

    let ParticlesComponent;

	let particlesColor: string
	if ($theme === 'auto') {
		particlesColor = 'dada';
	} else if ($theme === 'light') {
		particlesColor = '#5d5f65';
	} else {
		particlesColor = '#9eb4b5';
	}
	

    onMount(async () => {
        const module = await import("svelte-particles");

        ParticlesComponent = module.default;
    });


    let particlesConfig = {
		fullScreen: {
				enable: false,
				zIndex: 0,
  			},
        particles: {
            color: {
                value: particlesColor,
            },
            links: {
                enable: true,
                color: particlesColor,
            },
            move: {
                enable: true,
            },
            number: {
                value: 100,
            },
        },
    };

    let onParticlesLoaded = event => {
        const particlesContainer = event.detail.particles;

        // you can use particlesContainer to call all the Container class
        // (from the core library) methods like play, pause, refresh, start, stop
    };

    let particlesInit = async main => {
        // you can use main to customize the tsParticles instance adding presets or custom shapes
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
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

<!-- <div id="tsparticles-container">
	<svelte:component
		this="{ParticlesComponent}"
		id="tsparticles"
		class="foo bar"
		style="width:100%; height:100vh;"
		options="{particlesConfig}"
		on:particlesLoaded="{onParticlesLoaded}"
		particlesInit="{particlesInit}"
	/>
</div> -->

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
        // left: calc(13% - 16rem); 
        padding: 1.25rem; 
        text-align: center; 
        flex-direction: column; 
        width: 20rem; 
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
    
	#tsparticles-container {
		position: absolute;
		height: 100vh !important;
		left: 0;
  right: 0;
  margin: 0;
  padding: -1.25rem; ;
//   height: 100vh; //  In my case I wanted the div to cover the whole viewport.
#tsparticles {   // This is the id of the div created by the Particles component
  height: 100vh !important;
  position: relative;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
//   z-index: 0;
}
}



</style>