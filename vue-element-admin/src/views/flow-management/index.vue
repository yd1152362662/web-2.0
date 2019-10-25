<!--
 * @Author: yangdan
 * @Date: 2019-10-25 15:02:04
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-25 15:33:36
 * @Description: 添加描述
 -->
<template>
  <div class="basic-box">
    <div class="container-box">
      <div class="basic-border">
        <div class="amap-page-container">
          <el-amap vid="amapDemo" :center="center" :zoom="zoom" class="amap-demo">
            <el-amap-marker
              :position="marker.position"
              :events="marker.events"
              :visible="marker.visible"
              :draggable="marker.draggable"
            ></el-amap-marker>
          </el-amap>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.el-vue-amap-container.amap-demo {
  height: 700px;
}
.search-box {
  position: absolute;
  top: 25px;
  left: 20px;
}
.amap-page-container {
  position: relative;
}
</style>
<script>
module.exports = {
  data: function() {
    let self = this;
    return {
      zoom: 20,
      center: [121.52014, 31.198862],
      marker: {
        position: [121.52014, 31.198862]
      },
      address: "",
      lng: 0,
      lat: 0
    };
  },
  methods: {

  }
};
</script>

