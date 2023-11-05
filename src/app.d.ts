// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
declare module "*.md";
declare module "particles.js";

// Squelch warnings of image imports from your assets dir
// declare module '$lib/assets/*' {
//     var meta
//     export default meta
//   }