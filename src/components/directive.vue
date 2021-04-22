<template>
  <div>
    <div>测试指令</div>
    <!-- <div v-red="row" >指令设置背景</div> -->
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
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
            <el-button>{{ scope.row.name }}</el-button>
          </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
        }]
    }
  },
}
</script>

<style>

</style>