<template>
  <el-pagination
    style="margin-top: 10px"
    v-model:current-page="info.page"
    v-model:page-size="info.size"
    :page-sizes="[10, 20, 30, 40]"
    layout="total, prev, pager, next,sizes"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>
<script setup lang="ts">
import { ref, reactive, defineProps, defineEmits } from 'vue'
const props = defineProps({
  total: Number,
  info: {
    type: Object,
    default: {}
  }
})
const emit = defineEmits()
const handleSizeChange = (value: number) => {
  emit('handleSizeChange', value)
}
const handleCurrentChange = (value: number) => {
  emit('handleCurrentChange', value)
}
</script>
<style lang="scss" scoped></style>
