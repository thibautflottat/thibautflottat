<script lang="ts">
	import { isMenuOpen } from '$lib/stores/menu';

	let readableMenuStateOpposite: string;
	$: readableMenuStateOpposite = $isMenuOpen ? 'Close' : 'Open';

	import ThemeToggleM from '$lib/components/molecules/ThemeToggleM.svelte';
	import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';

	// import { onMount } from "svelte";

	// let showToggle = false;

	// onMount(() => {
	// const handleResize = () => {
	// showToggle = window.innerWidth >= 1125; // Adjust the breakpoint as needed
	// };

	// handleResize(); // Initial check

	// window.addEventListener("resize", handleResize);
	// return () => window.removeEventListener("resize", handleResize);
	// });
</script>

<div class="mobile_menu">
	<button
		id="hamburger"
		aria-pressed={$isMenuOpen}
		class:fixed={$isMenuOpen}
		class="settings-toggle"
		on:click={() => isMenuOpen.set(!$isMenuOpen)}
	>
		<span class="sr">{readableMenuStateOpposite} menu</span>
		<div class="line line-top" aria-hidden="true" />
		<div class="line line-middle" aria-hidden="true" />
		<div class="line line-bottom" aria-hidden="true" />
	</button>

	<ThemeToggleM />
</div>

<style lang="scss">
	@import '$lib/scss/_breakpoints.scss';

	.mobile_menu {
		position: fixed;
		display: flex;
		left: calc(100% - 9rem);
		top: calc(100% - 3rem);
		align-items: center;
		z-index: 11;
		// justify-content: center;
		// @include menu-down {
		// 	display: flex;
		// 	left: calc(100% - 10rem);
		// 	bottom: 1rem;
		//     position: fixed;
		//     // right: 0;
		// 	// top: 90%;
		// }
		// .mobile_only {
		// 	display: none;

		// 	@include menu-down {
		// 		display: block;
		// 		// position: fixed;
		// 		// right: 0;
		// 		// top: 90%;
		// 	}
		// }
	}

	#hamburger {
		display: none;
		justify-content: space-between;
		flex-direction: column;
		align-items: stretch;
		width: 2.2rem;
		height: 2.2rem;
		padding: 0.55rem;
		margin-right: 2rem;
		background: var(--color--page-background);
		position: relative;
		z-index: 11;
		border: 2px solid var(--color--text);
		border-radius: 2.2rem;
		overflow: visible;
		transition-delay: 0.15s;
		cursor: pointer;

		.sr {
			position: absolute;
			left: -100vw;
			opacity: 0;
			width: 1px;
			height: 1px;
			overflow: hidden;
			border: none;
			word-wrap: normal;
			clip: rect(1px, 1px, 1px, 1px);
			clip-path: inset(50%);
		}

		&:before {
			content: '';
			height: 2.2rem;
			width: 1px;
			background: var(--color--text);
			display: block;
			position: absolute;
			top: -2px;
			right: -1.1rem;
			transition: inherit;
			transition-delay: 0.1s;
		}

		&.fixed {
			position: relative;
			// top: unset;
			// right: unset;
			// animation: none;

			.line {
				color: var(--color--text);

				&-top {
					transform: translate(0.025em, -0.1em) rotate(-45deg) scaleX(1.5);
				}

				&-middle {
					transform: scaleX(0);
				}

				&-bottom {
					transform: translate(0.025em, 0.1em) rotate(45deg) scaleX(1.5);
				}
			}
		}

		.line {
			width: 100%;
			height: 2px;
			background: var(--color--text);
			transition:
				background 0.2s,
				transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
			transform-origin: right;

			&-middle {
				transform-origin: center;
			}
		}

		&:hover,
		&:focus {
			.line {
				background: var(--color--primary);
			}
		}

		@include menu-down {
			display: flex;
			// position: fixed;
			// right: 0;
			// top: 90%;
		}
	}
</style>
