import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { getToken,removeToken } from './auth'
import { ElMessageBox } from 'element-plus'
import router from '@/router/index'
import * as TS from './defind'
//@ts-ignore
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const URL: string = '/'

// 配置axios请求
const config = {
  // 默认地址
  baseURL: URL as string,
  // 设置超时时间
  timeout: 3000 * 10,
  // 跨域时候允许携带凭证
  withCredentials: true
}
// 用类名注释类的对象
class httpRequest {
  // 定义成员变量并指定类型
  service: AxiosInstance
  // 设置公共的类名放置传参
  public constructor(config: AxiosRequestConfig) {
    // 实例化axios
    this.service = axios.create(config)
    /*
		请求拦截
		客户端发送请求->[请求拦截器]->服务器
		token校验(JWT):接收服务器返回的token,存储到vuex本地中
		*/
    this.service.interceptors.request.use(
      (config) => {
				NProgress.start() // 设置加载进度条(开始..)
        // 添加token
        // @ts-ignore
        config.headers['Authorization'] = getToken()

        return config
      },
      (error: AxiosError) => {
        Promise.reject(error)
      }
    )

    // 响应拦截
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
				NProgress.done() // 设置加载进度条(结束..)
        const { config, data, status } = response
        if (status === TS.RequestEnums.UNAUTHORIZED) {
          // 登录信息失效，应跳转到登录页面，并清空本地的token
          // sessionStorage.clear()
					removeToken()
          router.replace({ path: '/login' })

          return Promise.reject(data)
        } // 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
        return response
      },
      (error: AxiosError) => {
        const { response } = error
        let title: string = ''
        let message: string = ''
        if (error && response) {
          // 401,token失效
          if (response.status === TS.RequestEnums.UNAUTHORIZED) {
            router.push({
              name: 'login'
            })
          }
          switch (
            response.status // 跨域存在获取不到状态码的情况
          ) {
            case TS.RequestEnums.BADREQUEST:
              title = '错误请求'
              break
            case TS.RequestEnums.UNAUTHORIZED:
              title = '资源未授权'
              break
            case TS.RequestEnums.NOTFOUND:
              title = '未找到所请求的资源'
              break
            case TS.RequestEnums.ERROR:
              title = '内部服务器错误'
              break
            default:
              title = response.status.toString()
          }
          return ElMessageBox.alert(title, '提示', {
            confirmButtonText: 'OK',
            type: 'warning'
          })
        } else {
          // 跨域获取不到状态码或者其他状态进行的处理
          return ElMessageBox.alert('未知错误,请联系管理员', '提示', {
            confirmButtonText: 'OK',
            type: 'error'
          })
        }
      }
    )
  }
  public adUrl(url: string) {
    console.log(process.env.VUE_APP_IDENT, 'process')
    return !process.env.VUE_APP_IDENT ? url : process.env.VUE_APP_IDENT + url
  }

  // 常用方法封装
  get<T>(url: string, params?: object): Promise<TS.ResultData<T>> {
    return this.service.get(this.adUrl(url), { params })
  }
  post<T>(url: string, params?: object): Promise<TS.ResultData<T>> {
    return this.service.post(this.adUrl(url), params)
  }
  put<T>(url: string, params?: object): Promise<TS.ResultData<T>> {
    return this.service.put(this.adUrl(url), params)
  }
  delete<T>(url: string, params?: object): Promise<TS.ResultData<T>> {
    return this.service.delete(this.adUrl(url), { data:params })
  }
}

//实例对象
const http = new httpRequest(config)

export default http
