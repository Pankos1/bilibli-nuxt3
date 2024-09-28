// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  // 是否开启调试工具
  devtools: { enabled: true },
  //是否开启ssr服务器渲染
  ssr: true,
  modules: ['@vant/nuxt'],
  // 移动端适配
  postcss: {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 375,
      }
    }
  },
})
