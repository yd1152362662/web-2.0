<!--
 * @Author: yangdan
 * @Date: 2019-11-02 09:19:48
 * @LastEditors: yangdan
 * @LastEditTime: 2019-11-02 17:29:56
 * @Description: 添加描述
 -->
<template>
  <div class="el-vue-amap-echarts">
    <!-- map -->
    <div>
      <el-amap
        vid="amapDemo"
        :center="center"
        :zoom="zoom"
        :events="mapEvents"
        class="amap-echarts"
      >
        <!-- 标记点 -->

        <!-- 车的点 -->
        <el-amap-marker :position="markerPosition" :content="carContent()"></el-amap-marker>
        <!-- 起点 -->
        <el-amap-marker
          :position="polyline.path[0]"
          zIndex="100"
          :content="getMarkerContentStart('发','贵州科特林水泥有限公司')"
        ></el-amap-marker>
        <!-- 终点 -->
        <el-amap-marker
          :position="EndMarkPosition(polyline.path)"
          :content="getMarkerContentStart('收','贵州科特林水泥有限公司')"
        ></el-amap-marker>
        <!-- 事件的markes -->

        <!-- 线路 -->
        <el-amap-polyline
          :editable="polyline.editable"
          :path="polyline.path"
          :events="polyline.events"
          isOutline="true"
          outlineColor="#248BF2"
          strokeColor="#248BF2"
        ></el-amap-polyline>
      </el-amap>
    </div>
    <!-- echarts -->
    <div style="position:relative">
      <div class="echarts-title">车辆重量和速度</div>
      <transition name="list" mode="out-in">
        <p v-if="echartsEvent">我是事件</p>
      </transition>
      <div id="myChart" :style="{width: '100%', height: '300px', paddingTop:'30px'}"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";

