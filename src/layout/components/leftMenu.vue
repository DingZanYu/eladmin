<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#304156"
      class="el-menu-vertical-demo"
      default-active="2"
      :collapse="isCollapse"
      text-color="#fff"
      router
    >
      <h4 style="padding: 15px; text-align: center; color: white" v-show="!isCollapse">
        ELADMIN-后台管理
      </h4>
      <el-menu-item index="/dashboard">
        <el-icon><setting /></el-icon>
        <span>首页</span>
      </el-menu-item>

      <el-menu-item
        v-for="(item, index) in menuList"
        :key="index"
        v-show="!item.redirect"
        :index="item.children[0].path"
      >
        <el-icon><setting /></el-icon>
        <span>{{ item.children[0].meta.title }}</span>
      </el-menu-item>

      <el-sub-menu
        v-for="(item, index) in menuList"
        :key="index"
        :index="item.path"
        v-show="item.redirect"
      > 
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{ item.name }}</span>
        </template>
        <!-- <el-sub-menu
          v-for="(ele, index_a) in item.children"
          :key="index_a"
          :index="ele.path"
        > -->
        <!-- <template v-show="ele.children" #title>{{ ele.meta.title }}</template> -->
        <el-menu-item
          v-for="(ele, index_a) in item.children"
          :key="index_a"
          :index="item.path + '/' + ele.path"
          >{{ ele.meta.title }}</el-menu-item
        >
      </el-sub-menu>
      <!-- </el-sub-menu> -->
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { ref, reactive } from 'vue'
import * as API from '@/api/api'
const props = defineProps({
  isCollapse: {
    type: Boolean
  }
})
// console.log(props.menuList, 'menuList')

const menuList = ref([])
const getMenuList = async () => {
  let res = await API.menuApi()
  console.log(res, 'res')
  //@ts-ignore
  menuList.value = res.data
}
getMenuList()
</script>
<style lang="scss">
.el-menu {
	height: 100%;
  background-color: #304156;
  border-radius: none;
}
</style>
