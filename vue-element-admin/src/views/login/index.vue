
<!--
 * @Author: yangdan
 * @Date: 2019-09-19 18:20:19
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-26 18:11:59
 * @Description: 添加描述
 -->
<template>
  <div class="login-container">
    <!-- <div class="login-red"> -->
    <el-row>
      <!-- 登录 tabs -->
      <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="loginBox">
          <div class="login-title-logo"></div>
          <el-tabs v-model="loginForm.type" @tab-click="handleClick" class="login-tabs-box">
            <el-tab-pane label="手机登录" name="1">
              <el-form
                ref="loginFormPhone"
                :model="loginForm"
                :rules="loginRules"
                class="login-form"
                autocomplete="on"
                label-position="left"
              >
                <el-form-item prop="phone">
                  <el-input
                    ref="phone"
                    v-model="loginForm.phone"
                    placeholder="手机号码"
                    name="phone"
                    type="text"
                    autocomplete="on"
                  />
                </el-form-item>

                <el-form-item prop="verificationCode">
                  <el-input
                    ref="verificationCode"
                    v-model="loginForm.verificationCode"
                    placeholder="验证码"
                    name="verificationCode"
                    autocomplete="on"
                    @keyup.enter.native="handleLogin"
                  />
                  <el-button
                    class="verificationCode"
                    type="primary"
                    :disabled="CodeDisabled"
                    @click="HandleVerificationCode"
                  >{{VerificationCodeText}}</el-button>
                </el-form-item>

                <div class="login-button-div">
                  <el-button
                    :loading="loading"
                    type="primary"
                    @click.native.prevent="handleLogin"
                    class="login-button"
                  >登录</el-button>
                </div>
              </el-form>
            </el-tab-pane>

            <el-tab-pane label="密码登录" name="2">
              <el-form
                ref="loginFormPassword"
                :model="loginForm"
                :rules="loginRules"
                class="login-form"
                autocomplete="on"
                label-position="left"
              >
                <el-form-item prop="username">
                  <el-input
                    ref="username"
                    v-model="loginForm.username"
                    placeholder="用户名"
                    name="username"
                    type="text"
                    autocomplete="on"
                  />
                </el-form-item>

                <el-form-item prop="password">
                  <el-input
                    :key="passwordType"
                    ref="password"
                    v-model="loginForm.password"
                    :type="passwordType"
                    placeholder="密码"
                    name="password"
                    autocomplete="on"
                    @keyup.enter.native="handleLogin"
                  />
                  <span class="show-pwd" @click="showPwd">
                    <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                  </span>
                </el-form-item>

                <div class="login-button-div">
                  <el-button
                    :loading="loading"
                    type="primary"
                    @click.native.prevent="handleLogin"
                    class="login-button"
                  >登录</el-button>
                </div>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { validUsername } from "@/utils/validate";

