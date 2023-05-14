<!-- src/component/PageTransitions.svelte -->
<script>
    import { fade } from 'svelte/transition';
    export let refresh = '';
</script>

{#key refresh}
    <div in:fade={{ delay: 100, duration:300 }}>
        <slot/>
    </div>
{/key}