<template>
	<div :class="className" class="item" :style="{height:height,width:width}" />
</template>

<script>
// 方式二：直接在组件中引入echarts
import * as echarts from 'echarts';

const animationDuration = 3000
export default {
 data() {
	 return {
		 chart: null
	 }
 },
 mounted() {
	 this.initChart()
	 window.addEventListener('resize', this.__resizeHandler)
 },
 beforeDestroy() {
	 if (!this.chart) {
		 return
	 }
	 window.removeEventListener('resize', this.__resizeHandler)
	 this.chart.dispose()
	 this.chart = null
 },
 methods: {
		 initChart() {
		 this.chart = echarts.init(this.$el, 'macarons')

		 this.chart.setOption({
			 tooltip: {
				 trigger: 'axis',
				 axisPointer: { // 坐标轴指示器，坐标轴触发有效
					 type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				 }
			 },
			 radar: {
				 radius: '66%',
				 center: ['50%', '42%'],
				 splitNumber: 8,
				 splitArea: {
					 areaStyle: {
						 color: 'rgba(127,95,132,.3)',
						 opacity: 1,
						 shadowBlur: 45,
						 shadowColor: 'rgba(0,0,0,.5)',
						 shadowOffsetX: 0,
						 shadowOffsetY: 15
					 }
				 },
				 indicator: [
					 { name: 'Sales', max: 10000 },
					 { name: 'Administration', max: 20000 },
					 { name: 'Information Techology', max: 20000 },
					 { name: 'Customer Support', max: 20000 },
					 { name: 'Development', max: 20000 },
					 { name: 'Marketing', max: 20000 }
				 ]
			 },
			 legend: {
				 left: 'center',
				 bottom: '10',
				 data: ['Allocated Budget', 'Expected Spending', 'Actual Spending']
			 },
			 series: [{
				 type: 'radar',
				 symbolSize: 0,
				 areaStyle: {
					 normal: {
						 shadowBlur: 13,
						 shadowColor: 'rgba(0,0,0,.2)',
						 shadowOffsetX: 0,
						 shadowOffsetY: 10,
						 opacity: 1
					 }
				 },
				 data: [
					 {
						 value: [5000, 7000, 12000, 11000, 15000, 14000],
						 name: 'Allocated Budget'
					 },
					 {
						 value: [4000, 9000, 15000, 15000, 13000, 11000],
						 name: 'Expected Spending'
					 },
					 {
						 value: [5500, 11000, 12000, 15000, 12000, 12000],
						 name: 'Actual Spending'
					 }
				 ],
				 animationDuration: animationDuration
			 }]
		 })
	 }
	 },

};
</script>

<style lang="scss" scope>
	.item {
		width: 32%;
		height: 300px;
		background-color: #fff;
		box-sizing: border-box;
		padding: 20px;
	}
</style>
