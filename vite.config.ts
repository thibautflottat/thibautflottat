import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from '@zerodevx/svelte-img/vite'
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit(), imagetools()],
	resolve: {
		alias: {
			$routes: path.resolve('./src/routes')
		}
	}
});
