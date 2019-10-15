<!--
 * @Author: yangdan
 * @Date: 2019-10-15 14:15:54
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-15 15:39:28
 * @Description: 添加描述
 -->
<template>
  <el-card class="card-item-box">
    <div class="card-item">
      <p class="card-item-title">已完成的总订单</p>
      <p class="card-item-number">
        <span>132454</span>
        <span>/单</span>
      </p>
      <el-divider></el-divider>
      <p class="card-item-footer">
        <span>今日已完成数量</span>
        <span>0</span>
        <span>/单</span>
      </p>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.card-item-box {
  box-shadow: 0px 2px 20px 0px rgba(36, 139, 242, 0.13);
  border-radius: 10px;
  border: 1px solid rgba(188, 218, 248, 1);
  color: #0c0c0c;
  font-size: 16px;
  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
  .card-item {
    padding:0 14px;
  }
  .card-item-number {
    display: flex;
    align-items: baseline;
    padding-top: 15px;
    span:nth-of-type(1) {
      font-size: 40px;
      font-weight: bold;
    }
  }
  .card-item-footer {
    span:nth-of-type(2) {
      color: #3189d1;
      font-weight: bold;
    }
  }
}
</style>
