
<!--
 * @Author: yangdan
 * @Date: 2019-09-19 18:20:19
 * @LastEditors: yangdan
 * @LastEditTime: 2019-09-24 15:14:57
 * @Description: 添加描述
 -->
<template>
  <div class="login-container">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="login-red">
          <el-row :gutter="10">
            <el-col :xs="15" :sm="15" :md="15" :lg="15" :xl="15" class="hidden-md-and-down">
              <el-row>
                <el-col
                  :offset="4"
                  :xs="4"
                  :sm="4"
                  :md="4"
                  :lg="4"
                  :xl="4"
                  class="hidden-md-and-down"
                >
                  <div class="logoBox">
                    <img src="../../assets/login/zgjc.png" class="logoImg" />
                    <p class="logoText">中国建材</p>
                  </div>
                </el-col>
                <el-col
                  :offset="1"
                  :xs="9"
                  :sm="9"
                  :md="9"
                  :lg="9"
                  :xl="9"
                  class="hidden-md-and-down"
                >
                  <div class="comp-text">
                    <p>贵州梵途科技智慧物流</p>
                    <p>创新企业数字化管理，助力企业全面降本增效</p>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4" class="loginShowBox">
              <div class="loginBox">
                <el-tabs
                  v-model="loginType"
                  type="card"
                  @tab-click="handleClick"
                  style="padding-top:30px"
                >
                  <el-tab-pane label="手机登录" name="first">
                    <el-form
                      ref="loginForm"
                      :model="loginForm"
                      :rules="loginRules"
                      class="login-form"
                      autocomplete="on"
                      label-position="left"
                    >
                      <el-form-item prop="username">
                        <span class="svg-container">
                          <svg-icon icon-class="user" />
                        </span>
                        <el-input
                          ref="username"
                          v-model="loginForm.username"
                          placeholder="Username"
                          name="username"
                          type="text"
                          tabindex="1"
                          autocomplete="on"
                        />
                      </el-form-item>

                      <el-tooltip
                        v-model="capsTooltip"
                        content="Caps lock is On"
                        placement="right"
                        manual
                      >
                        <el-form-item prop="password">
                          <span class="svg-container">
                            <svg-icon icon-class="password" />
                          </span>
                          <el-input
                            :key="passwordType"
                            ref="password"
                            v-model="loginForm.password"
                            :type="passwordType"
                            placeholder="Password"
                            name="password"
                            tabindex="2"
                            autocomplete="on"
                            @keyup.native="checkCapslock"
                            @blur="capsTooltip = false"
                            @keyup.enter.native="handleLogin"
                          />
                          <span class="show-pwd" @click="showPwd">
                            <svg-icon
                              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
                            />
                          </span>
                        </el-form-item>
                      </el-tooltip>

                      <el-button
                        :loading="loading"
                        type="primary"
                        style="width:100%;margin-bottom:30px;"
                        @click.native.prevent="handleLogin"
                      >登录</el-button>
                    </el-form>
                  </el-tab-pane>
                  <el-tab-pane label="密码登录" name="second">
                    <el-form
                      ref="loginForm"
                      :model="loginForm"
                      :rules="loginRules"
                      class="login-form"
                      autocomplete="on"
                      label-position="left"
                    >
                      <el-form-item prop="username">
                        <span class="svg-container">
                          <svg-icon icon-class="user" />
                        </span>
                        <el-input
                          ref="username"
                          v-model="loginForm.username"
                          placeholder="Username"
                          name="username"
                          type="text"
                          tabindex="1"
                          autocomplete="on"
                        />
                      </el-form-item>

                      <el-tooltip
                        v-model="capsTooltip"
                        content="Caps lock is On"
                        placement="right"
                        manual
                      >
                        <el-form-item prop="password">
                          <span class="svg-container">
                            <svg-icon icon-class="password" />
                          </span>
                          <el-input
                            :key="passwordType"
                            ref="password"
                            v-model="loginForm.password"
                            :type="passwordType"
                            placeholder="Password"
                            name="password"
                            tabindex="2"
                            autocomplete="on"
                            @keyup.native="checkCapslock"
                            @blur="capsTooltip = false"
                            @keyup.enter.native="handleLogin"
                          />
                          <span class="show-pwd" @click="showPwd">
                            <svg-icon
                              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
                            />
                          </span>
                        </el-form-item>
                      </el-tooltip>

                      <el-button
                        :loading="loading"
                        type="primary"
                        style="width:100%;margin-bottom:30px;"
                        @click.native.prevent="handleLogin"
                      >登录</el-button>
                    </el-form>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-col>
            <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" class="hidden-md-and-down"></el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";

