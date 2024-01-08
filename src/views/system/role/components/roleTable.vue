<template>
  <div class="box">
    <h4>角色列表</h4>
    <el-table
      ref="multipleTableRef"
      :data="roleTableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column property="name" label="名称" />
      <el-table-column property="dataScope" label="数据权限" />
      <el-table-column property="level" label="角色级别" />
      <el-table-column property="description" label="描述" />
      <el-table-column property="createTime" label="创建日期" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button color="#1890ff" :icon="Plus"></el-button>
          <el-button color="#ff4949" :icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <bottom-pag
		class="pag"
      :total="total"
      :info="info"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    ></bottom-pag>
  </div>
</template>
<script setup lang="ts">
import { Role } from '../../../../hooks/role'
import { Plus, Delete } from '@element-plus/icons-vue'
import bottomPag from '@/layout/components/bottomPag.vue'
const {
  roleTableData,
  getRoleTable,
  handleSelectionChange,
  handleSizeChange,
  handleCurrentChange,
  info,
  total
} = Role()
getRoleTable()
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  border: 1px solid #ccc;
  h4 {
    border-bottom: 1px solid #ccc;
    padding: 15px;
  }
  .el-table {
    padding: 15px;
  }
  .pag {
    padding: 0 15px;
		padding-bottom:15px;
  }
}
</style>
