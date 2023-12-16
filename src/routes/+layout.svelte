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
	<!-- <div class="test">
		<ThemeToggle />
	</div> -->

	<Sidebar />

	<main>
		<!-- <div class="background-blurrer" /> -->
		<!-- <div class="blob one" /> -->
		<!-- <div class="blob two" /> -->
		<!-- <div class="blob three" /> -->
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
	}
	main {
		max-width: 1224px;
		padding: 2.5rem /* 40px */;
		padding-top: 1rem /* 16px */;
		min-height: 100vh;
		position: relative;
		// overflow-x: clip;
		// overflow-y: hidden;

		@include for-phone-only {
			padding: 1.5rem;
		}

		@include menu-up {
			margin-left: 20rem;
		}
		@include menu-down {
			margin-left: 0%;
		}

		:global(a) {
			&:hover {
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}

		.background-blurrer {
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			background: rgba(var(--color--page-background-rgb), 0.7);
			z-index: -1;
			-webkit-backdrop-filter: blur(100px);
			backdrop-filter: blur(100px);
		}
		.blob {
			position: absolute;
			animation: float 2s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
			animation-fill-mode: both;
			background: var(--color--primary-shade);
			z-index: -2;
			--size: 400px;
			height: var(--size);
			width: var(--size);

			&.one {
				border-radius: var(--radius-blob-1);
				top: max(600px, calc(15% - var(--size)));
				left: 10%;
				animation-duration: 10s;
			}
			&.two {
				background: var(--color--secondary);
				border-radius: var(--radius-blob-2);
				--size: 420px;
				top: max(600px, calc(45% - var(--size)));
				left: 70%;
				animation-duration: 10s;
			}
			&.three {
				border-radius: var(--radius-blob-3);
				--size: 440px;
				top: max(700px, calc(75% - var(--size)));
				left: -10%;
				animation-duration: 10s;
			}
		}
	}
</style>
