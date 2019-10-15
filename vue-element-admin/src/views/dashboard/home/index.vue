<!--
 * @Author: yangdan
 * @Date: 2019-10-15 14:10:17
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-15 18:00:03
 * @Description: 添加描述
 -->
<template>
  <div class="dashboard-admin">
    <!-- 上部分 -->
    <div class="dashboard-container">
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
      <div class="dashboard-center">
        <el-row :gutter="20">
          <el-col :span="12">
            <titlieBox title="所有厂运输总量走势数据"></titlieBox>
          </el-col>
          <el-col :span="12">
            <titlieBox title="所有厂运输排行">
              <el-table :data="tableData" style="width: 100%" class="table-border">
                <el-table-column label="排行">
                  <template slot-scope="scope">
                    <img
                      src="http://b-ssl.duitang.com/uploads/item/201507/15/20150715221016_KXmdN.jpeg"
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
      </div>
    </div>
    <!-- 下部分 -->
    <div style="margin-top:12px;">
      <div class="dashboard-container">
        <div class="dashboard-footer">
          <el-row>
            <el-col :span="24">
              <titlieBox title="一周数据统计">
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
    </div>
  </div>
</template>

<script>
import CardItem from "./components/CardItem";
import titlieBox from "./components/titleBox";
import pipeChart from "./components/pipeChart";
export default {
  name: "DashboardHome",
  components: {
    CardItem,
    titlieBox,
    pipeChart
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
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.dashboard-admin {
  padding: 0 27px;
  background-color: rgb(240, 242, 245);
  position: relative;
}

.dashboard-container {
  padding: 25px 38px;
  background-color: rgb(255, 255, 255);
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
</style>

<style  scoped>
.table-border >>> .el-table th.is-leaf,
.el-table td {
  border: 0 !important;
}
</style>
