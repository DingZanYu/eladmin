import { ref, reactive, onMounted } from 'vue'
import * as TS from '@/api/user'
import * as API from '@/api/api'
export function Role() {
  let roleTableData = ref([])
  let info = reactive({
    page: 0,
    size: 10
  })
  let total = ref(0)
  // 获取表格数据
	// 搜素
  const nameValue = ref('')
  const getRoleTable = async () => {
    const res = await API.roleApi({
      blurry: nameValue.value,
      page: info.page,
      size: info.size
    })
    console.log(res, '角色数据')
    //@ts-ignore
    roleTableData.value = res.data.content
    // @ts-ignore
    total.value = res.data.totalElements
  }
  // 获取表格选中状态
  //@ts-ignore
	const roleDataCheck = ref([])
	let idArr = ref<number[]>([])
  const handleSelectionChange = (e:any) => {
    roleDataCheck.value = e
  console.log(roleDataCheck.value, 'roleDataCheck')
  e.forEach((i: { id: number }) => {
    let index = idArr.value.find((item) => {
      return item == i.id
    })
    if (!index) {
      idArr.value.push(i.id)
    }
  })
  }
  // 分页
  const handleSizeChange = (value: number) => {
    info.size = value
    getRoleTable()
  }
  const handleCurrentChange = (value: number) => {
    info.page = value
    getRoleTable()
  }
  // 获取右侧菜单分配
  let buildList = ref([])
  const pids = ref(0)
  const getBuild = async () => {
    let res = await API.lazyApi({ pid: pids.value })
    console.log(res, '右侧菜单')
    //@ts-ignore
    buildList.value = res.data
  }
  const props = {
    label: 'title',
    children: 'children'
  }

  const loadNode = async (node: Node, resolve: (data: TS.Tree[]) => void) => {
    console.log(node, 'node')
    //@ts-ignore
    if (node.data.id !== undefined) {
      //@ts-ignore
      let res = await API.lazyApi({ pid: node.data.id })
      //@ts-ignore
      const data: TS.Tree[] = res.data
      // console.log(res, '子数据')

      resolve(data)
    }
  }
  return {
    roleTableData,
    info,
    total,
    buildList,
    props,
    nameValue,
		roleDataCheck,
    getRoleTable,
    handleSelectionChange,
    handleSizeChange,
    handleCurrentChange,
    getBuild,
    loadNode,
  }
}
