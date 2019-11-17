
<!--
 * @Author: yangdan
 * @Date: 2019-09-19 18:20:19
 * @LastEditors: yangdan
 * @LastEditTime: 2019-11-11 16:22:01
 * @Description: 添加描述
 -->
<template>
  <div class="login-container">
    <!-- <div class="login-red"> -->
    <el-row>
      <!-- 登录 tabs -->
      <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="loginBox">
          <div class="login-title-logo" />
          <el-tabs v-model="loginForm.type" class="login-tabs-box" @tab-click="handleClick">
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
                  >{{ VerificationCodeText }}</el-button>
                </el-form-item>

                <div class="login-button-div">
                  <el-button
                    :loading="loading"
                    type="primary"
                    class="login-button"
                    @click.native.prevent="handleLogin"
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
                    class="login-button"
                    @click.native.prevent="handleLogin"
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
            sessionStorage.setItem("mark", "1");
            this.$router.push({
              path: this.redirect || "/"
            });

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
            sessionStorage.setItem("mark", "2");
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
@import "./index.scss";
</style>



