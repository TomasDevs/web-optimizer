import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const isMinified = mode === "minified";

  return {
    plugins: [react()],
    build: {
      // Změna výstupní složky podle módu
      outDir: isMinified ? "dist/minified" : "dist/unminified",
      minify: isMinified ? "terser" : false,
      rollupOptions: {
        output: {
          entryFileNames: `[name].js`, // Neměním název souborů uvnitř
          assetFileNames: `[name].[ext]`,
          chunkFileNames: `[name].js`,
        },
      },
    },
  };
});
