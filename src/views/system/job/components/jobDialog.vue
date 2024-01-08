<template>
  <el-dialog
    v-model="dialogVisible"
    :title="ruleForm.id == null ?'新增岗位':'编辑岗位'"
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
      <el-form-item label="岗位名称" prop="name" style="width: 100%">
        <el-input v-model="ruleForm.name" />
      </el-form-item>

      <el-form-item label="岗位排序" prop="jobSort" style="width: 100%">
        <el-input-number
          style="width: 100%"
          v-model="ruleForm.jobSort"
          class="mx-4"
          :min="1"
          :max="999"
          controls-position="right"
        />
      </el-form-item>
      <el-form-item label="状态" prop="enabled" style="margin-left: 30px">
        <el-radio-group v-model="ruleForm.enabled">
          <el-radio :label="true">启用</el-radio>
          <el-radio :label="false">停用</el-radio>
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
import { ref,reactive,defineProps,defineEmits } from "vue"
const props = defineProps({
	ruleForm:{
		type:Object,
		default:{}
	}
})
const emit = defineEmits()

const dialogVisible = ref(true)

// 取消
const close = ()=>{
	emit('close')
}
// 确认
const addDeptList = ()=>{
	emit('addDeptList')
}
const handleClose = ()=>{
	emit('handleClose')
}
const rules = reactive({
  name: [{ required: true, message: '请输入部门', trigger: 'blur' }],
  jobSort: [{ required: true, message: '请输入排序', trigger: 'blur' }]
})


</script>
<style lang="scss" scoped></style>
