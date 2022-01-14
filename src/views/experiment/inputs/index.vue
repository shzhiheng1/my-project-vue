<template>
   <div class="verify-tel">
    <div>
        <input ref="pwd"   :maxlength="digits.length" v-model="msg"  style="position: absolute;z-index: -1;opacity: 0"/>
        <ul  class="pwd-wrap" @click="focus">
            <li v-for="(item,key) in digits" :style="{'margin-right': (130-10*digits.length)/(digits.length-1)+'%','width':'10%'}" >
                <span v-if="msgLength > key">{{msg.substring(key,key+1)}}</span>
            </li>
        </ul>
    </div> 
</div>
</template>
<script>
  export default{
    data(){
      return {
        page:0,    //1为短信验证
        digits:['','','','','','','','','','',''],  //input框位数控制,这里可以配置多少个“输入框”
        msg:'',
        msgLength:0,
      }
    },
    methods:{
      //手机号码验证接口函数
      verifyTels:async function () {
        try{
        }catch(e){
          console.log(e)
        }
      },
      //使input框获得焦点
      focus(){
        this.$refs.pwd.focus(); 
      },
    },
    beforeMount:function () {
        this.page=1;
    },
    watch: {
      msg(curVal){
        //监听输入的长度，如果输入完，自动调用校验接口函数
        if(curVal.trim().length===this.digits.length){
           this.verifyTels(); 
        }
        this.msgLength = curVal.length;
      },
      'page':{
        handler:function (newValue, oldValue) {
          if(oldValue==0&&newValue==1){
            //第一次进入页面，自动获得焦点，这里可优化。
            this.timer = setTimeout(()=>{this.$refs.pwd.focus()},500);
          }
        },
        deep:true
      }
    },
    beforeDestroy:function () {
      clearTimeout(this.timer);
    }
  }
</script>
<style scoped lang="scss">
  html,body{
    width: 100%;
    height: 100%;
    background: #fbf9fe;
  }
  .verify-tel{
    background-color: #f9f9f9;   
    margin: 0 3px;
  }
  .pwd-wrap{
    padding-left: 0;
    width: 100%;
    height: 35px;
    padding-bottom: 1px;
    margin: 0 auto;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    cursor: pointer;
    border: none;
    background-color: #f9f9f9;
  }
  .pwd-wrap li{
    list-style-type:none;
    text-align: center;
    line-height: 35px;
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-flex: 1;
    border: none;
    border-bottom:1px solid black;
    background-color: #f9f9f9;
    &:last-of-type{
      margin-right: 0 !important;
    }
    >span{
      font-size: 20px;
    }
  }
  .pwd-wrap li:last-child{
    border-right: 0;
  }
</style>