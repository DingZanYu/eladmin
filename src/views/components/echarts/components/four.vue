<template>
	<div id="three" class="item"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue'


onMounted(() => {
	setTimeout(three(), 500)
})

const three = () => {
	var chartDom = document.getElementById('three');
	var myChart = echarts.init(chartDom);
	var option;

	option = {
		toolbox: {
			feature: {
					// 刷新
					restore:{
						iconStyle:{
							// 图标颜色
							borderColor:'#2EC6C9'
						}
					},
				// 保存图片
				saveAsImage: {
					iconStyle:{
							// 图标颜色
						borderColor:'#2EC6C9'
						}
				},
			},

		},
		series: [
			{
				type: 'gauge',
				axisLine: {
					lineStyle: {
						width: 10,
						color: [
							[0.3, '#67e0e3'],
							[0.7, '#37a2da'],
							[1, '#fd666d']
						]
					}
				},
				pointer: {
					itemStyle: {
						color: 'auto'
					}
				},
				axisTick: {
					distance: 0,
					length: 5,
					lineStyle: {
						color: 'auto',
						width: 1
					}
				},

				splitLine: {
					distance: -35,
					length: 20,
					lineStyle: {
						color: '#fff',
						width: 5
					}
				},
				axisLabel: {
					color: 'inherit',
					distance: 40,
					fontSize: 12
				},
				detail: {
					valueAnimation: true,
					formatter: '{value} km/h',
					color: 'inherit',
					fontSize: 22,
				},
				data: [
					{
						value: +(Math.random() * 100).toFixed(1)
					}
				]
			}
		]
	};
	setInterval(function () {
		myChart.setOption({
			series: [
				{
					data: [
						{
							value: +(Math.random() * 100).toFixed(1)
						}
					]
				}
			]
		});
	}, 2000);

	option && myChart.setOption(option);

}

const again=()=>{
	three()
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
.shuaxin{
	position: absolute;
	empty-cells: 30px;
	z-index: 99;
}
</style>
