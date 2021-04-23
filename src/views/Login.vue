<template>
  <div class="login_box">
    <div class="h50">
      <my-tab-bar
        :title="isLogin ? '登录' : '注册'"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      ></my-tab-bar>
      <img class="logo" src="//s.weituibao.com/1582958061265/mlogo.png" alt="">
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <Verify
        @success="success"
        @error="error"
        :type="2"
        :showButton='false'
        ref='qqq'
      ></Verify>

      <span class="loginBtn" @click="isLogin = !isLogin">{{ isLogin ? "立即注册" : "已有登陆账号" }}</span>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">{{
          isLogin ? "登录" : "注册"
        }}</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// @ is an alias to /src
import Verify from "vue2-verify";
import { Dialog,Toast } from 'vant';
import md5 from "js-md5";
import {login,register} from "../api/user"
export default {
  data() {
    return {
      isLogin: true,
      username: "",
      password: "",
    };
  },
  methods: {
    onClickLeft() {},
    onSubmit() {
      this.$refs.qqq.checkCode();
    },
    success(obj) {
       //发送ajax请求
       if(this.isLogin){
        login({
          loginName:this.username,
          passwordMd5:md5(this.password),
        }).then((data) =>{
          if(data.resultCode == 200){
            this.$store.commit("updateToken",data.data);
            this.$router.push("/");
          }
        });
      } else{
        register({
          loginName:this.username,
          password:this.password,
        }).then((data) =>{
          if(data.resultCode == 200){
            Dialog.alert({
            title: '提示',
            message: '注册成功，请登录',
            theme: 'round-button',
          }).then(() =>{
              this.isLogin = true;
              obj.refresh();
          });
          }         
        })
      }
    }, 
    error(){
      Toast.fail('验证码未填或填写错误！');
    },
  },
  components: {
    Verify,
  },
};
</script>
<style lang="less">
.h50 {
  margin-bottom: 50px;
}
.van-form{
  
  // text-align: center;
  // margin-top: 50px;
  // height: 100%;
  // line-height: 100%;
.cerify-code-panel{
  display: flex;
  
  
  .varify-input-code{
    height: 60px;
    box-sizing: border-box;
    text-align: center;
    margin-left: 10px;
    font-size: 30px;

    border-color: #ddd;
   }
   .verify-change-area{
     height: 60px;
     line-height: 60px;
   }

}

.loginBtn{
  display: block;
  color: rgba(5, 84, 202, 0.863);
  margin:20px;
  text-align: left;
  z-index: 200;
}
}
</style>
