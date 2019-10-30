<!--
 * @Author: yangdan
 * @Date: 2019-10-12 15:31:58
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-30 16:33:54
 * @Description: 添加描述
 -->
<template>
  <el-form
    :inline="true"
    :model="value"
    label-position="right"
    :label-width="formConfig.labelWidth"
    :rules="rules"
    size="mini"
  >
    <slot name="formItem" />


        <el-form-item
          v-for="(item) in formConfig.formItemList"
          :key="item.label"
          :label="item.label"
          :prop="item.prop"
        >
          <el-input
            v-if="item.type=='input'"
            v-model="value[item.prop]"
            :disabled="item.disabled"
            :clearable="true"
            :placeholder="item.placeholder"
          ></el-input>

          <el-select
            :clearable="true"
            v-else-if="item.type=='select'"
            v-model="value[item.prop]"
            :disabled="item.disabled"
            :placeholder="item.placeholder"
          >
            <el-option
              v-for="(optItem,index) in item.optList"
              :key="index"
              :label="optItem.label"
              :value="optItem.value"
            ></el-option>
          </el-select>

          <el-date-picker
            :value-format="item.dateFormate"
            v-else-if="item.type=='date'"
            v-model="value[item.prop]"
            :type="item.type"
            :disabled="item.disabled"
            :clearable="true"
            :placeholder="item.label"
          ></el-date-picker>

          <el-date-picker
            v-model="value[item.prop]"
            v-else
            :type="item.type"
            :picker-options="item.pickerOptions"
            :value-format="item.dateFormate"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right"
          ></el-date-picker>
        </el-form-item>


    <!-- 按钮 -->
    <el-button
      v-for="item in formConfig.operate"
      :key="item.id"
      size="small"
      :type="item.type"
      :icon="item.icon"
      @click="item.handleClick"
      style="margin-left:20px;width:100px"
      :class="item.className"
      :plain="item.plain"
    >{{item.name}}</el-button>
  </el-form>
</template>
<script>
export default {
  components: {},
  props: {
    formConfig: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  computed: {},
  methods: {
    setDefaultValue() {
      const formData = { ...this.value };
      // 设置默认值
      this.formConfig.formItemList.forEach(({ key, value }) => {
        if (formData[key] === undefined || formData[key] === null) {
          formData[key] = value;
        }
      });
      this.$emit("input", formData);
    }
  },
  mounted() {
    this.setDefaultValue();
  }
};
</script>

