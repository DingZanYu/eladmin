<template>
  <el-dialog
    v-model="dialogVisible"
    :title="ruleForm.id == null ?'新增部门':'编辑部门'"
    width="500px"
    :before-close="handleClose"
  >
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      class="demo-ruleForm"
      status-icon
      :inline="true"
    >
      <el-form-item label="部门名称" prop="name" style="width: 100%">
        <el-input v-model="ruleForm.name" />
      </el-form-item>

      <el-form-item label="部门排序" prop="deptSort" style="width: 100%">
        <el-input-number
          style="width: 100%"
          v-model="ruleForm.deptSort"
          class="mx-4"
          :min="1"
          :max="999"
          controls-position="right"
        />
      </el-form-item>
      <el-form-item label="顶级部门" prop="isTop" style="margin-left: 10px">
        <el-radio-group v-model="ruleForm.isTop">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="状态" prop="enabled" style="margin-left: 30px">
        <el-radio-group v-model="ruleForm.enabled">
          <el-radio label="true">启用</el-radio>
          <el-radio label="false">停用</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="addDeptList"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { Dept } from '@/hooks/dept'
import { ref, reactive, defineEmits, defineProps } from 'vue'
const dialogVisible = ref(true)
const emit = defineEmits()
const prop = defineProps({
  ruleForm: {
    type: Object,
    default: {}
  }
})

const rules = reactive({
  name: [{ required: true, message: '请输入部门', trigger: 'blur' }],
  deptSort: [{ required: true, message: '请输入排序', trigger: 'blur' }]
})
// 取消关闭弹框
const close = () => {
  emit('close')
}
// 右上角关闭
const handleClose = () => {
  emit('handleClose')
}
// 确认添加
const addDeptList = () => {
  emit('addDeptList')
}
</script>
<style lang="scss" scoped></style>
