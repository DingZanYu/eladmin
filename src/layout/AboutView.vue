<template>
  <div>
    <el-container>
      <!-- <el-aside> -->
        <!-- 左侧菜单 -->
        <left-menu :isCollapse="isCollapse"></left-menu>
      <!-- </el-aside> -->
      <el-container>
        <el-header>
          <el-icon v-show="isCollapse" @click="isCollapse = false"><Fold /></el-icon>
          <el-icon v-show="!isCollapse" @click="isCollapse = true"><Expand /></el-icon>
          <span style="color: #97a7be; margin-top: 0px; margin-left: 10px"
            >首页</span
          >
        </el-header>
        <el-main style="padding: 0">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import leftMenu from './components/leftMenu.vue'
import * as API from '@/api/api'
import { ref, reactive } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'

const isCollapse = ref(false)
</script>
<style lang="scss" scoped>
.el-header {
	width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.el-main {
	width: 100%;
  background-color: #eef0f3;
  height: calc(100vh - 50px);
}
</style>
