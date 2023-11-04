<script lang="ts">
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import LinkedInIcon from '$lib/icons/socials/linkedin.svelte';
	import EmailIcon from '$lib/icons/socials/email.svelte';
	import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';

	// import { onMount } from "svelte";

// let showToggle = false;

// onMount(() => {
//   const handleResize = () => {
// 	showToggle = window.innerWidth <= 1125; // Adjust the breakpoint as needed
//   };

//   handleResize(); // Initial check

//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// });
</script>

<div class="foot">
<div class="socials">
	<a
		href="https://github.com/thibautflottat"
		target="_blank"
		rel="noopener noreferrer"
		title="See my GitHub profile"
	>
		<GitHubIcon />
	</a>
	<a
		href="https://www.linkedin.com/in/thibautflottat/"
		target="_blank"
		rel="noopener noreferrer"
		title="Connect on LinkedIn"
	>
		<LinkedInIcon />
	</a>
	<a
		href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%68%65%6C%6C%6F%40%74%68%69%62%61%75%74%66%6C%6F%74%74%61%74%2E%66%72"
		target="_blank"
		rel="noopener noreferrer"
		title="Send an email"
	>
		<EmailIcon />
	</a>
	//
	<!-- {#if !showToggle}
	//
	<ThemeToggle />
	{/if} -->
</div>
</div>

<style lang="scss">

	.foot {
		z-index: 2;

		.socials {
		display: flex;
		align-items: center;
		gap: 20px;

		a {
			transition: all 0.2s ease-in-out;
			width: 24px;
			color: var(--color--text);
			fill: var(--color--text);

			&:hover {
				color: var(--color--primary);
				fill: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}	
	}

</style>
