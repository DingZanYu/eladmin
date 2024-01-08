export interface Dept {
  page: number
  size: number
}
export interface addDept {
  deptSort: number
  enabled: string
  id: number | null
  isTop: string
  pid: number | null
	name:string
  subCount: number
}
