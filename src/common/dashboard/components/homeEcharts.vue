<template>
  <div id="main"></div>
</template>

<script setup lang='ts'>
import * as echarts from "echarts"
import { nextTick } from "vue"
const renderEcharts = () => {
  var chartDom = document.getElementById("main")
  var myChart = echarts.init(chartDom)
  var option
  const colors = ["#5470C6", "#EE6666"]
  option = {
    color: colors,
    tooltip: {
      trigger: "none",
      axisPointer: {
        type: "cross"
      }
    },
    legend: {},
    grid: {
      top: 70,
      bottom: 50
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: colors[1]
          }
        },
        axisPointer: {
          label: {
            formatter: function (params: any) {
              return (
                "Precipitation  " + params.value + (params.seriesData.length ? "：" + params.seriesData[0].data : "")
              )
            }
          }
        },
        // prettier-ignore
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      {
        type: "category",
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: colors[0]
          }
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              return (
                "Precipitation  " + params.value + (params.seriesData.length ? "：" + params.seriesData[0].data : "")
              )
            }
          }
        },
        // prettier-ignore
        data: []
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "expected",
        type: "line",
        xAxisIndex: 1,
        smooth: true,
        emphasis: {
          focus: "series"
        },
         data: [120,80,90,155,160,140,150]
      },
      {
        name: "actual",
        type: "line",
        smooth: true,
        emphasis: {
          focus: "series"
        },
        data: [90,120,160,130,110,160,170]
      }
    ]
  }

  option && myChart.setOption(option)
}
nextTick(()=>{
	renderEcharts()
})
</script>

<style lang="scss" scoped>
#main {
	box-sizing:border-box;
  width: 100%;
  height: 400px;
  border: 1px solid #eee;
  margin-top: 30px;
	background-color:#fff;
}
</style>