<!--
 * @Author: yangdan
 * @Date: 2019-10-25 15:02:04
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-29 17:44:02
 * @Description: 添加描述
 -->
<template>
  <div class="basic-box">
    <div class="amap-page-container">
      <el-amap vid="amapDemo" :center="center" :zoom="zoom" :events="mapEvents" class="amap-demo">
        <!-- 标记点 -->
        <el-amap-marker
          class="selectedMarker"
          v-for="(item, index) in datas"
          :key="index"
          :position="item.lnglat"
          topWhenClick="true"
          :extData="item"
          :content="getMarkerContent(item, 100, 100)"
          :events="markerEvents"
        ></el-amap-marker>
        <!-- 弹窗 -->
        <el-amap-info-window
          v-if="window"
          :position="window.position"
          :visible="window.visible"
          :content="window.content"
          :offset="window.offset"
          isCustom="true"
        ></el-amap-info-window>
      </el-amap>
    </div>
  </div>
</template>

<script>
import { AMapManager, MarkerClusterer } from "vue-amap";
let amapManager = new AMapManager();

export default {
  name: "",
  data() {
    let self = this;
    return {
      zoom: 20,
      center: [121.5253184, 31.21515044],
      marker: {
        position: [121.52014, 31.198862]
      },
      address: "",
      lng: 0,
      lat: 0,
      src:require('../../assets/amap/carSelect.png'),
      src2: require('../../assets/amap/car.png'),
      datas: [
        {
          id: 0,
          title: "1",
          level: "A",
          lnglat: [121.5273285, 31.21515044]
        },
        {
          id: 1,
          title: "2",
          level: "A",
          lnglat: [121.5253184, 31.21515044]
        },
        {
          id: 2,
          title: "3",
          level: "A",
          lnglat: [121.5253184, 31.21315044]
        }
      ],
      windows: [
        {
          position: [121.5273285, 31.21515044],
          content: `<div class="amap-message-window">
                        <ul>
                           <li>
                           <span>姓名：</span>
                           <span>张大宝</span>
                           </li>

                            <li>
                           <span>车牌：</span>
                           <span>贵A15870</span>
                           </li>

                           <li>
                           <span>订单号：</span>
                           <span>468F5D64-3043-4680-AC6E-494C738614E5</span>
                           </li>

                           <li>
                           <span>联系方式：</span>
                           <span>12345678902</span>
                           </li>

                           <li>
                           <span>收货地址：</span>
                           <span>湖南省|怀化市|鹤城区|城北街道 南方品城搅拌站</span>
                           </li>

                            <li>
                           <span>收货时间：</span>
                           <span>2019-10-31</span>
                           </li>

                        </ul>
                         <div class="window-button-div">
                             <span>查看详情</span>
                          </div>
                     </div>`,
          offset: [150, -35],
          visible: false
        },
        {
          position: [121.5253184, 31.21515044],
                   content: `<div class="amap-message-window">
                        <ul>
                           <li>
                           <span>姓名：</span>
                           <span>张大宝</span>
                           </li>

                            <li>
                           <span>车牌：</span>
                           <span>贵A15870</span>
                           </li>

                           <li>
                           <span>订单号：</span>
                           <span>468F5D64-3043-4680-AC6E-494C738614E5</span>
                           </li>

                           <li>
                           <span>联系方式：</span>
                           <span>12345678902</span>
                           </li>

                           <li>
                           <span>收货地址：</span>
                           <span>湖南省|怀化市|鹤城区|城北街道 南方品城搅拌站</span>
                           </li>

                            <li>
                           <span>收货时间：</span>
                           <span>2019-10-31</span>
                           </li>

                        </ul>
                         <div class="window-button-div">
                            <span>查看详情</span>
                          </div>
                     </div>`,
          offset: [150, -35],
          visible: false
        },
        {
          position: [121.5253184, 31.21315044],
                   content: `<div class="amap-message-window">
                        <ul>
                           <li>
                           <span>姓名：</span>
                           <span>张大宝</span>
                           </li>

                            <li>
                           <span>车牌：</span>
                           <span>贵A15870</span>
                           </li>

                           <li>
                           <span>订单号：</span>
                           <span>468F5D64-3043-4680-AC6E-494C738614E5</span>
                           </li>

                           <li>
                           <span>联系方式：</span>
                           <span>12345678902</span>
                           </li>

                           <li>
                           <span>收货地址：</span>
                           <span>湖南省|怀化市|鹤城区|城北街道 南方品城搅拌站</span>
                           </li>

                            <li>
                           <span>收货时间：</span>
                           <span>2019-10-31</span>
                           </li>

                        </ul>
                         <div class="window-button-div">
                            <span>查看详情</span>
                          </div>
                     </div>`,
         offset: [150, -35],
          visible: false
        }
      ],
      window: "",
      clickedMarker: null, // 保存当前点击的Marker
      mapEvents: {
        init(o) {
          // o 为地图组件实例
        },
        complete() {
          const map = self.amapManager.getMap(); // 获取地图组件实例
          // setFitView(overlayList:Array)
          // 根据地图上添加的覆盖物分布情况，
          // 自动缩放地图到合适的视野级别，参数overlayList默认为当前地图上添加的所有覆盖物图层
          map.setFitView();
        }
      },
      markerEvents: {
        click(e) {
          let data = {};
          if (self.clickedMarker === e.target) return; // 点击的是同一个Marker

          data = e.target.getExtData();
          self.windows.forEach(window => {
            window.visible = false;
          });
          self.window = self.windows[data.id];
          self.$nextTick(() => {
            self.window.visible = true;
          });
          if (self.clickedMarker) {
            // 先恢复上次点击的Marker的样式

            self.clickedMarker.setOffset(new AMap.Pixel(-10, -30));
            self.clickedMarker.setContent(
              self.getMarkerContent(self.clickedMarker.getExtData(), 100, 100)
            );
          }
          e.target.setContent(self.getMarkerContent(data, 100, 100, true));
          e.target.setOffset(new AMap.Pixel(-18, -50));
          self.clickedMarker = e.target;
        }
      },
      info: [],
      mapEvents: {
        init(o) {
          o.setMapStyle("amap://styles/1f7efa97a80abba5167638db8d03c397"); //自定义的高德地图的样式，我选的是马卡龙
        }
      }
    };
  },
  mounted() {},
  methods: {
    getMarkerContent(item, width, height, isRotate = false) {
      let srcxxx = isRotate ? this.src : this.src2;
      const content = `<div>
                            <img src=${srcxxx} style="width:${width}px;height:${height}px"/>
                            <div style="margin-top:-40px;text-align:center;color:#fff">贵A1234${item.title}</div>
                      </div>`;
      return content;
    }
  }
};
</script>

<style lang="scss" >
.el-vue-amap-container.amap-demo {
  height: 860px;
  border-radius: 10px;
  #amapDemo {
    border-radius: 10px;
  }
}

.amap-page-container {
  position: relative;
}
.amap-message-window {
  color: #666;
  width: 360px;
  height: 320px;
  background-image: url("../../assets/amap/window.png");
  background-size: 100% 100%;
  ul {
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    padding: 10px 20px 0 40px;
    li {
      padding: 0 0 3px 0;
      span {
        line-height: 25px;
      }
      span:nth-of-type(1) {
        color: #333;
        font-size: 16px;
      }
       span:nth-of-type(2) {
        font-size: 14px;
      }
    }
  }
}

.window-button-div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  span {
    width:100px;
    height:32px;
    background-color:#248BF2;
    line-height:32px;
    text-align:center;
    border-radius:2px;
    color:#fff;
  }
}
</style>

