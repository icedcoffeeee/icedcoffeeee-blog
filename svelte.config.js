import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import targetBlank from "svelte-target-blank";
import { mdsvex } from "mdsvex";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import footnotes from "remark-footnotes";
import math from "remark-math";
import katex from "rehype-katex";

const katexOpt = {
  displayMode: true,
  macros: {
    "\\vb": "\\bold",
    "\\va": "\\vec{\\bold #1}",
    "\\dd": "\\,\\mathrm{d}",
  },
};

const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      remarkPlugins: [footnotes, math],
      rehypePlugins: [katex, katexOpt],
      extensions: [".md"],
      layout: { _: join(__dirname, "./src/markdown/layout.svelte") },
    }),
    targetBlank({ quietList: "**/*.md" }),
  ],

  kit: {
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
