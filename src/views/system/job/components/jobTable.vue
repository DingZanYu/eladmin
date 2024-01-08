<template>
  <el-table :data="jobTableData" style="width: 100%">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="name" label="名称" />
    <el-table-column prop="jobSort" label="排序" />
    <el-table-column prop="createTime" label="创建日期" />
    <el-table-column label="状态">
      <template #default="scope">
        <el-switch
          v-model="scope.row.enabled"
          style="--el-switch-on-color: #409eff; --el-switch-off-color: #ff4949"
          :active-value="true"
          :inactive-value="false"
        />
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
          color="#1890ff"
          :icon="Plus"
          @click="editData(scope.row)"
        ></el-button>
        <el-popconfirm
          width="220"
          confirm-button-text="确定"
          cancel-button-text="取消"
          title="确定删除吗？"
          @confirm="delData(scope.row.id)"
        >
          <template #reference>
            <el-button color="#ff4949" :icon="Delete"></el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
import { Job } from '../../../../hooks/job'
import { Plus, Delete } from '@element-plus/icons-vue'
import { defineEmits } from 'vue'
import * as De from '@/api/job'
const { statusList, getStatus, getJobData, jobTableData } = Job()
getJobData()
const emit = defineEmits()
const editData = (row: De.JobList) => {
  emit('editData', row)
}
// 删除
const delData = (id: number) => {
  emit('delData', id)
}
</script>
<style lang="scss" scoped></style>
