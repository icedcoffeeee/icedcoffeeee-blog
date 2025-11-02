import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import targetBlank from "svelte-target-blank";
import { mdsvex } from "mdsvex";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({ extensions: [".md"], layout: { _: join(__dirname, "./src/layouts/layout.svelte") } }),
    targetBlank({ quietList: "**/*.md" }),
  ],
  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
    experimental: { remoteFunctions: true },
    alias: {
      $: "./src",
    },
  },
  compilerOptions: { experimental: { async: true } },
  extensions: [".svelte", ".md"],
};

export default config;
