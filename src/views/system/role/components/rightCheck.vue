<template>
  <div class="box">
    <div class="one">
      <h4>菜单分配</h4>
      <div class="right">
        <el-button type="primary">保存</el-button>
      </div>
    </div>
    <div class="two">
      <el-tree
        :props="props"
        :load="loadNode"
				:data="buildList"
        lazy
        show-checkbox
        @check-change="handleCheckChange"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { Role } from '../../../../hooks/role'
let { getBuild, buildList,props,loadNode  } = Role()
getBuild()
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  border: 1px solid #ccc;
  .one {
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }
}
</style>
