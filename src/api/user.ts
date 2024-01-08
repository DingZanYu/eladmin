// 系统管理 用户管理 左侧树形
export interface TreeId {
  pid?: number
}
export interface Tree {
  name: string
  leaf?: boolean
}

// table表格
export interface TableList {
  page: number
  size: number
  sort?: []
}
interface Dept {
  name: string
}
export interface Table {
  username: string
  nickName: string
  gender: string
  phone: string
  email: string
  dept: Dept
  enabled: boolean
  updateTime: string
}

export interface Status {
  label: string
  value: string
  id: number
}

// 添加

interface childId {
  id: number
}
export interface TableAdd<childId> {
  dept: childId[]
  email: string
  enabled: string
  gender: string
  id: number | null
  jobs: childId[]
  nickName: string
  phone: string
  roles: childId[]
  username: string
}

// 删除
export interface Del {
  ids: number[]
}

// 添加
//  部门
export interface DeptItem {
  enabled: boolean
  pid?: number
}

// 角色
export interface JobItem {
  page: number
  size: number
  enabled: boolean
}
