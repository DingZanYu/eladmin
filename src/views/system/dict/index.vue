<template>
  <div class="box">
    <section>
      <!-- 按钮 -->
      <div class="one">
        <el-input style="width: 30%" placeholder="输入名称或者邮箱搜索" />
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
      <el-table ref="multipleTableRef" :data="tableData" style="width: 100%;margin-top:20px">
        <el-table-column type="selection" width="55" />
        <el-table-column property="name" label="名称" />
        <el-table-column property="description" label="描述" />
        <el-table-column label="操作" width="200" fixed="right">
          <template #default="scope">
            <el-button color="#1890ff" :icon="Plus"></el-button>
            <el-button color="#ff4949" :icon="Delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <br />
      <el-pagination
        v-model:current-page="info.page"
        v-model:page-size="info.size"
        :page-sizes="[10, 20, 30, 40]"
        layout="total, prev, pager, next,sizes"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </section>

    <div class="dict-detail">
      <div class="top">字典详情</div>
      <div class="detail">
        <p>点击字典查看详情</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Search,
  RefreshLeft,
  Plus,
  Delete,
  EditPen,
  Download
} from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import * as API from '../../../api/api'
import exCel from '@/layout/components/exCel.vue'
const info = reactive({
  page: 0,
  size: 10
})
const tableData = ref([])
let total = ref<number>(0)
const dictTableData = async () => {
  let res: any = await API.dictApi(info)
  console.log(res)
  tableData.value = res.data.content
  total.value = res.data.totalElements
}
dictTableData()
const handleSizeChange = (value: number) => {
  info.page = value
  dictTableData()
}
const handleCurrentChange = (value: number) => {
  info.size = value
  dictTableData()
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color: #fff;
}
section {
  width: 48%;
  box-shadow: 0 0 10px #eee;
  padding: 20px;

  .top {
    .el-input {
      width: 200px;
      margin-right: 10px;
    }
  }
  .btns {
    margin: 20px 0;
  }
}
.dict-detail {
  width: 48%;
  box-shadow: 0 0 10px #eee;
  > .top {
    border-bottom: 1px solid #eee;
    padding: 20px 0;
    text-indent: 20px;
    font-size: 20px;
  }
  .detail {
    padding: 20px;
    > p {
      display: inline-block;
      border-left: 5px solid #ccc;
      padding: 15px;
    }
  }
}
.two {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
}
</style>
