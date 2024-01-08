<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from 'echarts'
export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
    // this.__resizeHandler = debounce(() => {
    //   if (this.chart) {
    //     this.chart.resize()
    //   }
    // }, 100)
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
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
        },
        calculable: true,
        series: [
          {
            name: 'WEEKLY WRITE ARTICLES',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: [
              {
                value: 320,
                name: 'Industries',
                itemStyle: {
                  normal: {
                    color: '#2ec7c9',
                  }
                }
              },
              {
                value: 240,
                name: 'Technology',
                itemStyle: {
                  normal: {
                    color: '#b6a2de'
                  }
                }
              },
              {
                value: 149,
                name: 'Forex',
                itemStyle: {
                  normal: {
                    color: '#5ab1ef '
                  }
                }
              },
              {
                value: 100,
                name: 'Gold',
                itemStyle: {
                  normal: {
                    color: '#ffb980'
                  }
                }
              },
              {
                value: 59,
                name: 'Forecasts',
                itemStyle: {
                  normal: {
                    color: '#d87a80'
                  }
                }
              }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
