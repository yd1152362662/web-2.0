<!--
 * @Author: yangdan
 * @Date: 2019-09-19 18:20:19
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-19 11:49:57
 * @Description: 添加描述
 -->
<template>
  <div class="basic-box">
    <div class="container-box">
      <div class="basic-border">
        <el-cascader
          clearable
          :options="options2"
          :props="props"
          @active-item-change="handleItemChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      options2: [
        {
          label: '江苏',
          value: '1007',
          children: []
        },
        {
          label: '浙江',
          value: '1008',
          children: []
        }
      ],
      props: {
        value: 'value',
        children: 'children'
      }
    };
  },
  watch: {},
  created() {},
  mounted() {
    this.$store
      .dispatch('test/testAddress', { parentCode: -1 })
      .then((res) => {
        console.log('res-succes', res);
      })
      .catch((res) => {
        console.log('fail-succes', res);
      });
  },
  methods: {
    handleItemChange(val) {
      console.log('active item:', val);
      setTimeout(_ => {
        if (val.indexOf('1007') > -1 && !this.options2[0].children.length) {
          this.options2[0].children = [
            {
              label: '南京'
            }
          ];
        } else if (
          val.indexOf('1008') > -1 &&
          !this.options2[1].children.length
        ) {
          this.options2[1].children = [
            {
              label: '杭州'
            }
          ];
        }
      }, 300);
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
