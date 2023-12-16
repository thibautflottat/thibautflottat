<script>
	import ProjectsIcon from '$lib/icons/projects.svelte';
	import BlogIcon from '$lib/icons/blog.svelte';
	import UserIcon from '$lib/icons/user.svelte';
	import ExperienceIcon from '$lib/icons/experience.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
</script>

<section id="hero">
	<h2 class="hello">Hello, I'm Thibaut!</h2>
	<p class="intro">
		<span class="left">I try to understand soft matter using</span>
		<span class="right">quantum and molecular mechanics.</span>
	</p>
	<!-- <p class="intro">
		I am a computational physicist in classical and quantum physical chemistry, who enjoys solving
		complex scientific and mathematical problems using computers.
	</p> -->
	<div class="ctas">
		<Button ref="user-btn" style="understated" href="/about">
			<UserIcon slot="icon" />
			About
		</Button>
		<Button ref="resume-btn" href="/">
			<BlogIcon slot="icon" />
			Resume
		</Button>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
		position: relative;
		padding: 0px 0;

		@include for-phone-only {
			padding: 40px 0 50px;
		}

		.hello {
			text-align: center;
		}

		.intro {
			font-weight: 500;
			font-size: 1.4rem;
			width: min(100%, 500px);
			display: flex;
			flex-direction: column;

			.left {
				text-align: left;
			}
			.right {
				text-align: right;
			}

			@include for-phone-only {
				display: block;
			}
		}

		.ctas {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			gap: 10px;
			width: 100%;

			@include for-phone-only {
				display: none;
			}
		}
	}

	:global([ref='user-btn']) {
		order: 1;
		flex: 0 0 180px;
	}
	:global([ref='resume-btn']) {
		order: 2;
		flex: 0 0 180px;
	}
</style>
