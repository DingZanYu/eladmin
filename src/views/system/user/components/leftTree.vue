<template>
  <el-input
    class="w-50 m-2"
    placeholder="输入部门名称搜索"
    :prefix-icon="Search"
		v-model="userValue"
		@change="changeSearch"
  />
  <el-tree :data="treeList" :props="props" :load="loadNode" @node-click="filterNode" lazy />
</template>
<script setup lang="ts">
import { ref, reactive, defineProps,defineEmits } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
import * as API from '@/api/api'
import * as TS from '@/api/user'
const emit = defineEmits()
const prop = defineProps({
  treeList: {
    type: Array,
    default: []
  }
})
const props = {
  label: 'name',
  children: 'children',
  isLeaf: 'leaf'
}
const loadNode = async (node: Node, resolve: (data: TS.Tree[]) => void) => {
  //@ts-ignore
  if (node.data.id !== undefined) {
		//@ts-ignore
    let res = await API.treeChildApi({ pid: node.data.id })
    // console.log(res, 'pid')
    //@ts-ignore
    const data: TS.Tree[] = res.data.content
    resolve(data)
  }
}
// 左右侧筛选
const filterNode = (node:Node)=>{
	// console.log(1,'1');
	emit('filterNode',node)
}
const userValue = ref('')
const changeSearch = ()=>{
	emit('changeSearch',userValue.value)
}

</script>
<style lang="scss" scoped>
.el-input {
  margin-bottom: 15px;
}
</style>
