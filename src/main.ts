import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import NProgress from 'nprogress' // 引入nprogress插件
// import 'nprogress/nprogress.css'  // 这个nprogress样式必须引入
import { createPinia } from 'pinia'
const state = createPinia()

import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { quillEditor } from 'vue3-quill'

createApp(App)
  .use(ElementPlus)
  .use(ElementPlus, { locale: zhCn })
  .use(quillEditor)
  .use(state)
  .use(router)
  .mount('#app')
