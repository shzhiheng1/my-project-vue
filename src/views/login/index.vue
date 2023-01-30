<template>
  <div class="login">
    <el-card class="card-wrap">
      <div slot="header" class="clearfix">
        <span>用户登录</span>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="50px" class="demo-ruleForm">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model.trim="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model.trim="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;">登录</el-button>
            <p class="register" @click="toRegister">立即注册</p>
          </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>
<script>
import {PostLogin} from '@/api/users.js'
import {setCookie} from '@/utils/cookie.js'
export default {
  data(){
    const validatePassword= (rule, value, callback) => {
      if (value) {
         let reg =/^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*).{6,20}$/
         if (reg.test(value)) {
          callback()
         } else {
          callback(new Error('密码6-20位，必须含有字母大小写和数字！'));
         }
      } else {
        return callback(new Error('密码不能为空！'));
      }
    }
     const validateEmail= (rule, value, callback) => {
      if (value) {
         let reg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
         if (reg.test(value)) {
          callback()
         } else {
          callback(new Error('邮箱验证失败！'));
         }
      } else {
        return callback(new Error('邮箱不能为空！'));
      }
    }
    return {
      ruleForm:{
          password:'',
          email:''
      },
      rules:{
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
           email: [
            { validator: validateEmail, trigger: 'blur' }
          ],
      }
    }
  },
  methods:{
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
            PostLogin(this.ruleForm).then(res=>{
              const _err=res.error;
              const _data=res.data
              if(_err.code===1){
                setCookie('token',_data.token,120)
                this.$store.dispatch('getUserInfo')
                this.$router.replace({path:'/home'})
              }
            }).catch(err=>{
              console.log(err)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    // 注册
    toRegister(){
       this.$router.push({path:'/register'})
    },
  }

}
</script>
<style scoped>
  .login{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-wrap {
    width: 400px;
  }
  .clearfix{
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
  .register{
    color:blue;
    text-align: right;
    cursor: pointer;
    text-decoration: underline;
  }
</style>