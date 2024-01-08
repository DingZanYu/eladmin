<template>
  <div class="fa"></div>
  <el-table
    style="width: 100%"
    :data="tableList"
    @selection-change="handleSelectionChange"
  >
    <el-table-column :selectable="selectableFunc" type="selection" width="55" />
    <el-table-column prop="username" label="用户名" />
    <el-table-column prop="nickName" label="昵称" />
    <el-table-column prop="gender" label="性别" />
    <el-table-column prop="phone" label="电话" />
    <el-table-column prop="email" label="邮箱" width="170px" />
    <el-table-column prop="dept.name" label="部门" />
    <el-table-column prop="enabled" label="状态">
      <template #default="scope">
        <el-switch
          :disabled="scope.row.id == 1 ? true : false"
          v-model="scope.row.enabled"
          style="--el-switch-on-color: #409eff; --el-switch-off-color: #f56c6c"
          :active-value="true"
          :inactive-value="false"
        />
      </template>
    </el-table-column>
    <el-table-column prop="updateTime" label="日期" width="170px" />
    <el-table-column fixed="right" label="操作" width="130px">
      <template #default="scope">
        <el-button color="#1890ff" :icon="Plus"></el-button>
        <el-button
          color="#ff4949"
          :disabled="scope.row.id == 1 ? true : false"
          :icon="Delete"
					@click="delList(scope.row.id)"
        ></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script setup lang="ts">
import { ref, reactive, defineProps, defineEmits } from 'vue'
import { Plus, Delete } from '@element-plus/icons-vue'
const prop = defineProps({
  tableList: {
    type: Array,
    default: []
  }
})
const emit = defineEmits()

const handleSelectionChange = (e: any) => {
  console.log(e, 'e')
  emit('handleSelectionChange', e)
}
const delList = (id:number)=>{
	emit('delList',id)
}
const selectableFunc = (row: any, index: number) => {
  return row.id != 1
}
</script>
<style lang="scss" scoped>
.fa {
  margin-top: 15px;
  width: 100%;
}
</style>
