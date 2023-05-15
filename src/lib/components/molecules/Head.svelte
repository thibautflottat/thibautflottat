<script>
    // Import original full-sized image with `?run` query param.
    import me from '$lib/assets/me.jpg?run'
    import Img from '@zerodevx/svelte-img'
</script>
    
<Img class="rounded-full w-32 ml-auto mr-auto border-2 mb-4" src={me} alt="Me" />
<h1 class="text-xl font-bold uppercase">Thibaut Flottat</h1>
<em>Ph. D in statistical physics</em>
<em>Reseacher @<a href="https://simatlab.com">Simatlab</a></em>
<br /><br /><br />