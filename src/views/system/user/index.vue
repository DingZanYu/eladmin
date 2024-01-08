<template>
  <div class="par">
    <div class="left">
      <left-tree
        :treeList="treeList"
        @filterNode="filterNode"
        @changeSearch="changeSearch"
      ></left-tree>
    </div>
    <div class="right">
      <top-button
        @outExcel="outExcel"
        @resetPassword="resetPassword"
        :idArr="idArr"
        :tableE="tableE"
        @showAdd="showAdd"
        @deleRemove="deleRemove"
        :tableList="tableList"
      ></top-button>
      <mid-table
        @handleSelectionChange="handleSelectionChange"
        @delList="delList"
        :tableList="tableList"
      ></mid-table>
      <dia-log v-if="showIsAble" :tableFrom="tableFrom"></dia-log>
      <bottom-pag :total="total" :info="info"></bottom-pag>
    </div>
  </div>
</template>
<script setup lang="ts">
import leftTree from './components/leftTree.vue'
import topButton from './components/topButton.vue'
import midTable from './components/midTable.vue'
import bottomPag from '@/layout/components/bottomPag.vue'
import diaLog from './components/diaLog.vue'
import * as API from '@/api/api'
import * as TS from '@/api/user'
import { ref, reactive } from 'vue'
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'

// 获取左侧树形数据
const treeList = ref([])
const tableFrom = reactive({
  dept: [],
  email: '',
  enabled: 'false',
  gender: '男',
  id: null,
  jobs: [],
  nickName: '',
  phone: '',
  roles: [],
  username: ''
})
const total = ref(0)
// const id = ref(0)
const getTree = async () => {
  let res = await API.treeApi()
  console.log(res, 'res')
  treeList.value = res.data.content
}
getTree()

// 左侧搜素
const changeSearch = async (value: string) => {
  let res = await API.treeSearchApi({ name: value })
  console.log(res, 'res')
  treeList.value = res.data.content
}

// 左右侧联动筛选
const filterNode = async (node: Node) => {
  console.log(node, 'node')

  let res = await API.filterApi({ deptId: node.id })
  console.log(res, 'res')

  tableList.value = res.data.content
}

// 获取table表格数据
const tableList = ref<TS.Table[]>([])
const info = reactive<TS.TableList>({
  page: 0,
  size: 10
})
const getTable = async () => {
  let res = await API.tableApi(info)
  // console.log(res, 'table数据')
  tableList.value = res.data.content
  total.value = res.data.totalElements
  // console.log(total.value, 'total')
}
getTable()
const outExcel = () => {
  getTable()
}
// 选中节点数据
let idArr = ref<number[]>([])
const tableE = ref([])
//@ts-ignore
const handleSelectionChange = (e) => {
  tableE.value = e
  console.log(tableE.value, 'tableE')

  e.forEach((i) => {
    let index = idArr.value.find((item) => {
      return item == i.id
    })
    if (!index) {
      idArr.value.push(i.id)
    }
  })
  console.log(idArr.value, '重置')
}
// 删除节点
let idArrTwo = ref<number[]>([])
const delList = async (id: number) => {
  let index = idArrTwo.value.find((item) => {
    return item == id
  })
  if (!index) {
    idArrTwo.value.push(id)
  }
  let res = await API.deleteApi({ ids: idArrTwo.value })
  console.log(res, 'res')
}
// 选中删除
const deleRemove = async () => {
  ElMessageBox.confirm(
    `你选中了${tableE.value.length}位用户,确认删除用户吗?`,
    'Warning',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  )
    .then(async () => {
      let res = await API.deleteApi({ ids: idArr.value })
      getTable()
      ElNotification({
        title: '删除成功!',
        type: 'success'
      })
    })
    .catch(() => {
      // ElMessage({
      //   type: 'info',
      //   message: 'Delete canceled',
      // })
    })
}
// 重置密码
const resetPassword = async () => {
  ElMessageBox.confirm(
    `你选中了${tableE.value.length}位用户,确认重置用户的新密码吗?`,
    'Warning',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  )
    .then(async () => {
      let res = await API.passwordApi(idArr.value)
      console.log(res, 'res')
      ElNotification({
        title: '重置成功,用户新密码:123456',
        type: 'success'
      })
    })
    .catch(() => {
      // ElMessage({
      //   type: 'info',
      //   message: 'Delete canceled',
      // })
    })
}
// 打开新增弹框
const showIsAble = ref(false)
const showAdd = () => {
  showIsAble.value = true
}
</script>
<style lang="scss" scoped>
.par {
  display: flex;
  height: calc(100vh - 50px);
}
.left {
  width: 15%;
  height: 100%;
  background-color: #fff;
  padding: 20px 15px;
}
.right {
  width: 85%;
  background-color: #fff;
  padding: 20px 5px;
}
</style>
