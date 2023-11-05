import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from '@zerodevx/svelte-img/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), imagetools()],
	resolve: {
		alias: {
			$routes: path.resolve('./src/routes')
		}
	}
};

export default config;
