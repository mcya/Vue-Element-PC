<template>
<div class="login-back">
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</div>
</template>

<script>
// import { requestLogin } from '../api/api';
var path = require('path')
//import NProgress from 'nprogress'
export default {
  data() {
    return {
      logining: false,
      ruleForm2: {
        account: 'mcya',
        checkPass: 'mcya123'
      },
      rules2: {
        account: [{
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          },
          //{ validator: validaePass }
        ],
        checkPass: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          //{ validator: validaePass2 }
        ]
      },
      checked: true
    };
  },
  methods: {
    handleReset2() {
      this.$refs.ruleForm2.resetFields();
    },
    handleSubmit2(ev) {
      var _this = this;
      this.$refs.ruleForm2.validate((valid) => {
        if (valid) {
          this.logining = true;
          var loginParams = {
            username: this.ruleForm2.account,
            password: this.ruleForm2.checkPass
          };
          var user = loginParams; //返回
          sessionStorage.setItem('user', JSON.stringify(user));
          setTimeout(function() {
            _this.logining = false;
            _this.$router.push({
              path: '/table'
            });
          }, 1000)

          // this.$http.post(this.HOST + "/user/projectList.do", {
          //   'userCode': 'hemuhong'
          // }, {
          //   emulateJSON: true
          // }).then(function(response) {})

          //_this.$router.replace('/table');
          // this.logining = true;
          // //NProgress.start();
          // var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };
          // requestLogin(loginParams).then(data => {
          //   this.logining = false;
          //   //NProgress.done();
          //   let { msg, code, user } = data;
          //   if (code !== 200) {
          //     this.$message({
          //       message: msg,
          //       type: 'error'
          //     });
          //   } else {
          //     sessionStorage.setItem('user', JSON.stringify(user));
          //     this.$router.push({ path: '/table' });
          //   }
          // });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.login-back {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/images/login-bg1.jpg") no-repeat center center;
    background-size: 100% 100%;
}
.login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;

    // position: absolute;
    // top: 50%;
    // left: 50%;
    // -webkit-transform: translate(-50%, -50%);
    // transform: translate(-50%, -50%);
    // background: #fff;
    // width: 370px;
    // border-radius: 5px;
    // padding: 25px;
    // text-align: center;

    border: 1px solid #eaeaea;
    // box-shadow: 0 0 25px #cac6c6;
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    .title {
        margin: 0 auto 40px;
        text-align: center;
        color: #505458;
    }
    .remember {
        margin: 0 0 35px;
    }
}
</style>
