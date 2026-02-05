import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js", "resources/css/filament/admin/theme.css"],
            refresh: true,
            ssr: "resources/js/ssr.js",
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
    // TAMBAHKAN BAGIAN INI UNTUK SOLUSI LODASH
    ssr: {
        noExternal: ['lodash'],
    },
    server: {
        watch: {
            ignored: ["**/storage/framework/views/**"],
        },
    },
});