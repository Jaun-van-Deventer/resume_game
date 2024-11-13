import { defineConfig } from "vite";

export default defineConfig ({
    base: "/resume_game/",
    build: {
        minify: "terser",
    },
})