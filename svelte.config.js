import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				preserveSymlinks: true
			}
		}
	}
};

export default config;
