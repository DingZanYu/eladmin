<template>
  <div class="fa">
    <job-button @addDialog="addDialog"></job-button>
    <!-- table表格 -->
    <job-table @editData="editData" @delData="delData"></job-table>
    <!-- 弹框 -->
    <job-dialog
      :ruleForm="ruleForm"
      v-if="isShowAble"
      @addDeptList="addDeptList"
      @close="close"
      @handleClose="handleClose"
    ></job-dialog>
    <!-- 分页 -->
    <bottom-pag
      :total="total"
      :info="info"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    ></bottom-pag>
  </div>
</template>
<script setup lang="ts">
import jobButton from './components/jobButton.vue'
import jobTable from './components/jobTable.vue'
import jobDialog from './components/jobDialog.vue'
import bottomPag from '@/layout/components/bottomPag.vue'
import { ref, reactive, defineProps, defineEmits } from 'vue'
import { Job } from '@/hooks/job'
import * as API from '@/api/api'
import * as De from '@/api/job'
import { ru } from 'element-plus/es/locale'
const {
  statusList,
  getStatus,
  getJobData,
  jobTableData,
  info,
  total,
  handleSizeChange,
  handleCurrentChange
} = Job()

const isShowAble = ref(false)

let ruleForm = reactive<De.JobList>({
  name: '',
  jobSort: 999,
  enabled: true,
  id: null,
  createTime: '',
  updateBy: '',
  updateTime: ''
})

// 打开添加弹框
const addDialog = async () => {
  isShowAble.value = true
}
// 打开编辑框
const editData = (row: De.JobList) => {
  ruleForm = { ...row }
  console.log(ruleForm, 'row')
  // ruleForm.name = row.name
  // ruleForm.jobSort = row.jobSort
  // ruleForm.enabled = row.enabled
  // ruleForm.id = row.id
  isShowAble.value = true
}
const addDeptList = async () => {
  if (ruleForm.id !== null) {
    // 编辑
    let res = await API.jobEditApi(ruleForm)
    console.log(res, '编辑')
  } else {
    // 添加
    let res = await API.jobAddApi(ruleForm)
    console.log(res, '添加')
  }
  getJobData()
  isShowAble.value = false
}
const close = () => {
  isShowAble.value = false
}
const handleClose = () => {
  isShowAble.value = false
}

// 删除
const delData = async (id: number) => {
  let res = await API.jobDelApi({ ids: [id] })
  console.log(res, 'res')
  getJobData()
}
</script>
<style lang="scss" scoped>
.fa {
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color: #fff;
}
</style>
