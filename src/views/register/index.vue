<template>
  <div class="login">
    <el-card class="card-wrap">
      <div slot="header" class="clearfix">
        <span>用户注册</span>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
           <el-form-item label="用户名" prop="name">
            <el-input v-model.trim="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model.trim="ruleForm.email"></el-input>
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
import {PostRegister} from '@/api/users.js'
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
          email:'',
          password2:'',
          name:''
      },
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
            { required: true,validator: validateEmail, trigger: 'blur' }
          ],
      }

      
    }
  },
  methods:{
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
            PostRegister(this.ruleForm).then(res=>{
              const _err=res.error;
              if(_err.code===1){
                this.$router.replace({path:'/login'})
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
</style>