export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
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

    const validatePhone = (rule, value, callback) => {
      if (value.length !== 11) {
        callback(new Error("手机号的长度为11位"));
      } else {
        callback();
      }
    };

    const validateVerificationCode = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("验证码的长度为6位"));
      } else {
        callback();
      }
    };

    return {
      loginForm: {
        username: "",
        password: "",
        phone: "",
        verificationCode: "",
        type: "1"
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ],
        phone: [{ required: true, trigger: "blur", validator: validatePhone }],
        verificationCode: [
          {
            required: true,
            trigger: "blur",
            validator: validateVerificationCode
          }
        ]
      },
      passwordType: "password",
      loading: false,
      redirect: undefined,
      otherQuery: {},
      VerificationCodeText: "获取验证码",
      CodeDisabled: false,
      time: 4
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query;
        console.log("query", query);
        if (query) {
          this.redirect = "";
          this.otherQuery = "";
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

    // this.$store
    //   .dispatch('user/login', this.loginForm)
    //   .then(res => {
    //     console.log('reslogin', res);
    //     // this.$router.push({
    //     //   path: this.redirect || "/"
    //     // });

    //     this.loading = false;
    //   })
    //   .catch(() => {
    //     this.loading = false;
    //   });
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    // 点击是否显示密码
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
    // 点击登录
    handleLogin() {
      console.log("this.form", this.loginForm);
      if (parseInt(this.loginForm.type) === 1) {
        this.$refs.loginFormPhone.validate(valid => {
          console.log("valid", valid);
          if (valid) {
            this.$router.push({
              path: this.redirect || "/"
            });

            localStorage.setItem("mark", "1");
            this.loading = false;
          }
          // if (valid) {
          //   this.loading = true;
          //   this.$store
          //     .dispatch("user/login", this.loginForm)
          //     .then(() => {
          //       this.$router.push({
          //         path: this.redirect || "/",
          //       });
          //       this.loading = false;
          //     })
          //     .catch(() => {
          //       this.loading = false;
          //     });
          // } else {
          //    this.$message.error('提交错误');
          //   return false;
          // }
        });
      } else {
        this.$refs.loginFormPassword.validate(valid => {
          console.log("valid", valid);
          if (valid) {
            localStorage.setItem("mark", "2");
            this.$router.push({
              path: this.redirect || "/"
            });
            this.loading = false;
          }
        });
      }
    },
    // 点击tab进行改变
    handleClick(tab, event) {
      this.loginForm.type = tab.name;
      console.log("tab", tab.name);
    },
    // 点击获取验证码
    HandleVerificationCode() {
      console.log("点击获取验证码");
      this.CodeDisabled = true;
      var CodeDisabledTimer = setInterval(() => {
        this.time = this.time - 1;
        this.VerificationCodeText = `${this.time}s`;
        if (this.time < 0) {
          clearInterval(CodeDisabledTimer);
          this.VerificationCodeText = "获取验证码";
          this.CodeDisabled = false;
          this.time = 4;
        }
      }, 1000);
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

// @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
//   .login-container .el-input input {
//     color: $cursor;
//   }
// }

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
      padding: 0 5px 5px 0;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
        margin-top: 12px;
      }
    }
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
  background-color: #ddd;
  overflow: hidden;
  position: relative;

  @include flex;

  >>> .el-form-item {
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    padding-top: 8px;
    background: #fff;
    color: #454545;
  }

  // 登录tabs
  .loginBox {
    padding-left: 30px;
    padding-right: 30px;
    background-color: #fff;
    width: 100%;
    min-width: 320px;
    min-height: 256px;
    width: 500px;
    height: 400px;
    border-radius: 10px;
    position: relative;
    box-shadow: 0 25px 40px rgba(191, 221, 251, 0.5);
    @include flex;

    .login-title-logo {
      width: 370px;
      height: 100px;
      min-width: 320px;
      min-height: 56.3px;
      background-image: url("../../assets/login/title.png");
      background-size: 370px 100px;
      position: absolute;
      top: -40px;
    }
    .login-tabs-box {
      position: relative;
      top: 20px;
      height: 320px;

      >>> .is-top {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
      }
      >>> .el-tabs__nav-wrap::after {
        background-color: transparent;
      }

      >>> .el-tabs__active-bar {
        width: 40px !important;
        margin: 0 0 0 20px;
      }

      >>> .el-form-item__error {
        font-size: 14px;
        margin-top: 5px;
      }
    }
    .is-disabled {
      background-color: #ccc;
      border: 1px solid #ccc;
      width: 120px;
      height: 40px;
    }
    .login-button-div {
      @include flex;
      height: 160px;
      .login-button {
        width: 65%;
        margin: 0 auto;
        height: 50px;
        font-size: 20px;
        font-weight: 400;
        box-shadow: 0 10px 10px rgba(36, 139, 242, 0.49);
      }
    }
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
      color: #999;
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

  .login-form {
    position: relative;
    width: 360px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
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
  .verificationCode {
    position: absolute;
    right: 3px;
    top: -13px;
    font-size: 14px;
    width: 120px;
    height: 40px;
    cursor: pointer;
  }
}
</style>


// 屏幕适配
<style  scoped>
@media (width: 320px) {
  .login-container .loginBox,
  .login-container .login-form {
    width: 320px;
  }
  .login-container .login-form {
    width: 270px;
    margin: 0 auto;
  }
}

@media (width: 375px) {
  .login-container .loginBox,
  .login-container .login-form {
    width: 375px;
  }
  .login-container .login-form {
    width: 310px;
    margin: 0 auto;
  }
}
</style>
