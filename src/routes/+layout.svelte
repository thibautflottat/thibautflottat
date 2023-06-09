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
    // 
    margin: 0 auto;
  }
  main {
    max-width: 1224px;
    margin-left: 27.5%;
    padding: 2.5rem/* 40px */;
    // padding-right: 2.5rem/* 40px */;
    padding-top: 1rem/* 16px */;
    // background-color: var(--color--page-background);
    min-height: 100vh;
  }
  
</style>
