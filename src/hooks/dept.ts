import { ref, reactive } from 'vue'
import * as API from '@/api/api'
import * as TS from "@/api/user"
import * as De from "@/api/dept"

export function Dept() {
  const deptTableData = ref([])

	let info = reactive<De.Dept>({
		page:0,
		size:10
	})
	const getDeptTable = async()=>{
		let res:any = await API.deptSPApi(info)
		console.log(res,'getDeptTable');
		deptTableData.value = res.data.content
		console.log(111,'111');
	}
  const statusList = ref<TS.Status[]>([])
  const getStatus = async () => {
    let res = await API.statusApi()
    console.log(res, 'resStatus')
    //@ts-ignore
    statusList.value = res.data.content
  }
	// 渲染子级
  interface User {
    id: number
    name: string
    deptSort: number
		enabled:boolean
    createTime: string
    hasChildren?: boolean
    children?: User[]
  }
  const load = async(
    row: User,
    treeNode: unknown,
    resolve: (date: User[]) => void
  ) => {
		console.log(row,'row');
		let res = await API.deptChildApi({pid:row.id})
		console.log(res,'res');
		// @ts-ignore
		const data:User[] = res.data.content
		resolve(data)
	}
	return {statusList,getStatus,getDeptTable,load,deptTableData  }
}
