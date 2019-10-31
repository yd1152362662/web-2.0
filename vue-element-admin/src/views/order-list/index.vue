<!--
 * @Author: yangdan
 * @Date: 2019-09-19 18:20:19
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-31 15:30:31
 * @Description: 添加描述
 -->
<template>
  <div class="basic-box">
    <div class="container-box">
      <div>
        <searchForm :formConfig="formConfig" :value="form">
          <el-button slot="operate">重置</el-button>
        </searchForm>
        <MyTable
          class="MyTable"
          :table="dataTable"
          @DetailsFun="HandleViewDetails"
          @SignForFun="SignFor"
          @handleSizeChangeFun="handleSizeChange"
          @handleCurrentChangeFun="handleCurrentChange"
        ></MyTable>

        <!-- 弹框 -->
        <Dialog
          :show.sync="dialogTableVisible"
          title="确认是否签收？"
          @cancel="cancel"
          @OK="OK"
          class="dialogTableVisible"
        >
          <ul>
            <li>
              <span>订单号：</span>
              <span>{{orderNumDialog}}</span>
            </li>
            <li>
              <span>车牌号：</span>
              <span>{{plateNumberDialog}}</span>
            </li>
            <li>
              <span>承运司机：</span>
              <span>{{driverDialog}}</span>
            </li>
          </ul>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<script>
import MyTable from "./components/MyTable";
import searchForm from "./components/form";
import Dialog from "./components/Dialog";

export default {
  name: "Tab",
  components: {
    MyTable,
    searchForm,
    Dialog
  },
  data() {
    return {
      // table的数据和配置
      dataTable: {
        hasOperation: true,
        tr: [
          {
            id: "1",
            label: "订单号",
            prop: "one",
            minWidth: "80",
            className: "haha",
            show: true
          },
          {
            id: "2",
            label: "订单状态",
            prop: "state",
            minWidth: "80",
            show: "template"
          },
          {
            id: "3",
            label: "发布时间",
            prop: "state",
            minWidth: "80",
            show: true
          },
          {
            id: "4",
            label: "发货地址",
            prop: "state",
            minWidth: "80",
            show: true
          },
          {
            id: "5",
            label: "收货地址",
            prop: "state",
            minWidth: "80",
            show: true
          },
          {
            id: "6",
            label: "承运司机",
            prop: "state",
            minWidth: "80",
            show: true
          },
          {
            id: "7",
            label: "车牌号",
            prop: "state",
            minWidth: "80",
            show: true
          },
          {
            id: "8",
            label: "设备安装情况",
            prop: "state",
            minWidth: "80",
            show: true
          }
        ], // 表格行数据
        data: [
          {
            id: 1,
            one: "haha1234",
            two: "two",
            state: 0
          },
          {
            id: 2,
            one: "haha2",
            two: "two",
            state: 1
          },
          {
            id: 3,
            one: "haha2",
            two: "two",
            state: 2
          },
          {
            id: 4,
            one: "haha2",
            two: "two",
            state: 3
          },
          {
            id: 5,
            one: "haha2",
            two: "two",
            state: 4
          },
          {
            id: 6,
            one: "测试哈哈哈哈1",
            two: "two",
            state: 2
          },
          {
            id: 7,
            one: "测试哈哈哈哈2",
            two: "two",
            state: 2
          },
          {
            id: 8,
            one: "测试哈哈哈哈3",
            two: "two",
            state: 2
          },
          {
            id: 9,
            one: "测试哈哈哈哈4",
            two: "two",
            state: 2
          },
          {
            id: 10,
            one: "测试哈哈哈哈5",
            two: "two",
            state: 2
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
              label: "查看", // 按钮文字
              Fun: "DetailsFun", // 点击按钮后触发的父组件事件
              size: "", // 按钮大小
              type: "primary",
              id: "1", // 按钮循环组件的key值
              classname: "DetailsFun" // 按钮的类名
            },
            // 操作列数据
            {
              label: "签收", // 按钮文字
              type: "primary",
              Fun: "SignForFun", // 点击按钮后触发的父组件事件
              size: "", // 按钮大小
              id: "1", // 按钮循环组件的key值
              classname: "SignFor-btn" // 按钮的类名
            }
          ]
        },
        pagination: {
          currentPage: 1,
          size: 10,
          total: 40
        }
      },
      // form的数据和配置
      formConfig: {
        formItemList: [
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
            type: "select",
            prop: "FactoryName1",
            label: "订单状态",
            placeholder: "请选择订单状态",
            optList: [{ label: "12313", value: "1" }]
          },
          {
            type: "input",
            prop: "PlateNumber",
            label: "车牌号",
            placeholder: "请输入车牌号"
          },
          {
            type: "input",
            prop: "PlateNumber1",
            label: "订单号",
            placeholder: "请输入订单号"
          }
        ],
        operate: [
          {
            id: 1,
            type: "primary",
            name: "查询",
            handleClick: this.search
          },
          {
            id: 2,
            name: "重置",
            handleClick: this.search
          }
        ]
      },
      //得到的form的数据
      form: {},
      dialogTableVisible: false,
      orderNumDialog: "",
      plateNumberDialog: "",
      driverDialog: ""
    };
  },
  watch: {},
  created() {},
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1;
    },
    SignFor(a, b) {
      console.log('签收')
      console.log("a", a, "b", b);
      this.orderNumDialog = b.one;
      this.plateNumberDialog = b.state;
      this.driverDialog = b.state;
      this.dialogTableVisible = true;
    },
    HandleViewDetails() {
      console.log("查看详情");

    },
    search() {
      console.log("form", this.form);
    },
    handleSizeChange(val) {
      console.log("每页数val", val);
      this.$set(this.dataTable.pagination, "size", val);
      console.log("this.dataTable.pagination", this.dataTable.pagination);
    },
    handleCurrentChange(val) {
      console.log("当前页数val", val);
      this.$set(this.dataTable.pagination, "currentPage", val);
      console.log("this.dataTable.pagination", this.dataTable.pagination);
    },
    cancel() {
      console.log("取消了");
      this.dialogTableVisible = false;
    },
    OK() {
      console.log("确认了");
      this.dialogTableVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.MyTable {
  padding-top: 15px;
}

/* 弹窗 */
.dialogTableVisible {
  color: #333;
  >>> ul {
    padding-inline-start: 0;
    list-style: none;
    padding: 0 68px;
    li span {
      color: #666;
      font-size: 14px;
      line-height: 30px;
    }
    li span:nth-of-type(1) {
      display: inline-block;
      width: 80px;
      text-align: left;
      font-size: 16px;
      font-weight: 600;
    }
  }
  >>> .el-dialog {
    border-radius: 10px;
  }
  >>> .el-dialog__title {
    font-size: 26px;
    font-weight: 500;
  }
  >>> .el-dialog__body {
    padding: 0;
  }
  >>> .dialog-footer {
    button:nth-of-type(1) {
      margin-right: 50px;
    }
  }
}
</style>

// 屏幕适配
<style >
@media (width: 320px) {
  /* 时间选择样式 */
  .el-range-editor.el-input__inner {
    width: 200px;
  }
}
@media (min-width: 320px) and (max-width: 500px) {
  /* 时间选择样式 */
  .el-range-editor.el-input__inner {
    width: 180px;
  }

  .el-select .el-input__inner,
  .el-input {
    width: 180px;
  }
}
</style>
