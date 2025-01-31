import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const isMinified = mode === "minified";

  return {
    plugins: [react()],
    base: "/",
    build: {
      outDir: "dist",
      minify: process.env.MODE === "minified" ? "terser" : false,
      rollupOptions: {
        output: {
          entryFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`,
          chunkFileNames: `[name].js`,
        },
      },
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
