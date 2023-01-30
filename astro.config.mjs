import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import Unocss from "unocss/astro";
import { presetTypography, presetUno, presetAttributify } from "unocss";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import vue from "@astrojs/vue";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [vue({
    appEntrypoint: "/src/pages/_app"
  }), mdx(), sitemap(), Unocss({
    presets: [presetTypography(), presetAttributify(), presetUno({
      dark: "class"
    })]
  }), image()],
  output: "server",
  adapter: netlify()
});