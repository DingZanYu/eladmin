import api from "@/utils/httpRequest"
import * as TS from './user'
import * as RO from './role'
import * as Me from './menu'
import * as De from './dept'
import * as Jo from "./job"
import { ReuleForm } from "@/utils/defind"

// 获取验证码
export const codeApi = () => api.get(('/auth/code'))

// 登录
export const loginApi = (data:ReuleForm) => api.post('/auth/login',data)

// 左侧菜单
export const menuApi = () => api.get('/api/menus/build')

// 系统管理
	// 用户管理
		// 左侧树形
		export const treeApi = () => api.get(`/api/dept?sort=id,desc`)
		export const treeChildApi = (params:TS.TreeId) => api.get(`/api/dept?sort=id,desc&pid=${params.pid}`)
		// 查看激活或未激活
		export const statusApi = () => api.get(`/api/dictDetail?dictName=user_status&page=0&size=9999`)
		// table表格
		export const tableApi = (params:TS.TableList) => api.get(`api/users?page=${params.page}&size=${params.size}&sort=id%2Cdesc`)
		// 重置密码
		export const passwordApi = (params:any) => api.put(`/api/users/resetPwd`,params)
		// 删除
		export const deleteApi = (params:TS.Del) => api.delete(`/api/users`,params.ids)
		// 添加api
			// 角色
			export const rolesApi = () => api.get('/api/roles/all')
			// 部门
			// export const deptApi = (params:Dept) => api.get(`/api/dept?enabled=${params.enabled}`)
			// /api/dept?enabled=true&pid=7
			export const deptApi = (params:TS.DeptItem) => api.get(`/api/dept?enabled=${params.enabled}`,params)
			// 岗位
			export const jobApi = (params:TS.JobItem) => api.get(`/api/job?page=${params.page}&size=${params.size}&enabled=${params.enabled}`)
			// level
			export const levelApi = () => api.get(`/api/roles/level`)
			// 左右侧联动(点击左侧右侧筛选)
			export const filterApi = (params:{deptId:number}) => api.get(`/api/users?page=0&size=10&sort=id%2Cdesc&deptId=${params.deptId}`)
			// 左侧树形搜素
			export const treeSearchApi = (params:{name:string}) => api.get(`/api/dept?sort=id,desc&name=${params.name}`)

// 角色管理 名称搜素
export const roleApi = (params:RO.Role) => api.get(`/api/roles?page=${params.page}&size=${params.size}&sort=level%2Casc&blurry=${params.blurry}`)
	// 右侧菜单
	export const lazyApi = (params:{pid:number}) => api.get(`/api/menus/lazy?pid=${params.pid}`)

// 菜单管理
export const menuSPApi = (params:Me.Menu) => api.get(`/api/menus?page=${params.page}&size=${params.size}&sort=id%2Cdesc`)
	// 子级渲染
	export const menuChildApi = (params:{pid:number}) => api.get(`/api/menus?pid=${params.pid}`)

// 部门管理
export const deptSPApi = (params:De.Dept) => api.get(`/api/dept?page=${params.page}&size=${params.size}&sort=id%2Cdesc`)
	// 子级渲染
	export const deptChildApi = (params:{pid:number}) => api.get(`/api/dept?pid=${params.pid}`)
	// 添加
	export const deptAddApi = (params:De.addDept) => api.post(`/api/dept`,params)
	// 删除
	export const deptDelApi = (params:TS.Del)=> api.delete(`/api/dept`,params.ids)
	//
	export const superApi = (params:TS.Del)=> api.post(`/api/dept/superior?exclude=true`,params.ids)
	// 编辑
	export const deptEditApi = (params:De.addDept)=> api.put(`/api/dept`,params)

// 岗位管理
export const  jobSPApi  = (params:De.Dept) => api.get(`/api/job?page=${params.page}&size=${params.size}&sort=jobSort%2Casc&sort=id%2Cdesc`)
	// 添加
	export const jobAddApi = (params:Jo.JobAdd) => api.post(`/api/job`,params)
	// 编辑
	export const jobEditApi = (params:Jo.JobAdd) => api.put(`/api/job`,params)
	// 删除
	export const jobDelApi = (params:TS.Del) => api.delete(`/api/job`,params.ids)

// 字典
export const dictApi = (params:De.Dept) => api.get(`/api/dict?page=${params.page}&size=${params.size}&sort=id%2Cdesc`)

// 在线调度
export const timingApi = (params:De.Dept) => api.get(`/api/jobs?page=${params.page}&size=${params.size}&sort=id%2Cdesc`)