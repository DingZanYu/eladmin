<template>
  <div class="box">
    <el-table
      :data="menuTableData"
      style="width: 100%"
      row-key="id"
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="title" label="菜单标题" />
      <el-table-column prop="icon" label="图标" />
      <el-table-column prop="menuSort" label="排序" />
      <el-table-column prop="" label="权限标识" />
      <el-table-column prop="" label="组件路径" />
      <el-table-column prop="iFrame" label="外链" width="60">
        <template #default="scope">
          {{ scope.row.iFrame ? '是' : '否' }}
        </template>
      </el-table-column>
      <el-table-column prop="hidden" label="缓存" width="60">
        <template #default="scope">
          {{ scope.row.hidden ? '是' : '否' }}
        </template>
      </el-table-column>
      <el-table-column prop="leaf" label="可见" width="60">
        <template #default="scope">
          {{ scope.row.leaf ? '是' : '否' }}
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建日期" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button color="#1890ff" :icon="Plus"></el-button>
          <el-button color="#ff4949" :icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup lang="ts">
import { Plus, Delete } from '@element-plus/icons-vue'
import { Menu } from '../../../../hooks/menu'

let { menuTableData, getMenuList, load } = Menu()
getMenuList()
</script>
<style lang="scss" scoped>
.box {
  margin-top: 20px;
}
</style>
