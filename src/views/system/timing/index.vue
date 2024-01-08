<template>
  <div class="fa">
    <!-- 按钮 -->
    <div class="one">
      <el-input style="width: 14%" placeholder="输入名称或者邮箱搜索" />
      <el-date-picker
        style="width: 20%; margin: 0 10px"
        type="daterange"
        unlink-panels
        range-separator=":"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :shortcuts="shortcuts"
      />
      <el-select
        style="width: 8%"
        class="m-2"
        placeholder="状态"
        size="default"
      >
        <el-option
          v-for="item in statusList"
          :key="item.id"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button
        style="margin-left: 10px; color: white"
        color="#13ce66"
        :icon="Search"
        >搜索</el-button
      >
      <el-button style="color: white" color="#ffba00" :icon="RefreshLeft"
        >重置</el-button
      >
    </div>
    <div class="two">
      <div class="left">
        <el-button style="color: white" color="#1890ff" :icon="Plus"
          >新增</el-button
        >
        <el-button style="color: white" color="#13ce66" :icon="EditPen"
          >修改</el-button
        >
        <el-button style="color: white" color="#ff4949" :icon="Delete"
          >删除 <svg-icon></svg-icon
        ></el-button>
        <ex-cel></ex-cel>
        <el-button style="color: white" color="#909399" :icon="Delete"
          >日志 <svg-icon></svg-icon
        ></el-button>
      </div>
      <div class="right">
        <el-button-group class="ml-4">
          <el-button
            style="border: 1px solid #ccc"
            color="#ffffff"
            :icon="Search"
          />
          <el-button type="default" :icon="Refresh" />
          <el-button type="default" :icon="Grid" />
        </el-button-group>
      </div>
    </div>
    <!-- table表格 -->

    <el-table :data="timingTableData" style="width: 100%; margin-top: 20px">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="id" label="任务ID" />
      <el-table-column prop="jobName" label="任务名称" />
      <el-table-column prop="beanName" label="Bean名称" />
      <el-table-column prop="methodName" label="执行方法" />
      <el-table-column prop="params" label="参数" />
      <el-table-column prop="cronExpression" label="cron表达式" />
      <el-table-column label="状态">
        <template #default="scope">
          <el-tag class="ml-2" type="warning">{{
            scope.row.isPause == true ? '已暂停' : '已激活'
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="描述" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button link type="primary" size="small">编辑</el-button>
          <el-button link type="primary" size="small">执行</el-button>
          <el-button link type="primary" size="small">恢复</el-button>
          <el-button link type="primary" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

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
  </div>
</template>
<script setup lang="ts">
import exCel from '../../../layout/components/exCel.vue'
import {
  Calendar,
  Search,
  RefreshLeft,
  Plus,
  EditPen,
  Delete,
  Download,
  Refresh,
  Grid
} from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
import * as API from '@/api/api'
import * as De from '@/api/dept'
let timingTableData = ref([])

const info = reactive<De.Dept>({
  page: 0,
  size: 10
})
const total = ref(0)
const getTimingData = async () => {
  let res = await API.timingApi(info)
  console.log(res, '调度')
  timingTableData.value = res.data.content
  total.value = res.data.totalElements
}
getTimingData()

const handleSizeChange = (value: number) => {
  info.page = value
  getTimingData()
}
const handleCurrentChange = (value: number) => {
  info.size = value
  getTimingData()
}

const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]
</script>
<style lang="scss" scoped>
.two {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
}
.fa {
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color: #fff;
}
</style>
