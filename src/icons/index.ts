import { createApp } from "vue";
import App from "../App.vue";
// svg component 引入svg组件
import SvgIcon from "../components/SvgIcon/index.vue";
const app = createApp(App);

// register globally 注册全局使用
app.component("svg-icon", SvgIcon as any) ;

const req = require.context("./svg", false, /\.svg$/);
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
requireAll(req);