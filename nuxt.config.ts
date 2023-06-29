// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/content',
    // '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
    'nuxt-icon'
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
  }
})
