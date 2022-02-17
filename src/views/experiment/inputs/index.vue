<template>
   <div class="verify-tel">
    <div>
        <input ref="pwd"   :maxlength="digits.length" v-model="msg"  style="position: absolute;z-index: -1;opacity: 0"/>
        <ul  class="pwd-wrap" @click="focus">
            <li v-for="(item,key) in digits" :style="{'margin-right': (130-10*digits.length)/(digits.length-1)+'%','width':'10%'}" :key="key" >
                <span v-if="msgLength > key">{{msg.substring(key,key+1)}}</span>
            </li>
        </ul>
    </div> 
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        type="daterange"
        :picker-options="pickerOptions"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right"
        @change="getDate"
        >
      </el-date-picker>
    </div>
</div>
</template>
<script>
  import moment from 'moment'
    const _startDate = new Date(moment().subtract(30, 'days').format('YYYY/MM/DD'))
    const _endDate = new Date(moment().format('YYYY/MM/DD'))
    let min='';
  export default{
    data(){
      return {
        page:0,    //1为短信验证
        digits:['','','','','','','','','','',''],  //input框位数控制,这里可以配置多少个“输入框”
        msg:'',
        msgLength:0,
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }],
          onPick: ({ maxDate,minDate}) => {
            min=minDate;
          },
          disabledDate(time){
              let m = 31 * 24 * 60 * 60 * 1000;
              if (min) {
                  return time.getTime() > (min.getTime()+m)
                  ||time.getTime() < (min.getTime()-m)||time.getTime() > Date.now();
              } else {
                  return time.getTime() > Date.now();
              }
          }
        },
        value2: [_startDate,_endDate],
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
      // 获取时间
      getDate(val){
        console.log(val)
        console.log(this.value2)
        const date1=moment(this.value2[0]).format('YYYY/MM/DD')
        console.log(date1)
      }
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