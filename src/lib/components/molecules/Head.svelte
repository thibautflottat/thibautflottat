<!-- <script>
    // Import original full-sized image with `?run` query param.
    import me from '$lib/assets/me.jpg?run'
    import Img from '@zerodevx/svelte-img'
</script>

<div class="w-32 p-1 rounded-full bg-gradient-to-r from-yellow-500 to-blue-500 ml-auto mr-auto">
<Img class="rounded-full w-32" src={me} alt="Me" />
</div>

<div class="text-xl font-bold uppercase">Thibaut Flottat</div>
<em>Ph. D. in statistical physics</em>
<em>Reseacher @<a href="https://simatlab.com" class="bg-gradient-to-r from-yellow-500 to-blue-500 bg-no-repeat bg-[length:100%_0.15em] bg-[0_100%] transition-all duration-300 hover:bg-[length:100%_88%]">Simatlab</a></em>
<br /><br /><br /> -->



<script>
    // Import original full-sized image with `?run` query param.
    import me from '$lib/assets/me.jpg'
    // import myImage from '../static/me.jpg';
    // import Img from '@zerodevx/svelte-img'
</script>

<div class="avatar_container">
<!-- <Img class="avatar_container_img" src={me} alt="Me" /> -->
</div>

<div class="text-xl font-bold uppercase">Thibaut Flottat</div>
<em>Ph. D. in statistical physics</em>
<em>Reseacher @<a href="https://simatlab.com">Simatlab</a></em>

<style lang="scss">
    .avatar_container {
        padding: 0.25rem; 
        margin-right: auto; 
        margin-left: auto; 
        background-image: linear-gradient(to right, var(--tw-gradient-stops)); 
        background-color: #F59E0B; 
        background-color: #3B82F6; 
        width: 8rem; 
        height: 8rem;
        border-radius: 9999px; 

        &_img {
            width: 8rem; 
            border-radius: 9999px; 
        }


    }
</style>