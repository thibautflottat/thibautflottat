<script lang="ts">

    import { onMount } from "svelte";
    import { loadFull } from "tsparticles";
	import { theme } from '$lib/stores/theme';

    let ParticlesComponent;
	let particlesConfig;
    let isMobile = false;

    onMount(async () => {
        const module = await import("svelte-particles");

        ParticlesComponent = module.default;

    });

	theme.subscribe(value => {

        particlesConfig = {

            fullScreen: {
                    enable: false,
                    zIndex: 0,
                },

            particles: {
                color: {
                    value: value === "dark" ? "#5d5f65" : "#9eb4b5",
                },
                links: {
                    enable: true,
                    color: value === "dark" ? "#5d5f65" : "#9eb4b5",
                    opacity: 0.3,
                },
                move: {
                    enable: true,
                    speed: 0.5,
                },
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 800
                        }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 0.5,
                        opacity_min: 0.1,
                        sync: false
                        }
                },
            },
        };

	});

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

<div id="tsparticles-container">
	<svelte:component
		this="{ParticlesComponent}"
		id="tsparticles"
		class="foo bar"
		style="width:100%; height:100vh;"
		options="{particlesConfig}"
		on:particlesLoaded="{onParticlesLoaded}"
		particlesInit="{particlesInit}"
	/>
</div>

<style lang="scss">
    
	#tsparticles-container {
		position: absolute;
		height: 100vh !important;
		left: 0;
        right: 0;
        margin: 0;
        top: 0; 

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