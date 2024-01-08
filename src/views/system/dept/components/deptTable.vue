<template>
  <div class="box">
    <el-table
      :data="deptTableData"
      style="width: 100%"
      row-key="id"
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
			@selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="deptSort" label="排序" />
      <el-table-column prop="createTime" label="创建日期" />
      <el-table-column label="状态">
        <template #default="scope">
          <el-switch
            v-model="scope.row.enabled"
            style="
              --el-switch-on-color: #409eff;
              --el-switch-off-color: #ff4949;
            "
            :active-value="true"
            :inactive-value="false"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button color="#1890ff" :icon="Plus" @click="editData(scope.row)"></el-button>
          <el-popconfirm
            width="220"
            confirm-button-text="确定"
            cancel-button-text="取消"
            title="确定删除吗,如果存在下级节点则一并删除,此操作不能撤销!"
						@confirm="deleteData(scope.row.id)"
          >
            <template #reference>
              <el-button
            color="#ff4949"
            :icon="Delete"
          ></el-button>
            </template>
          </el-popconfirm>

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup lang="ts">
import { Plus, Delete } from '@element-plus/icons-vue'
import { Dept } from '../../../../hooks/dept'
import * as De from '@/api/dept'
import { ref, reactive, defineEmits } from 'vue'
let { getDeptTable, deptTableData, load } = Dept()
const emit = defineEmits()
// 删除
const deleteData = (id: number) => {
  emit('deleteData', id)
}
// 编辑
const editData = (row:De.addDept)=>{
	emit('editData',row)
}
const handleSelectionChange = (item:any)=>{
	emit('handleSelectionChange',item)
}

getDeptTable()
</script>
<style lang="scss" scoped>
.box {
  margin-top: 20px;
}
</style>
