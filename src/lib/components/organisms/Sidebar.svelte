<script lang="ts">
    import Head from "../molecules/Head.svelte";
    import Navigation from "../molecules/Navigation.svelte";
    import Foot from "../molecules/Foot.svelte";
</script>

<!-- <aside class="fixed flex flex-col top-0 left-0 p-5 my-auto text-center bg-stone-300 dark:bg-stone-800 h-full w-64"> -->

<aside> 

<Head />

<Navigation />

<Foot />

</aside>

<style lang="scss">
    aside {
        display: flex; 
        position: fixed; 
        top: 0; 
        // left: 0; 
        padding: 1.25rem; 
        text-align: center; 
        flex-direction: column; 
        width: 16rem; 
        height: 100%; 
        background: var(--color--post-page-background); 
    }
    
</style>