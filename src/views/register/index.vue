<template>
  <div class="register">
    <el-card class="card-wrap">
      <div slot="header" class="clearfix">
        <span>用户注册</span>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
           <el-form-item label="用户名" prop="name">
            <el-input v-model.trim="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="QQ邮箱" prop="email">
            <el-input v-model.trim="ruleForm.email"></el-input>
          </el-form-item>
           <el-form-item label="验证码" prop="captcha" class="form-item">
              <el-input v-model="ruleForm.captcha" class="form-item-captcha"></el-input>
              <div><el-button @click="getCaptcha" :disabled="isCaptchaDisabled" type="primary">{{ captchaButtonText }}</el-button></div>
            </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model.trim="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password2">
            <el-input type="password" v-model.trim="ruleForm.password2" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;">注册</el-button>
          </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>
<script>
import {PostRegister,PostCaptcha} from '@/api/users.js'
import { Loading } from 'element-ui';

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
        // 邮箱
        //  let reg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/  
        // QQ邮箱
         let reg=/^[1-9][0-9]{4,9}@qq[.+]com$/
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
          email:'',
          password2:'',
          name:'',
          captcha:''
      },
      isCaptchaDisabled:false,
      captchaButtonText:'获取验证码',
      rules:{
          name: [
            { required: true, message: '用户名不能为空！', trigger: 'blur' },
            { min: 2, max: 20, message: '长度在 2到 20个字符', trigger: 'blur' }
          ],
          password: [
            {required: true, validator: validatePassword, trigger: 'blur' }
          ],
          password2: [
            { required: true,validator: validatePassword, trigger: 'blur' }
          ],
           email: [
            { required: true,validator: validateEmail, trigger: ['blur', 'change']},
            // { required: true, message: '请输入邮箱', trigger: 'blur' },
            // { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
          ],
          captcha: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
          ],
      }
    }
  },
  methods:{
     getCaptcha() {
      this.$refs["ruleForm"].validateField('email',(valid)=>{
        if(!valid){
            this.ruleForm.captcha=''
          // TODO: 实现获取验证码逻辑
          this.isCaptchaDisabled = true
          this.captchaButtonText = '60秒后重新获取'
          let seconds = 60
          const interval = setInterval(() => {
            if (seconds > 0) {
              seconds--
              this.captchaButtonText = `${seconds}秒后重新获取`
            } else {
              clearInterval(interval)
              this.captchaButtonText = '获取验证码'
              this.isCaptchaDisabled = false
            }
          }, 1000)
          PostCaptcha({email:this.ruleForm.email}).then(res=>{
            console.log(res)
          })
        } 
        
      });
    },
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
            PostRegister(this.ruleForm).then(res=>{
              const _err=res.error;
              if(_err.code===1){
                const loadingInt = Loading.service({ target: this.$el.querySelector('.register') });
                this.$message({type:'success',message:'注册成功！'})
                setTimeout(() => {
                    // 关闭加载
                    loadingInt.close()
                    this.$router.replace({path:'/login'})
                }, 2000);
              }
            }).catch(err=>{
              console.error(err);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }

}
</script>
<style  lang="scss" scoped>
  .register{
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
  /deep/  .el-form-item__content{
    display: flex;
  }
  .form-item-captcha{
    flex-grow: 1;
    margin-right: 10px;
  }

</style>