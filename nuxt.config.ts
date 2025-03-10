export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["swiper/css", "~/assets/css/main.css"],
  modules: ["@pinia/nuxt", "@vee-validate/nuxt", "@nuxtjs/i18n"],
  plugins: ["~/plugins/toast.client"],
  components: [
    "~/components",
    { path: "~/components/home/", extensions: ["vue"] },
    { path: "~/components/blog/", extensions: ["vue"] },
  ],
  i18n: {
    strategy: "prefix_except_default",
    locales: [
      { code: "en", iso: "en-US", name: "English" },
      { code: "ar", iso: "ar-EG", name: "Arabic" },
    ],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },
  app: {
    head: {
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyC5UbwjShNViPsTd7E_mKvUZE8Nl5G2vKM&libraries=places`,
          async: true,
          defer: true,
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/LogoTap.svg",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=League+Spartan:wght@100..900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
        },
      ],
      title: "Zero_Point_Path",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      BaseApi: "https://77d0-197-42-6-148.ngrok-free.app/api/Account",
      emailApi: "b31a8b5c304c480b924c708bc973ae99",
      portApi: "at_3lNiCgasU9k2naFPfhn2fIU8FGnLp",
    },
  },
});