export default {
  name: "",
  // echarts配置
  mixins: [resize],
  data() {
    return {
      // map data
      center: [116.478998, 39.998555],
      zoom: 17,
      mapEvents: {
        init(o) {
          o.setMapStyle("amap://styles/1f7efa97a80abba5167638db8d03c397");
        }
      },

      markerPosition: [],
      polyline: {
        path: [
          [116.478935, 39.997761],
          [116.478939, 39.997825],
          [116.478912, 39.998549],
          [116.478912, 39.998549],
          [116.478998, 39.998555],
          [116.478998, 39.998555],
          [116.479282, 39.99856],
          [116.479658, 39.998528],
          [116.480151, 39.998453],
          [116.480784, 39.998302],
          [116.480784, 39.998302],
          [116.481149, 39.998184],
          [116.481573, 39.997997],
          [116.481863, 39.997846],
          [116.482072, 39.997718],
          [116.482362, 39.997718],
          [116.483633, 39.998935],
          [116.48367, 39.998968],
          [116.484648, 39.999861]
        ],
        events: {
          click(e) {
            console.log("e", e);
          },
          end: e => {
            let newPath = e.target
              .getPath()
              .map(point => [point.lng, point.lat]);
            // console.log(newPath);
          }
        },
        editable: false
      },
      echartsEvent: false,

      // echarts data
      orderNumber: [
        100,
        52,
        169,
        134,
        105,
        160,
        55,
        52,
        169,
        134,
        105,
        52,
        169,
        134,
        105,
        52,
        169,
        134,
        105
      ],
      weight: [
        134,
        75,
        160,
        165,
        40,
        120,
        161,
        134,
        75,
        160,
        165,
        40,
        120,
        161,
        134,
        75,
        160,
        165,
        40
      ],
      markPointData: [
        { xAxis: 1, yAxis: 52 },
        { xAxis: 5, yAxis: 160 },
        { xAxis: 10, yAxis: 105 },
        { xAxis: 15, yAxis: 52 }
      ]
    };
  },
  // echarts
  mounted() {
    this.drawLine();
    this.markerPosition = this.polyline.path[0];
    console.log("刷新了");
  },
  methods: {
    // map
    EndMarkPosition(path) {
      return path[path.length - 1];
    },
    getMarkerContentStart(state, name) {
      return `<div class="map-start" style="display:flex;width:400px">
         <p class="map-state">${state}</p>
         <p class="map-companies">${name}</p>
      </div>`;
    },
    carContent() {
      let carIMG = require("../../../assets/amap/car.png");
      return `<div style="left:-36px;position:relative">
                  <img src=${carIMG} style="width:90px;height:80px"/>
                  <div style="margin-top:-35px;text-align:center;color:#fff">贵A1234</div>
               </div>`;
    },
    // echarts
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.on("mouseover", params => {
        if (params.componentType === "markPoint") {
          console.log("markPoint", params);
          this.echartsEvent = true;
        }
      });

      myChart.on("mouseout", params => {
        if (params.componentType === "markPoint") {
          console.log("移出", params);
          //  this.echartsEvent=false;
        }
      });

      myChart.setOption({
        xAxis: {
          data: [
            "10:00",
            "10:30",
            "11:00",
            "11:30",
            "12:00",
            "12:30",
            "13:00",
            "13:30",
            "14:00",
            "14:30",
            "15:00",
            "15:30",
            "16:00",
            "16:30",
            "17:00",
            "17:30",
            "18:30",
            "19:00",
            "19:30"
          ],
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        legend: {
          itemHeight: 10,
          itemWidth: 10,
          textStyle: {
            //图例文字的样式
            color: "#333",
            fontSize: 14
          },
          data: [
            {
              name: "订单",
              icon: "circle"
            },
            {
              name: "吨位",
              icon: "circle"
            }
          ]
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
          padding: [5, 10],
          formatter: params => {
            let index = params[0].dataIndex;
            let path = [
              this.polyline.path[index].lng,
              this.polyline.path[index].lat
            ];
            this.markerPosition = path;
            return `<div>
              <p>${params[0].axisValueLabel}<p>
              <p style="display:flex;align-items:center">
              <span style="display:block;width:6px;height:6px;background-color:#1890FF;border-radius:50%;margin:0 8px 0 0 ;"></span>
              <span>重量：${params[0].data}</span>
              </P>
               <p style="display:flex;align-items:center ">
               <span style="display:block;width:6px;height:6px;background-color:#2FC25B;border-radius:50%;margin:0 8px 0 0 ;"></span>
              <span>速度：${params[1].data}</span>
              </P>
            </div>`;
          }
        },
        yAxis: [
          {
            type: "value",
            name: "单",
            nameLocation: "end",
            show: true,
            splitLine: {
              show: false
            },
            nameTextStyle: {
              padding: [0, 30, 0, 0]
            }
          },
          {
            type: "value",
            name: "吨",
            nameLocation: "end",
            show: true,
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#efefef"],
                width: 1,
                type: "dashed"
              }
            },
            nameTextStyle: {
              padding: [0, 0, 0, 30]
            }
          }
        ],
        series: [
          {
            name: "速度",
            barWidth: 30, // 柱图宽度
            barMaxWidth: 30, // 最大宽度
            barGap: "0", // 柱图间距
            itemStyle: {
              normal: {
                color: "#80D748",
                lineStyle: {
                  color: "#80D748",
                  width: 1
                }
              }
            },
            markPoint: {
              symbolSize: 30, //控制气泡大小
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    color: "#000000" //气泡中字体颜色
                  }
                }
              },
              data: this.markPointData
            },
            type: "line",
            yAxisIndex: 0,
            data: this.orderNumber,
            animationDuration: 2800,
            animationEasing: "cubicInOut"
          },
          {
            name: "重量",
            type: "line",
            barWidth: 30, // 柱图宽度
            barMaxWidth: 30, // 最大宽度
            itemStyle: {
              normal: {
                color: "#1890FF",
                lineStyle: {
                  color: "#1890FF",
                  width: 1
                }
              }
            },
            data: this.weight,
            yAxisIndex: 1,
            animationDuration: 2800,
            animationEasing: "quadraticOut"
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-vue-amap-echarts .amap-echarts {
  height: 441px;
  border-radius: 10px;
  #amapDemo {
    border-radius: 10px;
  }
  >>> .map-state {
    background-color: #248bf2;
    padding: 6px;
    border-radius: 6px 0 0 6px;
  }
  >>> .map-start {
    position: relative;
    top: -31px;
    right: 65px;
  }
  >>> .map-start:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 10px solid;
    border-color: #fff transparent transparent transparent;
    position: absolute;
    top: 46px;
    left: 65px;
  }
  >>> .map-companies {
    background-color: #fff;
    padding: 6px;
    border-radius: 0 6px 6px 0;
  }
}
.echarts-title {
  font-size: 26px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 37px;
  margin: 30px 0 0 24px;
  display: flex;
}

// 动画效果
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}
</style>
