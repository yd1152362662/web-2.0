<!--
 * @Author: yangdan
 * @Date: 2019-09-19 18:20:19
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-14 17:24:14
 * @Description: 添加描述
 -->
<template>
  <div class="tab-container">
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane
        v-for="item in tabMapOptions"
        :key="item.key"
        :label="item.label"
        :name="item.key"
      >
        <!-- <keep-alive>
          <tab-pane v-if="activeName==item.key" :type="item.key" @create="showCreatedTimes" />
        </keep-alive>-->
        <keep-alive>
          <div>
            <searchForm :formConfig="formConfig" :value="form"></searchForm>
            <MyTable
              class="MyTable"
              :table="dataTable"
              @HandleAnotherOrderFun="HandleAnotherOrder"
              @HandleViewDetailsFun="HandleViewDetails"
            ></MyTable>
          </div>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tabPane from "./components/TabPane";
import MyTable from "./components/MyTable";
import searchForm from "./components/form";

export default {
  name: "Tab",
  components: {
    tabPane,
    MyTable,
    searchForm
  },
  data() {
    return {
      tabMapOptions: [
        { label: "当前货源", key: "当前货源" },
        { label: "最新发布", key: "最新发布" },
        { label: "在途运输", key: "在途运输" },
        { label: "完成订单", key: "完成订单" }
      ],
      activeName: "当前货源",
      createdTimes: 0,
      dataTable: {
        hasOperation: true,
        tr: [
          {
            id: "1",
            label: "第一行",
            prop: "one",
            minWidth: "80",
            show: true
          },
          {
            id: "2",
            label: "第二行",
            prop: "two",
            minWidth: "80",
            show: true
          },
          {
            id: "3",
            label: "订单状态",
            prop: "state",
            minWidth: "80",
            show: 'template',
          }
        ], // 表格行数据
        data: [
          {
            id: 1,
            one: "haha1234",
            two: "two",
            state: 1
          },
          {
            id: 2,
            one: "haha2",
            two: "two",
            state: 2
          },
          {
            id: 3,
            one: "haha2",
            two: "two",
            state: 3
          }
        ], // 表格内容数据
        operation: {
          // 操作功能
          label: "操作", // 操作列的行首文字
          width: "200", // 操作列的宽度
          className: "three", // 操作列的class名
          data: [
            // 操作列数据
            {
              label: "再来一单", // 按钮文字
              Fun: "HandleAnotherOrderFun", // 点击按钮后触发的父组件事件
              size: "mini", // 按钮大小
              id: "1", // 按钮循环组件的key值
              classname: "show" // 按钮的类名
            },
            {
              label: "查看", // 按钮文字
              Fun: "HandleViewDetailsFun", // 点击按钮后触发的父组件事件
              size: "mini", // 按钮大小
              id: "2", // 按钮循环组件的key值
              classname: "show" // 按钮的类名
            }
          ]
        },
        pagination: {
          currentPage: 1,
          total: 40
        }
      },
      formConfig: {
        formItemList: [
          {
            type: "input",
            prop: "Publisher",
            label: "发布人",
            placeholder: "请输入发布人"
          },
          {
            type: "select",
            prop: "FactoryName",
            label: "工厂名称",
            placeholder: "请输入工厂名称",
            optList: [{ label: "12313", value: "1" }]
          },
          {
            type: "datetimerange",
            prop: "datetimerange",
            dateFormate: "yyyy-MM-dd hh:mm:ss",
            label: "发布时间",
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
          },
          {
            type: "input",
            prop: "PlateNumber",
            label: "车牌号",
            placeholder: "请输入车牌号"
          },
          {
            type: "input",
            prop: "OrderNumber",
            label: "订单号",
            placeholder: "请输入订单号"
          },
          {
            type: "input",
            prop: "ShipmentNumber",
            label: "承运单号",
            placeholder: "请输入承运单号"
          }
        ],
        operate: [
          {
            icon: "el-icon-search",
            type: "primary",
            name: "查询",
            handleClick: this.search
          }
        ]
      },
      form: {}
    };
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}`);
    }
  },
  created() {
    // init the default  selected tab
    const tab = this.$route.query.tab;
    if (tab) {
      this.activeName = tab;
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1;
    },
    HandleAnotherOrder() {
      console.log("再来一单");
    },
    HandleViewDetails() {
      console.log("查看详情");
    },
    search() {
      console.log("form", this.form);
    }
  }
};
</script>

<style scoped>
.tab-container {
  margin: 30px;
}
.MyTable {
  width: 100%;
  height: 300px;
}
</style>
