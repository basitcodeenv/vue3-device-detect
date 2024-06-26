import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

const ASSET_URL = process.env.ASSET_URL || '';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) =>  {
	if (mode === "prod") {
		return {
			plugins: [vue()],
			build: {
				lib: {
					// Could also be a dictionary or array of multiple entry points
					entry: resolve(__dirname, "lib/index.ts"),
					name: "Vue3DeviceDetect",
					// the proper extensions will be added
					fileName: "vue3-device-detect",
				},
				rollupOptions: {
					// make sure to externalize deps that shouldn't be bundled
					// into your library
					external: ["vue"],
					output: {
						// Provide global variables to use in the UMD build
						// for externalized deps
						globals: {
							vue: "Vue",
						},
					},
				},
			},
		};
	} else {
		return {
			base: ASSET_URL,
			plugins: [
				vue(),
			],
			build: {
				outDir: "demo",
			},
		};
	}
})
