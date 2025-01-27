import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@pinia/nuxt", "@nuxtjs/seo", "@vee-validate/nuxt"],
  vite: {
    plugins: [tailwindcss()],
  },
  robots: {},
});
