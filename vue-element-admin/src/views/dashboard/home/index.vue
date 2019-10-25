<!--
 * @Author: yangdan
 * @Date: 2019-10-15 14:10:17
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-25 13:59:38
 * @Description: 添加描述
 -->
<template>
  <div class="basic-box">
    <!-- 上部分 -->
    <div class="container-box">
      <!-- tab 卡片部分 -->
      <el-row :gutter="20">
        <el-col :span="6">
          <CardItem></CardItem>
        </el-col>
        <el-col :span="6">
          <CardItem></CardItem>
        </el-col>
        <el-col :span="6">
          <CardItem></CardItem>
        </el-col>
        <el-col :span="6">
          <CardItem></CardItem>
        </el-col>
      </el-row>

      <!-- 厂的走量趋势 和所有厂运输排行 -->
      <!-- <div class="dashboard-center">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="title-box">
              <p class="title-p">所有厂运输总量走势数据</p>
              <el-divider></el-divider>
              <el-form :inline="true" :model="formInline" class="search-form">
                <el-form-item>
                  <el-date-picker
                    v-model="formInline.date"
                    type="datetimerange"
                    :picker-options="pickerOptions"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    align="right"
                  ></el-date-picker>
                </el-form-item>
                <el-form-item>
                  <el-select v-model="formInline.factory" placeholder="选择厂">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>

              </el-form>
              <LineChart :chartData="chartData"></LineChart>
            </div>
          </el-col>
          <el-col :span="12">
            <titlieBox title="所有厂运输排行">
              <el-table :data="tableData" style="width: 100%" class="table-border">
                <el-table-column label="排行">
                  <template slot-scope="scope">
                    <img
                      src="http://img5.imgtn.bdimg.com/it/u=3939290468,2706683257&fm=26&gp=0.jpg"
                      style="width:30px;height:30px"
                    />
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="厂编" prop="name"></el-table-column>
                <el-table-column label="分厂" prop="name"></el-table-column>
                <el-table-column label="运输总量/吨" prop="name"></el-table-column>
              </el-table>
            </titlieBox>
          </el-col>
        </el-row>
      </div>-->
      <el-row>
        <el-col :span="24">
          <LineChart :chartData="chartData"></LineChart>
        </el-col>
      </el-row>
    </div>
    <!-- 下部分 -->
    <!-- <div style="margin-top:12px;">
      <div class="container-box">
        <div class="dashboard-footer">
          <el-row>
            <el-col :span="24">
              <titlieBox title="本周数据统计">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <p>订单量</p>
                    <pipeChart></pipeChart>
                  </el-col>
                  <el-col :span="8">
                    <p>运输货物重量</p>
                    <pipeChart></pipeChart>
                  </el-col>
                  <el-col :span="8">
                    <p>货物类型</p>
                    <pipeChart></pipeChart>
                  </el-col>
                </el-row>
              </titlieBox>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>-->
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
        weight: [134, 75, 160, 165,40, 120, 161]
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
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.container-box {
  .dashboard-center,
  .dashboard-footer {
    box-shadow: 0px 2px 20px 0px rgba(36, 139, 242, 0.13);
    border-radius: 10px;
    border: 1px solid rgba(188, 218, 248, 1);
  }
}
.dashboard-center {
  margin-top: 22px;
  padding-bottom: 50px;
}
.dashboard-footer {
  p {
    text-align: center;
    margin-block-start: 0;
    margin-block-end: 0;
    width: 166px;
    height: 48px;
    background: rgba(36, 139, 242, 0.1);
    border-radius: 24px;
    border: 1px solid rgba(36, 139, 242, 1);
    line-height: 48px;
    vertical-align: middle;
    margin: 10px auto;
    color: #248bf2;
  }
}
.search-form {
  display: flex;
  justify-content: space-between;
}
</style>

<style  scoped>
.table-border >>> .el-table th.is-leaf,
.el-table td {
  border: 0 !important;
}
</style>

<style lang="scss" scoped>
.title-box {
  color: #454450;
  font-size: 24px;
  line-height: 28px;
  padding: 0 34px;
  .title-p {
    margin-block-start: 0;
    margin-block-end: 0;
    padding: 15px 0 0 0;
  }
  .el-divider--horizontal {
    margin: 24px 0 10px 0;
  }
}
</style>