export default {
  name: "Login",
  // components: { SocialSign },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码的长度为6位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "admin",
        password: "111111"
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
      loginType: "first"
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === "") {
      this.$refs.username.focus();
    } else if (this.loginForm.password === "") {
      this.$refs.password.focus();
    }
    // const loginData = {
    //   phoneNum: "14786123077",
    //   loginType: 1,
    //   verifyContent: "132465"
    // };
    // this.$Net.NetPost("/login", loginData, "userLogin").then(result => {
    //   console.log(result);
    //   if (result.resType === 0) {
    //     this.$router.push({
    //       path: this.redirect || "/",
    //       query: this.otherQuery
    //     });
    //     this.loading = false;
    //   }
    // });
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (
          (shiftKey && (key >= "a" && key <= "z")) ||
          (!shiftKey && (key >= "A" && key <= "Z"))
        ) {
          this.capsTooltip = true;
        } else {
          this.capsTooltip = false;
        }
      }
      if (key === "CapsLock" && this.capsTooltip === true) {
        this.capsTooltip = false;
      }
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({
                path: this.redirect || "/",
                query: this.otherQuery
              });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("提交错误");
          return false;
        }
      });
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 0 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
@mixin flex {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.login-container {
  min-height: 100%;
  width: 100%;
  background-image: url("../../assets/login/login-bgimg.jpg");
  background-size: "100% 100%";
  overflow: hidden;

  .login-red {
    width: "100%";
    height: 22vh;
    background-color: rgba(254, 65, 61, 0.7);
    margin-top: 44vh;
    color: #fff;
    .logoBox {
      @include flex;
      .logoImg {
        width: 8vw;
        height: 16vh;
      }
      .logoText {
        text-align: center;
        color: #fff;
        font-size: 35px;
        margin-block-start: 0;
        margin-block-end: 0;
      }
    }
    .comp-text {
      @include flex;
      & p:nth-child(1) {
        font-size: 40px;
        margin-top: 60px;
      }
      & p:nth-child(2) {
        font-size: 14px;
        margin-top: -20px;
      }
    }
    .loginShowBox {
      margin-top: -35px;
    }

    .loginBox {
      // height: 27vh;
      padding-left: 30px;
      padding-right: 30px;
      background-color: #fff;
      width: 100%;
      min-width: 320px;
      border-radius: 0px;
      box-shadow: 0 0 30px #000;
      position: relative;
      >>> input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
        -webkit-text-fill-color: #333 !important;
        height: 26px;
      }
      >>> .el-tabs__nav {
        border: 0;
      }
      >>> .el-tabs__item {
        border: 0;
      }
      >>> .el-tabs__header {
        border: 0;
      }
      >>> .is-top {
        color: rgb(133, 133, 133);
      }
      >>> .is-active {
        color: #1890ff;
      }
      >>> .el-input__inner {
        color: #333;
        caret-color: #1890ff;
      }
      >>> .el-form-item--medium .el-form-item__content {
        line-height: 32px;
        height: 38px;
      }
    }
  }

  .login-form {
    position: relative;
    width: 300px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 0px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  //  屏幕适配
  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  .loginBox {
    left: 40vw;
  }
}

@media (min-width: 1200px) and (max-width: 1725px) {
  .login-container .login-red .logoBox .logoImg {
    width: 10vw;
  }
  .login-container .login-red .logoBox .logoText {
    font-size: 30px;
  }
  .login-container .login-red .comp-text {
    & p:nth-child(1) {
      font-size: 30px;
    }
    & p:nth-child(2) {
      font-size: 12px;
    }
  }
}

@media (min-width: 1200px) and (max-width: 1360px) {
  .login-container .login-red .logoBox .logoImg {
    width: 10vw;
  }
  .login-container .login-red .logoBox .logoText {
    font-size: 25px;
  }
  .login-container .login-red .comp-text {
    & p:nth-child(1) {
      font-size: 25px;
    }
    & p:nth-child(2) {
      font-size: 12px;
    }
  }
}
</style>
