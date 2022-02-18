<template>
  <div>
    <div>测试指令和自定义表头</div>
    <!-- <div v-red="row" >指令设置背景</div> -->
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      :render-header="renderHeader"
      :label="datelabel"
      >
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="姓名"
      width="180"
      v-tooltie
      >
      <template slot-scope="scope" >
         <!-- <Tooltip :tipContent="scope.row.name" :tipTxet="scope.row.code" /> -->
           <el-tooltip class="item" effect="dark" :content="scope.row.code " placement="top" >
            <el-button type="success">{{ scope.row.name }}</el-button>
          </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)" type="primary">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import red from '@/directive/red/index.js'
import Tooltip from './Tooltip'
// import createToken from '@/utils/createToken.js'
// import md5 from 'js-md5';
export default {
  
  directives: {
    red
  },
  components:{
    Tooltip
  },
  data () {
    return {
     row:{
       name:'小王',
       code:'周口'
     },
     tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          code: 'v066'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          code: 'v067'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          code: 'v068'
        }, {
          date: '2016-05-03',
          name: '王小虎2',
          code: 'v069'
        }],
        datelabel:'日期',
    }
  },
  mounted(){
  // let  $code= 'myApp';
  // let  $key= '427c579384224abf9570779d82969d1e';
  // let  $time= '1557034496';
  //   // md5加密
  // let token=md5($code +  $key + $time);
  // let token=md5($code)
  // let token=createToken();
  //   console.log(token)
   let token=sessionStorage.getItem('token')
    console.log(token)
  },
  methods:{
    renderHeader(h,{column}){
      let _self = this
       return h(
         'div',
         [
           h('span',{
             style:'color:#ff0000;'
           },column.label),
           h('i',{
             class:'el-icon-location',
             style:'color:#409eff;margin-left:5px;'
           }),
           h('input',{
             attrs:{
                type:'range',
                value:0,
             },
             on:{
                'change' (event) {
                  console.log('-------') 
                //值改变时 
                //将渲染后的值重新赋值给单元格值   
                // _self.datelabel= event.target.value;
               } 
              }
           })
         ]
       )
    }
  }
}
</script>

<style>

</style>