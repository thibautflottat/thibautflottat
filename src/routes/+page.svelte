<script lang="ts">  
  export let data
  let { copy } = data
</script>

<!-- <Head title={`About`} /> -->

<div id="page-content">
<svelte:component this={copy} />
</div>
