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
// Squelch warnings of image imports from your assets dir
declare module '$lib/assets/*' {
    const meta: Object[]
    export default meta
  }
declare module "*.md";