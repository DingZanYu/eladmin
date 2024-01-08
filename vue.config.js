// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false
// })

const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  chainWebpack(config) {
    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')
    // set svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  transpileDependencies: true,
  lintOnSave: false,
  /**基准地址 */
  publicPath: '/',
  /**打包
   *开发环境: development
   *测试环境:test
   *灰度环境,备机,半线上:stage
   *线上环境,全量:production
   */
  outputDir: 'dist',
  assetsDir: 'assets',
  devServer: {
    port: '7276',
    host: '0.0.0.0',
    proxy: {
      /* 代理标识 */
      /**
			 *
			 * localhost:9999/api/login
			 *api:https://ihrm-java.itheima.net/api
			 原本请求的路径:https://ihrm-java.itheima.net/api/login
			 路径重写https://ihrm-java.itheima.net/login
			 */
      [process.env.VUE_APP_IDENT]: {
        /**配置代理默认开启代理方式 */
        changeOrigin: true,
        /**如果是http接口，需要配置该参数 */
        secure: false,
        /**配置代理路径 */
        target: process.env.VUE_APP_URL,
        /**路径重写，向后端发起服务的时候，不带代理标识 */
        pathRewrite: {
          ['^' + process.env.VUE_APP_IDENT]: ''
        }
      }
    }
  }
})
