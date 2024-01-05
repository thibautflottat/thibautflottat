<script>
	// Import original full-sized image with `?as=run` query param
	import me from '$lib/assets/me.jpg?enhanced';
</script>

<div class="head">
	<div class="headshot">
		<enhanced:img
			src={me}
			alt="Me"
			sizes="(min-width:1920px) 200px, (min-width:1080px) 200px, (min-width:768px) 100px"
		/>
	</div>

	<div class="headtitle">Thibaut Flottat</div>
	<em>Ph. D. in theoritical physics</em><br />
	<em>Research engineer <a class="magical" href="https://michelin.com">@Michelin</a></em>
</div>

<style lang="scss">
	.head {
		z-index: 2;

		.headtitle {
			font-family: 'Michelin';
			font-weight: 400;
			font-style: italic;
			// font-weight: bold;
			font-size: 1.15rem; /* 20px */
			line-height: 1.75rem; /* 28px */
			// text-transform: uppercase;
		}

		.headshot {
			// --img-url: url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=350&h=350&fit=crop&crop=faces);
			flex-shrink: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0 auto 20px;
			height: calc(60px + 6vw);
			width: calc(60px + 6vw);
			// border: calc(1px + 0.2vw) solid transparent;
			background-origin: border-box;
			background-clip: content-box, border-box;
			background-size: cover;
			box-sizing: border-box;
			box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
			border-radius: 50%;
			background-image: linear-gradient(to right, var(--color--primary), var(--color--secondary));

			:global(img) {
				border-radius: 50%;
				height: calc(50px + 6vw);
				width: calc(50px + 6vw);
			}
		}

		.magical {
			padding-bottom: 0.15rem;
			text-decoration: none;
			background-image: linear-gradient(
				120deg,
				var(--color--primary) 0%,
				var(--color--secondary) 100%
			);
			background-repeat: no-repeat;
			background-size: 100% 0.1rem;
			background-position: 0 90%;
			transition: background-position 0.25s ease-in;
			&:hover {
				// background-size: 100% 88%;
				background-position: 0 100%;
			}
		}
	}
</style>
