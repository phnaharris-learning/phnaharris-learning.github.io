import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://phnaharris.github.io",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkToc],
  },
});
