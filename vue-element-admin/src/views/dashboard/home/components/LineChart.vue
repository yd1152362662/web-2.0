<!--
 * @Author: yangdan
 * @Date: 2019-10-16 10:04:43
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-25 16:28:25
 * @Description: 添加描述
 -->
<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "350px"
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el);
      this.setOptions(this.chartData);
    },
    setOptions({ orderNumber,weight } = {}) {
      this.chart.setOption({
        xAxis: {
          data: ["1天", "2天", "3天", "4天", "5天", "6天", "7天"],
          // boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: "订单",
            barWidth: 30, // 柱图宽度
            barMaxWidth: 30, // 最大宽度
            barGap: "0", //柱图间距
            itemStyle: {
              normal: {
                // label: { show: true },
                color: "#FE3A2E",
                lineStyle: {
                  color: "#FE3A2E"
                }
              }
            },
            smooth: true,
            type: "line",
            data: orderNumber,
            animationDuration: 2800,
            animationEasing: "cubicInOut"
          },
          {
            name: "吨位",
            smooth: true,
            type: "line",
            barWidth: 30, // 柱图宽度
            barMaxWidth: 30, // 最大宽度
            itemStyle: {
              normal: {
                color: "#248AF2",
                lineStyle: {
                  color: "#248AF2",
                  width: 2
                },
                // areaStyle: {
                //   color: "#f3f8ff"
                // }
              }
            },
            data: weight,
            animationDuration: 2800,
            animationEasing: "quadraticOut"
          }
        ]
      });
    }
  }
};
</script>
