<template>
  <div class="fa">
    <hea-button></hea-button>
    <div class="box_son">
      <div class="left">
        <role-table></role-table>

      </div>
      <right-check class="right"></right-check>
    </div>
  </div>
</template>
<script setup lang="ts">
import heaButton from './components/heaButton.vue'
import roleTable from './components/roleTable.vue'
import rightCheck from './components/rightCheck.vue'
import { Role } from '../../../hooks/role'
</script>
<style lang="scss" scoped>
.fa {
  width: 100%;
	height: 100%;
  padding: 15px;
  background-color: #fff;
  .box_son {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .left {
      width: 70%;
    }
    .right {
      width: 29%;
    }
  }
}
</style>
