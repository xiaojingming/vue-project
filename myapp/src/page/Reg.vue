<template>
  <div id="reg">
    <div class="header clearfix">
      <span class="close">
        <img src="https://login.kongfz.com/mobile/images/login/back.png" alt="">
      </span>
      <span>注册</span>
    </div>

    <el-form label-position="right" :rules="rules" status-icon ref="regForm" label-width="100px" :model="regForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="regForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="regForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input type="password" v-model="regForm.confirmPassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 6.666667rem"  :type="getchange()" @click="submitForm('regForm')" :disabled="regForm.isdisable">提交</el-button>
      </el-form-item>
    </el-form>
    <p class="xy">注册即表示您同意<span>《孔夫子旧书网服务协议》</span></p>
  </div>
</template>
<script>

export default {
  data() {
    var reg =/^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
    var checkUsername = (rule, value, callback) => {
      if (!reg.test(value)) {
        this.regForm.usernametrue=false
        callback(new Error("请输入正确的用户名！"));
      } else {
        callback();
        this.regForm.usernametrue=true;
      }
    };
    var checkPassword = (rule, value, callback) => {
      if (value !== this.regForm.password) {
         this.regForm.passwordtrue=false
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
        this.regForm.passwordtrue = true;
      }
    };
    return {
      regForm: {
        username: "",
        password: "",
        confirmPassword: "",
        passwordtrue:false,
        usernametrue:false,
        isdisable:true
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { validator: checkUsername, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ],
        confirmPassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: checkPassword, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {         
                
                let {username,password} = this.regForm;
                let {data} = await this.$axios.post('http://114.215.146.121:1911/reg',{
                    username,
                    password
                });
                window.console.log(data)
                if(data.status===0){
                  alert('fgfdgfdgvtrg')
                }else{
                    this.$router.replace('/login')
                }
            } 
      });
    },
    getchange(){
      if(this.regForm.usernametrue&&this.regForm.passwordtrue) {
        this.regForm.isdisable = false;
        return 'danger'
      }else{
        this.regForm.isdisable =true;
        return 'info'
      }
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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
  margin-bottom: .533333rem;
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
.xy{
      width: 100%;
    text-align: center;
    color: #999999;
    font-size: 0.26rem;
    margin-top: 0.4rem;
    span{
      color: #d13333;
    }
}

</style>