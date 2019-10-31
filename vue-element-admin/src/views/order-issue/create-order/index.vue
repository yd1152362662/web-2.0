<!--
 * @Author: yangdan
 * @Date: 2019-10-31 09:29:33
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-31 17:58:18
 * @Description: 添加描述
 -->
<template>
  <div class="basic-box">
    <div class="container-box">
      <div class="container-box-border">
        <Title :title="'货物信息'">
          <el-form :inline="true" :model="formInline" class="demo-form-inline" style="width:100%">
            <el-row type="flex">
              <el-col
                :xs="24"
                :sm="10"
                :md="18"
                :lg="18"
                style="display:flex; justify-content: space-between;flex-wrap: wrap"
              >
                <el-form-item label="收货人姓名">
                  <el-input v-model="formInline.user" placeholder="请输入货物名称"></el-input>
                </el-form-item>

                <el-form-item label="装货地址">
                  <el-select v-model="formInline.region" placeholder="请选择">
                    <el-option label="pc32.5" value="pc32.5"></el-option>
                    <el-option label="pc42.5" value="pc42.5"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="货物重量">
                  <div style="display:flex;justify-content: space-between;flex-wrap: wrap">
                    <el-input v-model="formInline.user" placeholder="请输入货物名称"></el-input>
                    <el-select v-model="formInline.region" class="weight">
                      <el-option label="吨" value="吨"></el-option>
                      <el-option label="袋" value="袋"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </Title>

        <Title :title="'收货人信息'">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-row>
              <el-col
                :span="17"
                style="display:flex; justify-content: space-between;flex-wrap: wrap"
              >
                <el-form-item label="收货人姓名">
                  <el-input v-model="formInline.user" placeholder="请输入货物名称"></el-input>
                </el-form-item>

                <el-form-item label="装货地址">
                  <el-select v-model="formInline.region" placeholder="请选择">
                    <el-option label="pc32.5" value="pc32.5"></el-option>
                    <el-option label="pc42.5" value="pc42.5"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="收货地址">
                  <el-select v-model="formInline.region" placeholder="请选择">
                    <el-option label="pc32.5" value="pc32.5"></el-option>
                    <el-option label="pc42.5" value="pc42.5"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="17" style="display:flex; justify-content: space-between;">
                <el-form-item label="收货人电话">
                  <el-input v-model="formInline.user" placeholder="请输入货物名称"></el-input>
                </el-form-item>

                <el-form-item label="详细地址">
                  <el-input v-model="formInline.user" placeholder="请输入详细地址"></el-input>
                </el-form-item>

                <el-form-item label="详细地址">
                  <el-input v-model="formInline.user" placeholder="请输入收货详细地址"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </Title>

        <Title :title="'时间要求'">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-row>
              <el-col
                :xs="24"
                :sm="10"
                :md="11"
                :lg="11"
                style="display:flex; justify-content: space-between;flex-wrap: wrap"
              >
                <el-form-item label="装货时间">
                  <el-date-picker v-model="formInline.user" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>

                <el-form-item label="收货时间">
                  <el-date-picker v-model="formInline.user" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </Title>

        <Title :title="'运输信息'" :titleState="1">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-row>
              <el-col
                :xs="24"
                :sm="10"
                :md="17"
                :lg="17"
                style="display:flex; justify-content: space-between;flex-wrap: wrap"
              >
                <el-form-item label="装卸要求">
                  <el-select v-model="formInline.region" placeholder="请选择">
                    <el-option label="pc32.5" value="pc32.5"></el-option>
                    <el-option label="pc42.5" value="pc42.5"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="订单模式">
                  <el-select v-model="formInline.region" placeholder="请选择">
                    <el-option label="pc32.5" value="pc32.5"></el-option>
                    <el-option label="pc42.5" value="pc42.5"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="回单">
                  <el-select v-model="formInline.region" placeholder="请选择">
                    <el-option label="pc32.5" value="pc32.5"></el-option>
                    <el-option label="pc42.5" value="pc42.5"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col
                :xs="24"
                :sm="10"
                :md="11"
                :lg="11"
                style="display:flex; justify-content: space-between;flex-wrap: wrap"
              >
                <el-form-item label="运费">
                  <div style="display:flex">
                    <el-input v-model="formInline.user" placeholder="请输入货物名称"></el-input>
                    <span>元</span>
                  </div>
                </el-form-item>

                <el-form-item label="结算方式">
                  <el-select v-model="formInline.region" placeholder="请选择">
                    <el-option label="pc32.5" value="pc32.5"></el-option>
                    <el-option label="pc42.5" value="pc42.5"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </Title>

        <Title :title="'指派信息'">
          <el-row type="flex" >
            <el-col :xs="24" :sm="10" :md="12" :lg="12">
              <el-form class="demo-form-inline">
                <el-form-item>
                  <div style="display:flex">
                    <el-input v-model="formInline.user" placeholder="请输入货物名称" style="width:264px;"></el-input>
                    <el-button type="primary" style="margin-left:20px">查找</el-button>
                  </div>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :xs="24" :sm="10" :md="12" :lg="12">
              <el-form class="demo-form-inline">
                <el-form-item>
                  <div style="display:flex;align-items: center;">
                    <span>已选择：</span>
                    <el-tag
                      v-for="item in items"
                      :key="item.label"
                      :type="item.type"
                      effect="plain"
                      closable
                      @close="handleClose(item)"
                      style="margin:0 10px"
                    >{{ item.label }}</el-tag>
                  </div>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>

          <el-row>
            <el-col>
              <div style="display:flex;padding:10px 0;align-items: center;">
                <div
                  style="width:264px;margin-left:30px;display:flex;font-size:14px;align-items: center;border:1px solid #DCDFE6;border-radius:4px;    justify-content: space-around"
                >
                  <div style="width:40px;height:40px;border-radius:50%;background-image:url('http://cdn.duitang.com/uploads/item/201510/05/20151005084929_GRTWr.thumb.700_0.png');background-size:40px 40px"></div>
                  <div>
                    <p>司机姓名：张大宝</p>
                    <p>车牌号码：贵DA8888</p>
                  </div>
                  <div>空闲</div>
                </div>
                <el-button type="primary" style="margin-left:20px" plain>选择</el-button>
              </div>
            </el-col>
          </el-row>
        </Title>

        <Title :title="'备注'" :titleState="1" :divder="true" :footer="true">
          <el-row>
            <el-col :span="5">
              <el-input type="textarea" v-model="formInline.region" style="margin:0 0 10px 30px"></el-input>
            </el-col>
          </el-row>
        </Title>

        <div class="Release-div">
          <el-button type="primary" style="width:160px">确认发布</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./components/title";
export default {
  name: "create-order",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      items: [
        { type: "info", label: "标签一" },
        { type: "info", label: "标签二" },
        { type: "info", label: "标签三" },
        { type: "info", label: "标签四" },
        { type: "info", label: "标签五" }
      ]
    };
  },
  components: {
    Title
  },
  methods: {
    handleClose(item) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.container-box-border {
  border: 1px solid #eeeeee;
  box-shadow: 0px 3px 20px 0px rgba(51, 51, 51, 0.1);
  border-radius: 17px;
  .demo-form-inline {
    margin: 40px 30px 20px 30px;
  }
  .item {
    padding-right: 125px;
  }
  >>> .el-input {
    width: 200px;
  }
  .weight >>> .el-input {
    width: 90px;
    margin-left: 20px;
    input {
      padding-left: 30px;
    }
  }
  >>> .el-form-item__label {
    font-size: 16px;
    color: #666;
    font-weight: normal;
  }
  p {
    margin-block-start: 0;
    margin-block-end: 0;
    padding:12px 0;
  }

}
.Release-div {
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
