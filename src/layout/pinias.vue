<template>
  <div>
    姓名:{{ userInfo.name }}
    <p>年龄:{{ userInfo.age }}</p>
    getters:{{ userInfo.newName }}
    <button @click="change">点击</button>
    <button @click="changeTwo">点击</button>
  </div>
</template>
<script setup lang="ts">
import { useInfoStore } from '../store'
import { storeToRefs } from 'pinia'
const userInfo = useInfoStore()
const change = () => {
  // 方式一
  userInfo.age++
  // // 方式二
  // userInfo.$patch({
  // 	name:'小白',
  // 	age:10
  // })
  // 方式三
  // userInfo.$patch((state)=>{
  // 	state.name = '🥔',
  // 	state.age = 5
  // })
  // 方法五
  // userInfo.plusAge()
  // 结构
  // 结构会丢失响应式，为了保持响应式我们使用storeToRefs
  // 变成ref
  // let {name,age} = storeToRefs(useInfoStore()) 
  // age.value++
  // $reset
}
const changeTwo = () => {
  userInfo.$reset()
}
</script>
<style lang="scss" scoped></style>
