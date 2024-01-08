<template>
	<div id="two" class="item"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue'


onMounted(() => {
	setTimeout(two(), 500)
})



const two = () => {
// type EChartsOption = echarts.EChartsOption;

var chartDom = document.getElementById('two');
var myChart = echarts.init(chartDom);
var option

var data = [
	{
		name: 'Grandpa',
		children: [
			{
				name: 'Uncle Leo',
				value: 15,
				children: [
					{
						name: 'Cousin Jack',
						value: 2
					},
					{
						name: 'Cousin Mary',
						value: 5,
						children: [
							{
								name: 'Jackson',
								value: 2
							}
						]
					},
					{
						name: 'Cousin Ben',
						value: 4
					}
				]
			},
			{
				name: 'Father',
				value: 10,
				children: [
					{
						name: 'Me',
						value: 5
					},
					{
						name: 'Brother Peter',
						value: 1
					}
				]
			}
		]
	},
	{
		name: 'Nancy',
		children: [
			{
				name: 'Uncle Nike',
				children: [
					{
						name: 'Cousin Betty',
						value: 1
					},
					{
						name: 'Cousin Jenny',
						value: 2
					}
				]
			}
		]
	}
];


option = {
	series: {
		type: 'sunburst',
		// emphasis: {
		//     focus: 'ancestor'
		// },
		data: data,
		radius: [0, '90%'],
		label: {
			rotate: 'radial',
			color: '#fff'
		},
	},
	color: ['#2ec7c9', '#2ec7c9', '#b6a2de', '#2ec7c9', '#2ec7c9', '#2ec7c9', '#2ec7c9'],
	textStyle: {
		color: '#fff'
	}
};

option && myChart.setOption(option);

}


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
