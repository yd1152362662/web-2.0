<!--
 * @Author: yangdan
 * @Date: 2019-10-15 14:10:17
 * @LastEditors: yangdan
 * @LastEditTime: 2019-11-13 11:02:34
 * @Description: 添加描述
 -->
<template>
  <div class="basic-box">
    <!-- 上部分 -->
    <div class="container-box">
      <!-- tab 卡片部分 -->
      <el-row :gutter="24">
        <p>总订单</p>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <CardItem
            backgroundColor="#248AF2"
            boxShadow="0px 6px 16px 0px rgba(36,138,242,0.4)"
            titleLeft="发布订单"
            titleRight="已完成订单"
          ></CardItem>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <CardItem
            backgroundColor="#FECC41"
            boxShadow="0px 6px 16px 0px rgba(254,204,65,0.4)"
            titleLeft="待签收订单"
            titleRight="运输中订单"
          ></CardItem>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <CardItem
            backgroundColor="#FE3A2E"
            boxShadow="0px 6px 16px 0px rgba(254,58,46,0.4)"
            titleLeft="已完成订单"
            titleRight="已完成订单"
            :Expand="Expand"
            ExpandTitieState="1"
          ></CardItem>
        </el-col>
      </el-row>

      <el-row :gutter="24">
        <p style="padding-top:10px">今日订单</p>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <CardItem
            textColor="#454450"
            bordercolor="1px solid #BCDAF8"
            titleLeft="发布订单"
            titleRight="未接单订单"
          ></CardItem>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <CardItem
            textColor="#454450"
            bordercolor="1px solid #BCDAF8"
            titleLeft="待签收订单"
            titleRight="已完成订单"
          ></CardItem>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <CardItem
            textColor="#454450"
            bordercolor="1px solid #BCDAF8"
            titleLeft="运输中订单"
            titleRight="运输中订单"
            :Expand="Expand"
            ExpandTitieState="1"
          ></CardItem>
        </el-col>
      </el-row>

      <el-row>
        <p style="padding-top:10px">近7天发布订单对比</p>
        <el-col :span="24">
          <LineChart :chartData="chartData"></LineChart>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import CardItem from "./components/CardItem";
import titlieBox from "./components/titleBox";
import pipeChart from "./components/pipeChart";
import LineChart from "./components/LineChart";

export default {
  name: "DashboardHome",
  components: {
    CardItem,
    titlieBox,
    pipeChart,
    LineChart
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      chartData: {
        orderNumber: [100, 52, 169, 134, 105, 160, 55],
        weight: [134, 75, 160, 165, 40, 120, 161]
      },
      formInline: {
        date: "",
        factory: ""
      },
      date: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      Expand: true
    };
  },
  methods: {},
  mounted() {
    this.$loading.show();

    setTimeout(() => {
      this.$loading.hide();
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>



