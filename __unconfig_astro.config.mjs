
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
const __unconfig_default =  defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
});

if (typeof __unconfig_default === "function") __unconfig_default(...[]);export default __unconfig_data;