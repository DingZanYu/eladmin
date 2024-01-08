<template>
	<div class="threebox">
		<div id="threeone" class="item"></div>
		<div id="threetwo" class="item"></div>
	</div>
</template>

<script  setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue'

onMounted(() => {
	setTimeout(threeone(), 500)
})
onMounted(() => {
	setTimeout(threetwo(), 500)
})

const threeone = () => {
	var chartDom = document.getElementById('threeone');
	var myChart = echarts.init(chartDom);
	var option;

	option = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		legend: {
			data: [
				'直达',
				'营销广告',
				'搜索引擎',
				'邮件营销',
				'联盟广告',
				'视频广告',
				'百度',
				'谷歌',
				'必应',
				'访问来源'
			],
		},
		series: [
			{
				name: '访问来源',
				type: 'pie',
				selectedMode: 'single',
				radius: [0, '30%'],
				label: {
					position: 'inner',
					fontSize: 14
				},
				labelLine: {
					show: false
				},
				data: [
					{ value: 1548, name: '搜索引擎' },
					{ value: 775, name: '营销广告' },
					{ value: 335, name: '直达', selected: true }
				]
			},
			{
				name: '访问来源',
				type: 'pie',
				radius: ['45%', '60%'],
				labelLine: {
					length: 30
				},
				label: {
					formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}:}{c}  {per|{d}%}  ',
					backgroundColor: '#F6F8FC',
					borderColor: '#8C8D8E',
					borderWidth: 1,
					borderRadius: 4,
					rich: {
						a: {
							color: '#red',
							lineHeight: 22,
							align: 'center'
						},
						hr: {
							borderColor: '#8C8D8E',
							width: '100%',
							borderWidth: 1,
							height: 0
						},
						b: {
							color: 'auto',
							fontSize: 12,
							fontWeight: 'bold',
							lineHeight: 33
						},
						per: {
							color: '#fff',
							backgroundColor: '#4C5058',
							padding: [3, 4],
							borderRadius: 4
						}
					}
				},
				data: [
					{ value: 1048, name: '百度' },
					{ value: 335, name: '营销广告' },
					{ value: 310, name: '邮件营销' },
					{ value: 251, name: '谷歌' },
					{ value: 234, name: '联盟广告' },
					{ value: 147, name: '必应' },
					{ value: 135, name: '视频广告' },
					{ value: 102, name: '访问来源' }
				]
			}
		]
	};
	option && myChart.setOption(option);
}
const threetwo = () => {
	var chartDom = document.getElementById('threetwo');
	var myChart = echarts.init(chartDom);
	var option;

	option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'line',
				lineStyle: {
					color: 'rgba(0,0,0,0.2)',
					width: 1,
					type: 'solid'
				}
			}
		},
		legend: {
			data: ['DQ', 'TY', 'SS', 'QG', 'SY', 'DD']
		},
		singleAxis: {
			top: 50,
			bottom: 50,
			axisTick: {},
			axisLabel: {},
			type: 'time',
			axisPointer: {
				animation: true,
				label: {
					show: true
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dashed',
					opacity: 0.1,
					color:'#000'
				}
			}
		},
		series: [
			{
				type: 'themeRiver',
				emphasis: {
					itemStyle: {
						shadowBlur: 20,
						shadowColor: 'rgba(0, 0, 0, 0.8)'
					}
				},
				data: [
					['2015/11/08', 10, 'DQ'],
					['2015/11/09', 15, 'DQ'],
					['2015/11/10', 35, 'DQ'],
					['2015/11/11', 38, 'DQ'],
					['2015/11/12', 22, 'DQ'],
					['2015/11/13', 16, 'DQ'],
					['2015/11/14', 7, 'DQ'],
					['2015/11/15', 2, 'DQ'],
					['2015/11/16', 17, 'DQ'],
					['2015/11/17', 33, 'DQ'],
					['2015/11/18', 40, 'DQ'],
					['2015/11/19', 32, 'DQ'],
					['2015/11/20', 26, 'DQ'],
					['2015/11/21', 35, 'DQ'],
					['2015/11/22', 40, 'DQ'],
					['2015/11/23', 32, 'DQ'],
					['2015/11/24', 26, 'DQ'],
					['2015/11/25', 22, 'DQ'],
					['2015/11/26', 16, 'DQ'],
					['2015/11/27', 22, 'DQ'],
					['2015/11/28', 10, 'DQ'],
					['2015/11/08', 35, 'TY'],
					['2015/11/09', 36, 'TY'],
					['2015/11/10', 37, 'TY'],
					['2015/11/11', 22, 'TY'],
					['2015/11/12', 24, 'TY'],
					['2015/11/13', 26, 'TY'],
					['2015/11/14', 34, 'TY'],
					['2015/11/15', 21, 'TY'],
					['2015/11/16', 18, 'TY'],
					['2015/11/17', 45, 'TY'],
					['2015/11/18', 32, 'TY'],
					['2015/11/19', 35, 'TY'],
					['2015/11/20', 30, 'TY'],
					['2015/11/21', 28, 'TY'],
					['2015/11/22', 27, 'TY'],
					['2015/11/23', 26, 'TY'],
					['2015/11/24', 15, 'TY'],
					['2015/11/25', 30, 'TY'],
					['2015/11/26', 35, 'TY'],
					['2015/11/27', 42, 'TY'],
					['2015/11/28', 42, 'TY'],
					['2015/11/08', 21, 'SS'],
					['2015/11/09', 25, 'SS'],
					['2015/11/10', 27, 'SS'],
					['2015/11/11', 23, 'SS'],
					['2015/11/12', 24, 'SS'],
					['2015/11/13', 21, 'SS'],
					['2015/11/14', 35, 'SS'],
					['2015/11/15', 39, 'SS'],
					['2015/11/16', 40, 'SS'],
					['2015/11/17', 36, 'SS'],
					['2015/11/18', 33, 'SS'],
					['2015/11/19', 43, 'SS'],
					['2015/11/20', 40, 'SS'],
					['2015/11/21', 34, 'SS'],
					['2015/11/22', 28, 'SS'],
					['2015/11/23', 26, 'SS'],
					['2015/11/24', 37, 'SS'],
					['2015/11/25', 41, 'SS'],
					['2015/11/26', 46, 'SS'],
					['2015/11/27', 47, 'SS'],
					['2015/11/28', 41, 'SS'],
					['2015/11/08', 10, 'QG'],
					['2015/11/09', 15, 'QG'],
					['2015/11/10', 35, 'QG'],
					['2015/11/11', 38, 'QG'],
					['2015/11/12', 22, 'QG'],
					['2015/11/13', 16, 'QG'],
					['2015/11/14', 7, 'QG'],
					['2015/11/15', 2, 'QG'],
					['2015/11/16', 17, 'QG'],
					['2015/11/17', 33, 'QG'],
					['2015/11/18', 40, 'QG'],
					['2015/11/19', 32, 'QG'],
					['2015/11/20', 26, 'QG'],
					['2015/11/21', 35, 'QG'],
					['2015/11/22', 40, 'QG'],
					['2015/11/23', 32, 'QG'],
					['2015/11/24', 26, 'QG'],
					['2015/11/25', 22, 'QG'],
					['2015/11/26', 16, 'QG'],
					['2015/11/27', 22, 'QG'],
					['2015/11/28', 10, 'QG'],
					['2015/11/08', 10, 'SY'],
					['2015/11/09', 15, 'SY'],
					['2015/11/10', 35, 'SY'],
					['2015/11/11', 38, 'SY'],
					['2015/11/12', 22, 'SY'],
					['2015/11/13', 16, 'SY'],
					['2015/11/14', 7, 'SY'],
					['2015/11/15', 2, 'SY'],
					['2015/11/16', 17, 'SY'],
					['2015/11/17', 33, 'SY'],
					['2015/11/18', 40, 'SY'],
					['2015/11/19', 32, 'SY'],
					['2015/11/20', 26, 'SY'],
					['2015/11/21', 35, 'SY'],
					['2015/11/22', 4, 'SY'],
					['2015/11/23', 32, 'SY'],
					['2015/11/24', 26, 'SY'],
					['2015/11/25', 22, 'SY'],
					['2015/11/26', 16, 'SY'],
					['2015/11/27', 22, 'SY'],
					['2015/11/28', 10, 'SY'],
					['2015/11/08', 10, 'DD'],
					['2015/11/09', 15, 'DD'],
					['2015/11/10', 35, 'DD'],
					['2015/11/11', 38, 'DD'],
					['2015/11/12', 22, 'DD'],
					['2015/11/13', 16, 'DD'],
					['2015/11/14', 7, 'DD'],
					['2015/11/15', 2, 'DD'],
					['2015/11/16', 17, 'DD'],
					['2015/11/17', 33, 'DD'],
					['2015/11/18', 4, 'DD'],
					['2015/11/19', 32, 'DD'],
					['2015/11/20', 26, 'DD'],
					['2015/11/21', 35, 'DD'],
					['2015/11/22', 40, 'DD'],
					['2015/11/23', 32, 'DD'],
					['2015/11/24', 26, 'DD'],
					['2015/11/25', 22, 'DD'],
					['2015/11/26', 16, 'DD'],
					['2015/11/27', 22, 'DD'],
					['2015/11/28', 10, 'DD']
				]
			}
		]
	};

	option && myChart.setOption(option);

}

</script>

<style lang="scss" scope>
.threebox {
	width: 100%;
	display: flex;
	justify-content: space-between;
	background-color: #F0F2F5;


	.item {
		width: 49%;
		height: 500px;
		background-color: #fff;
		box-sizing: border-box;
		padding: 20px;
	}
}
</style>
