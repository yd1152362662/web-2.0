<!--
 * @Author: yangdan
 * @Date: 2019-09-19 18:20:19
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-30 16:26:01
 * @Description: 添加描述
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
::-webkit-scrollbar {
  width: 8px;
  height: 16px;
  background-color: #f5f5f5;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(63, 154, 196, 0.3);
  background-color: #f5f5f5;
  z-index: -1;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(60, 178, 247, 0.3);
  background-color: rgba(168, 169, 172, 0.8);
}

/* 时间选择样式 */
.el-range-editor.el-input__inner {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(242, 242, 242, 1) 100%
  );
  border-radius: 4px;
  border: 1px solid rgba(204, 204, 204, 1);
  height: 40px;
}

.el-range-editor .el-range-input {
  font-size: 14px;
}

.el-range-editor.el-input__inner input {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(242, 242, 242, 1) 100%
  );
  /* height: 40px; */
}

/* select选择样式 */
.el-select .el-input__inner {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(242, 242, 242, 1) 100%
  );
  height: 40px;
}

/* input的样式 */
.el-input .el-input__inner {
  height: 40px;
  font-size: 14px;
}

/* label的样式 */
.el-form-item--mini .el-form-item__label {
  line-height: 40px;
  font-size: 16px;
  color: #666;
  font-weight: 500;
}
/* 表格的样式 */
.el-table tr {
  background-color: #fff;
  height: 62px;
  font-size: 14px;
  color: #333;
}

.el-table__header-wrapper {
  border-radius: 10px 10px 0px 0px;
}

.el-table {
  width: 1584px;
  height: 735px;
  box-shadow: 0px 3px 20px 0px rgba(51, 51, 51, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(238, 238, 238, 1);
}

/* 按钮的样式 */
.el-button {
  height: 40px;
  font-size: 14px;
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
