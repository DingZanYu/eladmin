<template>
	<div class="fourbox">
		<div id="fourone" class="item"></div>
		<div id="fourtwo" class="item"></div>
	</div>
</template>

<script  setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue'

onMounted(() => {
	setTimeout(fourone(), 500)
})
onMounted(() => {
	setTimeout(fourtwo(), 500)
})

const fourone = () => {
	var chartDom = document.getElementById('fourone');
	var myChart = echarts.init(chartDom);
	var option;

	const axisData = ['周一', '周二', '周三', '很长很长的周四', '周五', '周六', '周日'];
	const data = axisData.map(function (item, i) {
		return Math.round(Math.random() * 1000 * (i + 1));
	});
	const links = data.map(function (item, i) {
		return {
			source: i,
			target: i + 1
		};
	});
	links.pop();
	option = {
		color:'#D87A80',
		title: {
			text: '笛卡尔坐标系上的 Graph',
			textStyle: {
				color: '#2a9cd5'
			}
		},
		tooltip: {},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: axisData,
			axisLine: {
				lineStyle: {
					color: '#2a9cd5'
				}
			}
		},
		yAxis: {
			type: 'value',
			boundaryGap: false,
			data: axisData,
			axisLine: {
				lineStyle: {
					color: '#2a9cd5'
				}
			}
		},
		series: [
			{
				type: 'graph',
				layout: 'none',
				coordinateSystem: 'cartesian2d',
				symbolSize: 40,
				label: {
					show: true,
					color:'#fff'
				},
				edgeSymbol: ['circle', 'arrow'],
				edgeSymbolSize: [4, 10],
				data: data,
				links: links,
				lineStyle: {
					color: '#2f4554'
				}
			}
		]
	};

	option && myChart.setOption(option);

}
const fourtwo = () => {
	var chartDom = document.getElementById('fourtwo');
	var myChart = echarts.init(chartDom);
	var option;

	option = {
		series: {
			type: 'sankey',
			layout: 'none',
			emphasis: {
				focus: 'adjacency'
			},
			data: [
				{
					name: 'a'
				},
				{
					name: 'b'
				},
				{
					name: 'a1'
				},
				{
					name: 'a2'
				},
				{
					name: 'b1'
				},
				{
					name: 'c'
				}
			],
			links: [
				{
					source: 'a',
					target: 'a1',
					value: 5
				},
				{
					source: 'a',
					target: 'a2',
					value: 3
				},
				{
					source: 'b',
					target: 'b1',
					value: 8
				},
				{
					source: 'a',
					target: 'b1',
					value: 3
				},
				{
					source: 'b1',
					target: 'a1',
					value: 1
				},
				{
					source: 'b1',
					target: 'c',
					value: 2
				}
			]
		}
	};

	option && myChart.setOption(option);
}

</script>

<style lang="scss" scope>
.fourbox {
	width: 100%;
	display: flex;
	justify-content: space-between;
	background-color: #F0F2F5;


	.item {
		width: 49%;
		height: 300px;
		background-color: #fff;
		box-sizing: border-box;
		padding: 20px;
	}
}
</style>
