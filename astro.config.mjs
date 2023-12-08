import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  publicDir: './public',
  site: 'https://binary-fish.vercel.app/',
  output: "server",
  adapter: vercel()
});