// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/content',
    // '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
    'nuxt-icon',
    '@vueuse/motion/nuxt'
  ],
  // buildModules: [
  //   '@nuxtjs/google-fonts'
  // ],
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },
  router: {
    middleware: ['scrollTriggerRefresh']
  },
})
