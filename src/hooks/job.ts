import { ref, reactive } from 'vue'
import * as API from '@/api/api'
import * as TS from "@/api/user"
import * as De from "@/api/dept"

export function Job() {
	let info = reactive<De.Dept>({
		page:0,
		size:10
	})

	interface JobData{
		createTime:string
		enabled:boolean
		id:number
		jobSort:number
		name:string
		updateBy:string
		updateTime:string
	}
	let total = ref(0)
	let jobTableData = ref([])
	const getJobData = async()=>{
		let res:any = await API.jobSPApi(info)
		console.log(res,'res');
		jobTableData.value = res.data.content
		total.value = res.data.totalElements
		// console.log(total.value,'total.value');

	}
  const statusList = ref<TS.Status[]>([])
  const getStatus = async () => {
    let res = await API.statusApi()
    console.log(res, 'resStatus')
    //@ts-ignore
    statusList.value = res.data.content
  }
	// 分页
  const handleSizeChange = (value: number) => {
    info.size = value
    getJobData()
  }
  const handleCurrentChange = (value: number) => {
    info.page = value
    getJobData()
  }
	return {statusList,getStatus,getJobData,jobTableData,info,handleSizeChange,handleCurrentChange,total  }
}
