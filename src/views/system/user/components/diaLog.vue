<template>
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="600px"
    :before-close="handleClose"
  >
    <el-form
      ref="ruleFormRef"
      :model="tableFrom"
      :rules="rules"
      class="demo-ruleForm"
      :inline="true"
      status-icon
      label-position="right"
      label-width="60px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="tableFrom.username" />
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="tableFrom.phone" />
      </el-form-item>
      <el-form-item label="昵称" prop="nickName">
        <el-input v-model="tableFrom.nickName" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="tableFrom.email" />
      </el-form-item>
      <el-form-item label="部门" prop="dept">
        <el-tree-select
          placeholder="请选择部门"
          v-model="tableFrom.dept"
          lazy
          :load="load"
          :props="props"
          :data="deptList"
          check-strictly
        />
      </el-form-item>
      <el-form-item label="岗位" prop="jobs">
        <el-select
          v-model="tableFrom.jobs"
          multiple
          placeholder="请选择"
          style="width: 240px"
        >
          <el-option
            v-for="item in jobList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="tableFrom.gender">
          <el-radio label="男" value="男" />
          <el-radio label="女" value="女" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="状态" prop="enabled">
        <el-radio-group v-model="tableFrom.enabled">
          <el-radio label="激活" value="true" />
          <el-radio label="禁用" value="false" />
        </el-radio-group>
      </el-form-item>
      <el-form-item style="width: 100%" label="角色" prop="roles">
        <el-select
          v-model="tableFrom.roles"
          multiple
          placeholder="请选择"
          style="width: 465px"
        >
          <el-option
            v-for="item in rolesList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="addFrom"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { ref, reactive, defineProps, defineEmits } from 'vue'
import * as API from '@/api/api'
import * as TS from '@/api/user'
const emit = defineEmits()
const prop = defineProps({
  tableFrom: {
    type: Object,
    default: {}
  }
})

const rules = reactive({})
const dialogVisible = ref(true)
const handleClose = () => {}

// 取消
const close = () => {
  emit('close')
}
// 添加
const addFrom = () => {
  emit('addFrom')
}

const info = reactive({
  page: 0,
  size: 9999,
  enabled: true
})
// 部门
const deptList = ref([])
const getDept = async () => {
  let res = await API.deptApi({ enabled: info.enabled })
  console.log(res, '部门')
  deptList.value = res.data.content
}
getDept()
// 岗位
const jobList = ref([])
const getJob = async () => {
  let res = await API.jobApi(info)
  console.log(res, '岗位')
  jobList.value = res.data.content
}
getJob()
// 角色
const rolesList = ref([])
const getRoles = async () => {
  let res = await API.rolesApi()
  console.log(res, '角色')
  rolesList.value = res.data
}
getRoles()

const props = {
  label: 'label',
  children: 'children',
  isLeaf: 'isLeaf'
}
const changeKey = (e:any)=>{
	console.log(e,'e');

}
let keyId = ref(0)
const load = async (node: Node, resolve: (data: TS.Tree[]) => void) => {
  console.log(node, 'node')
  keyId.value = node.data.id
  if (node.data.id) {
    let res = await API.deptApi({ enabled: info.enabled, pid: node.data.id })
    console.log(res, '子数据')
    const data: TS.Tree[] = res.data.content
    resolve(data)
  }
}
</script>
<style lang="scss" scoped>
.el-form-item {
  width: 44%;
}
</style>
