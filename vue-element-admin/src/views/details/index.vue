<!--
 * @Author: yangdan
 * @Date: 2019-11-01 09:42:46
 * @LastEditors: yangdan
 * @LastEditTime: 2019-11-01 17:16:01
 * @Description: 添加描述
 -->
<template>
  <div class="basic-box">
    <div class="content-box">
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
import Steps from "./components/steps";
import OrderMessage from "./components/order-message";
import EventLog from "./components/event-log";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    Steps,
    OrderMessage,
    EventLog
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.content-box {
  background-color: #fff;
  padding: 20px 0;
  border-radius: 10px;
}
</style>
