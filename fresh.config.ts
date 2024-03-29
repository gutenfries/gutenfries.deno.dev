import { defineConfig } from '$fresh/server.ts';
import tailwind from '$fresh/plugins/tailwind.ts';
import tailwindConfig from '@/tailwind.config.ts';

export default defineConfig({
	plugins: [
		tailwind(tailwindConfig), // ignore error, bug within the framework plugin
	],
});
