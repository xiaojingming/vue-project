<template>
  <div class="login">
    <div class="header clearfix">
      <span class="close">
        <img src="https://login.kongfz.com/mobile/images/login/close.png" alt />
      </span>
      <span>登录</span>
    </div>

    <el-form
      label-position="right"
      :rules="rules"
      status-icon
      ref="loginForm"
      label-width="100px"
      :model="loginForm"
    >
      <el-form-item label="用户名" prop="username" :error="errorMsg">
        <el-input v-model="loginForm.username" placeholder="请输入用户名/手机/邮箱" style="border:0px"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :error="errorMsg">
        <el-input type="password" v-model="loginForm.password" autocomplete="off" placeholder="请输入密码" ></el-input>
      </el-form-item>
      <p class="xy">
        <a href>忘记密码？</a>
      </p>
      <el-form-item>
        <el-button
          style="width: 6.666667rem"
          :type="getchange()"
          @click="submitForm('loginForm')"
          :disabled="loginForm.isdisable"
        >登录</el-button>
      </el-form-item>
       <el-col :offset="17" :span="6" style="text-align:right;line-height:0.8rem; height:0.8rem;">
          <el-button style="color:#ccc" type="text" @click="goto('/reg')">注册</el-button>    
      </el-col>
    </el-form>
    <div class="other_login">
      <div class="title clearfix">
        <span class="line f_left"></span>
        <span class="text">使用社交账号登录</span>
        <span class="line f_right"></span>
      </div>
      <div class="icon">
        <a href="#" class="icon-link" data-icon="qq">
          <img src="https://login.kongfz.com/mobile/images/login/QQ.png" alt />
        </a>
        <a href="#" class="icon-link" data-icon="weibo">
          <img src="https://login.kongfz.com/mobile/images/login/weibo.png" alt />
        </a>
        <a href="#" class="icon-link" data-icon="weixin">
          <img src="https://login.kongfz.com/mobile/images/login/weixin.png" alt />
        </a>
      </div>
    </div>
   
  </div>
</template>
<script>

export default {
  data() {
    var reg = /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
    var checkUsername = (rule, value, callback) => {
      if (!reg.test(value)) {
        this.loginForm.usernametrue = false;
        callback(new Error("请输入正确的用户名！"));
      } else {
        callback();
        this.loginForm.usernametrue = true;
      }
    };
    return {
        errorMsg:'',
      loginForm: {
        username: "",
        password: "",
        passwordtrue: true,
        usernametrue: false,
        isdisable: false
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { validator: checkUsername, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate( async (valid) => {
        if (valid) {
            let {username,password} = this.loginForm;
            let {data} = await this.$axios.get('http://114.215.146.121:1911/login',{
                params:{
                    username,
                    password
                }
            });
            window.console.log(data)
            if(data.status === 0){
                this.errorMsg = '用户名或密码错误'
            }else{
                let Authorization = data.data;
                localStorage.setItem('Authorization',Authorization)
                this.$router.replace('/mine')
            }
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    },
     getchange() {
      if (this.loginForm.usernametrue && this.loginForm.passwordtrue) {
        this.loginForm.isdisable = false;
        return "danger";
      } else {
        this.loginForm.isdisable = true;
        return "info";
      }
    },
   
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
}

#reg {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  margin-bottom: 0.533333rem;
  position: relative;
  width: 100%;
  text-align: center;
  height: 1.04rem;
  line-height: 1.04rem;
  font-size: 0.5rem;
  color: #262626;
  .close {
    position: absolute;
    left: 0;
    top: 0;
    float: left;
    width: 0.4rem;
    z-index: 10;
    padding: 0.05rem 0.26rem;
  }
}
.header .close img {
  width: 0.5rem;
  height: 0.5rem;
  border: 0;
  vertical-align: middle;
}
.login .xy {
  height: 0.533333rem;
  width: 100%;
  text-align: center;
  color: #999999;
  font-size: 0.26rem;
  margin-top: 0.4rem;
  position: relative;
  a {
    position: absolute;
    right: 0.266667rem;
    text-decoration: none;
    color: #ccc;
  }
}
.title {
  width: 84%;
  margin-top: 2.666667rem;
}
.line {
  display: inline-block;
  width: 3.333333rem;
  height: 0.053333rem;
}
.text {
  font-size: 0.26rem;
  color: #999999;
  text-align: center;
}
.other_login .icon a {
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0;
  margin: 0.7rem 0.25rem;
}
.icon {
  padding-left: 2.333333rem;
}
.other_login .icon a img {
  width: 100%;
}
img {
  border: 0;
  vertical-align: middle;
}
// .other_login .title {
//     width: 84%;
//     height: 0.28rem;
//     line-height: 0.28rem;
//     margin: 0 auto;
//     text-align: center;
//     line-height: 0.28rem;
//     margin: 0 auto;
//     text-align: center;

// }
// .other_login .title .line {
//     width: 1.9rem;
//     height: 0;
//     border-bottom: 1px solid #EAEAEA;
//     margin-top: 0.18rem;
// }
// .f_left {
//     float: left;
// }
// .other_login .title .text {
//     font-size: 0.26rem;
//     color: #999999;
// }
// .f_right {
//     float: right;

// }
</style>