<script>
	// Import original full-sized image with `?run` query param.
	import me from '$lib/assets/me.jpg';
	// import myImage from '../static/me.jpg';
	// import Img from '@zerodevx/svelte-img'
</script>

<div class="headshot">
</div>

<div class="text-xl font-bold uppercase">Thibaut Flottat</div>
<em>Ph. D. in statistical physics</em>
<em>Reseacher <a class="magical" href="https://simatlab.com">@Simatlab</a></em>

<style lang="scss">
	.headshot {
		--img-url: url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=350&h=350&fit=crop&crop=faces);
		flex-shrink: 0;
		margin: 0 auto 20px;
		height: calc(60px + 6vw);
		width: calc(60px + 6vw);
		border: calc(1px + 0.2vw) solid transparent;
		background-origin: border-box;
		background-clip: content-box, border-box;
		background-size: cover;
		box-sizing: border-box;
		box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
		border-radius: 50%;
		background-image: var(--img-url),
			linear-gradient(to right, var(--color--blue), var(--color--primary));
	}

	.magical {
		text-decoration: none;
		background-image: linear-gradient(120deg, var(--color--blue) 0%, var(--color--primary) 100%);
		background-repeat: no-repeat;
		background-size: 100% 0.1em;
		background-position: 0 95%;
		transition: background-size 0.25s ease-in;
		&:hover {
			background-size: 100% 88%;
		}
	}
</style>
