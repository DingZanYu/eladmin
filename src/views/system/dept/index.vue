<template>
  <div class="fa">
    <dept-button @openDialog="openDialog" ></dept-button>
    <dept-table
      @deleteData="deleteData"
      @editData="editData"
      @handleSelectionChange="handleSelectionChange"
    ></dept-table>
    <dept-dialog
      v-if="isShowVisible"
      @close="close"
      @addDeptList="addDeptList"
      @handleClose="handleClose"
      :ruleForm="ruleForm"
    ></dept-dialog>
  </div>
</template>
<script setup lang="ts">
import deptButton from './components/deptButton.vue'
import deptTable from './components/deptTable.vue'
import deptDialog from './components/deptDialog.vue'
import { Dept } from '@/hooks/dept'
import { ref, reactive } from 'vue'
import * as De from '@/api/dept'
import * as API from '@/api/api'
let { getDeptTable, deptTableData, load } = Dept()
// let dept = Dept()
let ruleForm = reactive<De.addDept>({
  deptSort: 999,
  enabled: 'false',
  id: null,
  isTop: '1',
  name: '',
  pid: null,
  subCount: 0
})
// 添加
const isShowVisible = ref(false)
// 打开弹框
const openDialog = () => {
  isShowVisible.value = true
}
// 确认添加
const addDeptList = async () => {
  if (ruleForm.id != null) {
    let res = await API.deptEditApi(ruleForm)
    console.log(res, '编辑')
    ruleForm = {
      deptSort: 999,
      enabled: 'false',
      id: null,
      isTop: '1',
      name: '',
      pid: null,
      subCount: 0
    }
  } else {
    let res = await API.deptAddApi(ruleForm)
    console.log(res, '添加')
  }
  isShowVisible.value = false
  getDeptTable()
}
// 编辑
const editData = async (row: any) => {
  // let res = await API.superApi({ids:[row.id]})
  // console.log(res,'编辑');
  isShowVisible.value = true
  ruleForm = { ...row }
}
// 取消关闭弹框
const close = () => {
	ruleForm = {
      deptSort: 999,
      enabled: 'false',
      id: null,
      isTop: '1',
      name: '',
      pid: null,
      subCount: 0
    }
  isShowVisible.value = false
}
// 右上角关闭
const handleClose = () => {
	ruleForm = {
      deptSort: 999,
      enabled: 'false',
      id: null,
      isTop: '1',
      name: '',
      pid: null,
      subCount: 0
    }
  isShowVisible.value = false
}
// 删除
const deleteData = async (id: number) => {
  let res = await API.deptDelApi({ ids: [id] })
  getDeptTable()
  console.log(res, 'res')
}
// 选中的节点
const handleSelectionChange = (item: any) => {}
</script>
<style lang="scss" scoped>
.fa {
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color: #fff;
}
</style>
