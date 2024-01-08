export interface JobAdd{
	enabled:boolean
	id:number | null
	jobSort:number
	name:string
}
export interface JobList{
	createTime:string
	enabled:boolean
	id:number | null
	jobSort:number
	name:string
	updateBy:string
	updateTime:string
}