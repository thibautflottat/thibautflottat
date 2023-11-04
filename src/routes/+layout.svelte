<script lang="ts">
	import '$lib/scss/global.scss';
	import { beforeNavigate, afterNavigate, onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	// import "../app.css";
	import Sidebar from '$lib/components/organisms/Sidebar.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import { page } from '$app/stores';

	import { isMenuOpen } from '$lib/stores/menu';

	import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';


	// Add smooth-scrolling to the entire website
	let root: HTMLElement;
	onMount(async () => {
		root = document.getElementsByTagName('html')[0];
		root.classList.add('smooth-scroll');
	});

	// Disable smooth scrolling when navigating
	// This is because, when navigating between pages using the same layout,
	// The page is scrolled to the top. With smooth scrolling enabled, this causes a
	// weird animation.
	beforeNavigate(() => {
		root.classList.remove('smooth-scroll');
		$isMenuOpen = false;
	});
	afterNavigate(() => {
		root.classList.add('smooth-scroll');
	});

	// Use view transitions if available
	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	import { description, image, keywords, title, siteBaseUrl } from '$lib/data/meta';
</script>

<svelte:head>
	<link rel="“canonical”" href={siteBaseUrl} />
	<meta name="keywords" content={keywords.join(', ')} />

	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />

	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />

	<meta property="og:image" content={image} />
	<meta name="twitter:image" content={image} />
</svelte:head>

<div id="app">
	<div class="test">
		<ThemeToggle />
	</div>

	<Sidebar />

	<main>
		<PageTransition refresh={$page.url.pathname}>
			<slot />
		</PageTransition>
	</main>
</div>

<style lang="scss">
	@import '$lib/scss/_breakpoints.scss';

	#app {
		//
		margin: 0 auto;

		.test {
			@include menu-down {
				right: 0;
				width: auto;
				padding-left: 0;
			}
			position: fixed;
			z-index: 100;
			bottom: 0;
			padding: 1.25rem;
			padding-left: 10.5rem;
			width: 20rem;
		}
	}
	main {
		max-width: 1224px;
		padding: 2.5rem /* 40px */;
		padding-top: 1rem /* 16px */;
		min-height: 100vh;

		@include menu-up {
			margin-left: 20rem;
		}
		@include menu-down {
			margin-left: 0%;
		}
	}
</style>
