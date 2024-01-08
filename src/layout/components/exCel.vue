<template>
  <el-button
    style="color: white"
    color="#ffba00"
    :icon="Download"
    @click="outExcel"
    >导出</el-button
  >
</template>
<script setup lang="ts">
import {
  Download,
} from '@element-plus/icons-vue'
import { defineEmits } from 'vue';
const emit = defineEmits()
const outExcel = ()=>{
	emit('outExcel')
}
</script>
<style lang="scss" scoped></style>
