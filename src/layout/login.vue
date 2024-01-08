<template>
  <div class="par">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      class="demo-ruleForm"
      status-icon
    >
      <h3>ELADMIN 后台管理系统</h3>
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="用户名">
          <template #prefix>
            <svg-icon icon-class="user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          placeholder="密码"
          type="password"
        >
          <template #prefix>
            <svg-icon icon-class="LOCK" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          v-model="ruleForm.code"
          style="width: 220px"
          placeholder="验证码"
        >
          <template #prefix>
            <svg-icon icon-class="yzm" />
          </template>
        </el-input>
        <el-image :src="ruleForm.url"></el-image>
      </el-form-item>
      <el-form-item prop="type">
        <el-checkbox v-model="ruleForm.remberMe" label="记住我" name="type" />
      </el-form-item>
      <el-form-item>
        <el-button
          style="width: 100%"
          type="primary"
          @click="goHome(ruleFormRef)"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import * as API from '@/api/api'
import { ReuleForm } from '@/utils/defind'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { encrypt } from '@/utils/rsaEncrypt'
import type { FormInstance, FormRules } from 'element-plus'
import { ElNotification } from 'element-plus'
import { setToken } from '@/utils/auth'
const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<ReuleForm>({
  username: 'admin',
  password: '123456',
  code: '',
  uuid: '',
  url: '',
  remberMe: false
})
const rules = reactive<FormRules<ReuleForm>>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
  remberMe: [{ required: true, message: '请勾选协议', trigger: 'blur' }]
})

const getCode = async () => {
  let res = await API.codeApi()
  console.log(res, 'res')
  ruleForm.url = res.data.img
  ruleForm.uuid = res.data.uuid
}
getCode()

// 点击登录
const goHome = async (formEl: FormInstance | undefined) => {
  ruleForm.password = encrypt(ruleForm.password)
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      let res = await API.loginApi({
        username: ruleForm.username,
        password: ruleForm.password,
        code: ruleForm.code,
        uuid: ruleForm.uuid
      })
      console.log(res, 'res')
      if (res.status == 200) {
        setToken(res.data.token)
        router.replace('/')
        ElNotification({
          title: '登录',
          message: '登录成功!',
          type: 'success'
        })
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>
<style lang="scss" scoped>
.par {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/1254777.png);
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    text-align: center;
    padding-bottom: 20px;
  }
  .el-form {
    width: 400px;
    padding: 30px;
    border-radius: 7px;
    background-color: #fff;
  }
}
</style>
