<!--
 * @Author: yangdan
 * @Date: 2019-11-01 09:42:46
 * @LastEditors: yangdan
 * @LastEditTime: 2019-11-02 17:30:26
 * @Description: 添加描述
 -->
<template>
  <div class="basic-box">
    <div class="content-box">
      <!-- 返回和刷新 -->
      <div class="operation-btn">
        <el-button icon="el-icon-arrow-left">返回</el-button>
        <el-button @click="reloadFun()">刷新</el-button>
      </div>
      <!-- map 和 echarts -->
      <MapEcharts></MapEcharts>
      <!-- 步骤条 -->
      <Steps></Steps>
      <!-- 订单信息 -->
      <OrderMessage></OrderMessage>
      <!-- 事件记录 -->
      <EventLog></EventLog>
    </div>
  </div>
</template>
<script>
import MapEcharts from "./components/map-echarts";
import Steps from "./components/steps";
import OrderMessage from "./components/order-message";
import EventLog from "./components/event-log";

export default {
  name: "",
  inject: ["reload"],
  data() {
    return {

    };
  },
  components: {
    MapEcharts,
    Steps,
    OrderMessage,
    EventLog
  },
  methods: {
    reloadFun() {
      this.reload();

    }
  }
};
</script>

<style lang="scss" scoped>
.content-box {
  background-color: #fff;
  border-radius: 10px;
}
.operation-btn {
  position: fixed;
  top: 100px;
  left: 285px;
  z-index: 100;
}
</style>
