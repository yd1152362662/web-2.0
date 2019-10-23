<!--
 * @Author: yangdan
 * @Date: 2019-09-19 18:20:19
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-23 18:41:29
 * @Description: 添加描述
 -->
<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
        class="active-bg-color"
      >
        <sidebar-item
          v-for="route in constantRoutes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";
import { asyncRoutes, constantRoutes, constantRoutes1 } from "@/router";
import ansRouter from "../../../router/modules/charts";

export default {
  components: { SidebarItem, Logo },
  data() {
    return {
      constantRoutes: []
    };
  },
  mounted() {
    let mark = localStorage.getItem("mark");
    let routes = this.$root._router.options.routes
    console.log(this.$root._router.options.routes)
    this.$root._router.options.routes.splice(8,1)
    console.log(this.$root._router.options.routes)
    // this.$root._router.options.routes
    if (parseInt(mark) === 1) {
      this.constantRoutes = constantRoutes;
    } else {
      this.constantRoutes = constantRoutes1;
    }
  },
  computed: {
    ...mapGetters(["permission_routes", "sidebar"]),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>

<style  scoped>
.active-bg-color > .menu-wrapper >>> .is-active {
  background-color: #e0f0ff !important;
  border-left: 4px solid #2aa3f6 !important;
}
</style>
