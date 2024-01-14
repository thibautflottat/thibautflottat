// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter: adapter(),
		adapter: adapter({ routes: { include: ['/*'], exclude: ['<all>', '/sitemap.xml'] } }),
		prerender: {
			handleHttpError: 'warn'
		}
	},
	preprocess: [vitePreprocess()]
};

export default config;
