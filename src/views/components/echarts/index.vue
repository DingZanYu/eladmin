<template>
	<div id="chirt">
		<one></one>
		<div class="chartbox">
			<two></two>
			<three></three>
			<four></four>
		</div>
		<div class="chartbox">
			<five></five>
		</div>
		<div class="chartbox">
			<six></six>
		</div>
		<div class="chartbox">
			<seven></seven>
		</div>
		<div class="chartbox">
			<night></night>
		</div>
	</div>
</template>

<script setup>
import one from "./components/one.vue"
import two from "./components/two.vue"
import three from "./components/three.vue"
import four from "./components/four.vue"
import five from "./components/five.vue"
import six from "./components/six.vue"
import seven from "./components/seven.vue"
import night from "./components/night.vue"

// import * as echarts from 'echarts';
// import { onMounted } from 'vue'

// onMounted(() => {
// 	setTimeout(one(), 500)
// })

// const one = () => {

// }
</script>

<style lang="scss"  scope>
#chirt {
	width: 100%;
	background-color: #F0F2F5;
	.chartbox {
		margin: 20px 0;
		display: flex;
		justify-content: space-between;
	}
}
</style>
