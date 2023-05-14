<script lang="ts">
  import "../app.css";
  // import '$lib/scss/global.scss';
  import Sidebar from "$lib/components/organisms/Sidebar.svelte";
  import PageTransition from '$lib/components/PageTransition.svelte';
  import { page } from '$app/stores';
</script>

<div id="app">

	<Sidebar />

	<main class="ml-64 px-8 pt-4">
    <PageTransition refresh={$page.url.pathname}>
      <slot/>
    </PageTransition>
  </main>

</div>
