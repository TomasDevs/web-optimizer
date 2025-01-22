import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const isMinified = mode === "minified";
  console.log("API BASE URL:", process.env.VITE_API_URL);

  return {
    plugins: [react()],
    base: "/",
    build: {
      outDir: mode === "minified" ? "dist/minified" : "dist/unminified",
      minify: mode === "minified" ? "terser" : false,
      rollupOptions: {
        output: {
          entryFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`,
          chunkFileNames: `[name].js`,
        },
      },
    },
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
