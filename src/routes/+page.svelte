<script lang="ts">
	// import AvatarWithBlobs from '$lib/components/molecules/AvatarWithBlobs.svelte';
	// import Socials from '$lib/components/molecules/Socials.svelte';
	// import SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';
	// import ContentWithImage from '$lib/components/organisms/ContentWithImage.svelte';
	// import Experience from '$lib/components/organisms/Experience.svelte';
	import Hero from '$lib/components/organisms/Hero.svelte';
	// import Projects from '$lib/components/organisms/Projects.svelte';
	// import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	// import type BlogPost from '$lib/data/blog-posts/model';
	// import type { Project } from '$lib/utils/types';
	// import type WorkExperience from '$lib/data/work-experience/model';

	// export let data: {
	// 	yearsOfExperience: number;
	// 	experienceEntries: WorkExperience[];
	// 	projects: Project[];
	// 	posts: BlogPost[];
	// };

	// let { yearsOfExperience, experienceEntries, projects, posts } = data;
</script>

<!-- <Head title={`About`} /> -->

<div id="page-content">
	<Hero />
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.socials {
		display: flex;
		align-items: center;
		gap: 15px;

		@include for-phone-only {
			justify-content: center;
			margin-bottom: 10px;
			span {
				display: none;
			}
		}
	}
</style>
