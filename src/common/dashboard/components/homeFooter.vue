<template>
	<div class="box">
		<towVue id="left"></towVue>
		<threeVue id="center"></threeVue>
		<fourVue id="right"></fourVue>
	</div>
</template>

<script setup lang='ts'>
import fourVue from "../components/four.vue";
import threeVue from "../components/three.vue";
import towVue from "../components/two.vue";
</script>

<style lang="scss" scoped>
.box{
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 20px;
	#left,#center,#right{
		height: 300px;
		border: 1px solid #eee;
		background-color:#fff;
		padding:20px;
		margin-left:30px;
	}
}
</style>