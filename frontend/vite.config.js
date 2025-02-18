import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const isMinified = mode === "minified";
  return {
    plugins: [react()],
    base: "/",
    build: {
      outDir: isMinified ? "dist-minified" : "dist-unminified", // Každý build do jiné složky
      emptyOutDir: true,
      minify: isMinified ? "terser" : false,
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
        },
        output: {
          entryFileNames: isMinified
            ? "minified-index.js"
            : "unminified-index.js",
          assetFileNames: isMinified
            ? "minified-index.[ext]"
            : "unminified-index.[ext]",
          chunkFileNames: isMinified
            ? "minified-[name].js"
            : "unminified-[name].js",
        },
      },
      copyPublicDir: true,
    },
    publicDir: resolve(__dirname, "public"),
    server: {
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
      },
    },
  };
});
