import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import { viteSingleFile } from "vite-plugin-singlefile";
import { plugin as mdPlugin, Mode as MarkdownMode } from "vite-plugin-markdown";

const plugins = [
  vue(),
  vueDevTools(),
  viteSingleFile(),
  mdPlugin({ mode: [MarkdownMode.HTML] }), //
];

// https://vite.dev/config/
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
