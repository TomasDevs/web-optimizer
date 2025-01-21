import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const isMinified = mode === "minified";

  return {
    plugins: [react()],
    build: {
      outDir: mode === "minified" ? "dist" : "dist/unminified",
      minify: mode === "minified" ? "terser" : false,
      rollupOptions: {
        output: {
          entryFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`,
          chunkFileNames: `[name].js`,
        },
      },
    },
  };
});
