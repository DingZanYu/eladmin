<template>
  <div>
		<h3>富文本</h3>
    <quill-editor
		 style="height: 600px;"
      v-model:value="state.content"
      :options="state.editorOption"
      :disabled="state.disabled"
    />
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
const state = reactive({
  content: '<p>更多帮助请查看官方文档</p>',
  _content: '',
  editorOption: {
    placeholder: '请输入内容~',
    modules: {
      // toolbars: [
      // custom toolbars options
      // will override the default configuration
      // ],
      // other moudle options here
      // otherMoudle: {}
    }
    // more options
  },
  disabled: false
})
</script>
<style lang="scss" scoped>
div{
	width: 100%;
	padding: 20px;
	height: 100%;
	background-color: #fff;
	h3{
		margin-bottom: 20px;
	}
}
</style>
