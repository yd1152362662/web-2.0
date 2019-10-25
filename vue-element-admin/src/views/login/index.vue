
<!--
 * @Author: yangdan
 * @Date: 2019-09-19 18:20:19
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-25 16:33:33
 * @Description: 添加描述
 -->
<template>
  <div class="login-container">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="login-red">
          <el-row :gutter="10">
            <!-- 左边的文字 标题 -->
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

            <!-- 登录 tabs -->
            <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4" class="loginShowBox">
              <div class="loginBox">
                <el-tabs
                  v-model="loginForm.type"
                  type="card"
                  style="padding-top:30px"
                  @tab-click="handleClick"
                >
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
                        <span class="svg-container">
                          <svg-icon icon-class="user" />
                        </span>
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
                        <span class="svg-container">
                          <svg-icon icon-class="password" />
                        </span>
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
                          size="mini"
                          type="danger"
                          :disabled="CodeDisabled"
                          @click="HandleVerificationCode"
                        >{{VerificationCodeText}}</el-button>
                      </el-form-item>

                      <el-button
                        :loading="loading"
                        type="primary"
                        style="width:100%;margin-bottom:30px;"
                        @click.native.prevent="handleLogin"
                      >登录</el-button>
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
                        <span class="svg-container">
                          <svg-icon icon-class="user" />
                        </span>
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
                        <span class="svg-container">
                          <svg-icon icon-class="password" />
                        </span>
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
          </el-row>
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
  .verificationCode {
    position: absolute;
    right: 3px;
    top: 3px;
    font-size: 16px;
    cursor: pointer;
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
