<script lang="ts">
  import '$lib/scss/global.scss';
  // import "../app.css";
  import Sidebar from "$lib/components/organisms/Sidebar.svelte";
  import PageTransition from '$lib/components/PageTransition.svelte';
  import { page } from '$app/stores';
  
</script>

<div id="app">

	<Sidebar />

	<main>
    <PageTransition refresh={$page.url.pathname}>
      <slot/>
    </PageTransition>
  </main>

</div>

<style lang="scss">
  #app {
    max-width: 1080px;
    margin: 0 auto;
  }
  main {
    margin-left: 16rem;
    padding-left: 2.5rem/* 40px */;
    padding-right: 2.5rem/* 40px */;
    padding-top: 1rem/* 16px */;
    background-color: var(--color--page-background);
    min-height: 100vh;
  }
  
</style>
