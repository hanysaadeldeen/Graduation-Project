import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@pinia/nuxt", "@vee-validate/nuxt", "@nuxtjs/seo"],
  vite: {
    plugins: [tailwindcss()],
  },
});
