<script lang="ts">
  import '$lib/scss/global.scss';
  // import "../app.css";
  import Sidebar from "$lib/components/organisms/Sidebar.svelte";
  import PageTransition from '$lib/components/PageTransition.svelte';
  import { page } from '$app/stores';

  import { isMenuOpen } from '$lib/stores/menu'
	import { afterNavigate, beforeNavigate, preloadCode } from '$app/navigation'


  beforeNavigate(({ to }) => {
		$isMenuOpen = false
		// if (to?.route?.id) {
		// 	// $isLoading = true
		// 	// root.classList.remove('smooth-scroll')
		// }
	})

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

	<Sidebar />

	<main>
    <PageTransition refresh={$page.url.pathname}>
      <slot/>
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
    padding: 2.5rem/* 40px */;
    padding-top: 1rem/* 16px */;
    min-height: 100vh;

    @include menu-up {
      margin-left: 20rem;
    }
    @include menu-down {
      margin-left: 0%;
    }
  }
  
</style>
