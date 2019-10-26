<!--
 * @Author: yangdan
 * @Date: 2019-09-19 18:20:19
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-26 14:47:27
 * @Description: 添加描述
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
::-webkit-scrollbar
{
    width: 8px;
    height: 16px;
    background-color: #F5F5F5;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(63, 154, 196, 0.3);
    background-color: #F5F5F5;
    z-index: -1;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    -webkit-box-shadow: inset 0 0 6px rgba(60, 178, 247, 0.3);
    background-color:rgba(168, 169, 172, 0.8);
}




</style>
