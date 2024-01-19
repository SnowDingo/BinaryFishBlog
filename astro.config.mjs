import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  publicDir: './public',
  site: 'https://binary-fish.vercel.app',
  output: "server",
  adapter: vercel(),
  integrations: [sitemap()]
});