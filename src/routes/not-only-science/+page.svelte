<script lang="ts">  
  export let data
  let { copy } = data
</script>

<!-- <Head title={`About`} /> -->

<div class="all-prose">
<svelte:component this={copy} />
</div>
