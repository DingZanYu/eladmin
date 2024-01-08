import { ref, reactive } from 'vue'
import * as API from '@/api/api'
export function Menu() {
  const menuTableData = ref([])
  const info = reactive({
    page: 0,
    size: 10
  })
  const getMenuList = async () => {
    let res = await API.menuSPApi(info)
    console.log(res, '菜单管理')
    // @ts-ignore
    menuTableData.value = res.data.content
  }
  // 渲染子级
  interface User {
    id: number
    title: string
    icon: string
    menuSort: number
    iFrame: boolean
    hidden: boolean
    leaf: boolean
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
		let res = await API.menuChildApi({pid:row.id})
		console.log(res,'res');
		// @ts-ignore
		const data:User[] = res.data.content
		resolve(data)

	}

  return { menuTableData, getMenuList, load }
}
