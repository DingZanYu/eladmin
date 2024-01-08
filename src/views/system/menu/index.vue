<template>
  <div class="fa">
    <menu-button></menu-button>
    <menu-table class="table"></menu-table>
	</div>
</template>
<script setup lang="ts">
import menuButton from './components/menuButton.vue'
import menuTable from './components/menuTable.vue'
</script>
<style lang="scss" scoped>
.fa {
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color: #fff;
}
</style>
