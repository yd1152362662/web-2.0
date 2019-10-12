<!--
 * @Author: yangdan
 * @Date: 2019-09-19 18:20:19
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-12 16:22:26
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
            <MyTable class="MyTable" :table="dataTable" @handleSubmit="haha"></MyTable>
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
          }
        ], // 表格行数据
        data: [
          {
            id: 1,
            one: "haha1234",
            two: "two"
          },
          {
            id: 2,
            one: "haha2",
            two: "two"
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
              label: "编辑", // 按钮文字
              Fun: "handleSubmit", // 点击按钮后触发的父组件事件
              size: "mini", // 按钮大小
              id: "1", // 按钮循环组件的key值
              classname: "show" // 按钮的类名
            },
            {
              label: "删除", // 按钮文字
              Fun: "handleSubmit", // 点击按钮后触发的父组件事件
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
            type: "date",
            prop: "startTime",
            dateFormate: "yyyy-MM-dd",
            label: "发布时间",
            placeholder: "请选择初始时间"
          },
          {
            type: "datetimerange",
            prop: "datetimerange",
            dateFormate: "yyyy-MM-dd hh:mm:ss",
            label: "承诺停用时间",
            placeholder: "请选择结束时间",
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
            type: "select",
            prop: "direction",
            label: "话务方向",
            placeholder: "话务方向",
            optList: []
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
      this.$router.push(`${this.$route.path}?tab=${val}`);
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
    haha() {
      console.log("object");
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
