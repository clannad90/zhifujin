const { defineConfig } = require('@vue/cli-service')
// 是否是生产环境
const isProd = process.env.NODE_ENV === 'production';
const baseUrl  = isProd ? '' : '/';
module.exports = defineConfig({
  publicPath:baseUrl,
   // 开发环境配置
   devServer: {
    proxy: {
      // 代理服务端请求 上下文配置
      '/Services': {
        target: process.env.VUE_APP_Domain,
        changeOrigin: true
      }
    },
    // 开发调试端口
    port: 8080
  },
  transpileDependencies: true,
 
})
