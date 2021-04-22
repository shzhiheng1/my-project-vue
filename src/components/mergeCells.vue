<template>
  <div>
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px">
      <el-table-column
        prop="storeCode"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="amount1"
        label="数值 1（元）">
      </el-table-column>
      <el-table-column
        prop="amount2"
        label="数值 2（元）">
      </el-table-column>
      <el-table-column
        prop="amount3"
        label="数值 3（元）">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
      return {
        tableData: [
          {
          storeCode: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        },
          {
          storeCode: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          storeCode: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          storeCode: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          storeCode: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          storeCode: '12987125',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],
        OrderIndexArr:[],
      };
    },
    mounted(){
      this.getOrderNumber()
    },
    methods:{
    // 获取相同编号的数组
    getOrderNumber() {
      const OrderObj = {}
      this.tableData.forEach((element, index) => {
        element.rowIndex = index
        if (OrderObj[element.storeCode]) {
          OrderObj[element.storeCode].push(index)
        } else {
          OrderObj[element.storeCode] = []
          OrderObj[element.storeCode].push(index)
        }
      })

      // 将数组长度大于1的值 存储到this.OrderIndexArr（也就是需要合并的项）
      for (const k in OrderObj) {
        if (OrderObj[k].length > 1) {
          this.OrderIndexArr.push(OrderObj[k])
        }
      }
    },

    // 合并单元格
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 1 ) {
        for (let i = 0; i < this.OrderIndexArr.length; i++) {
          const element = this.OrderIndexArr[i]
          for (let j = 0; j < element.length; j++) {
            const item = element[j]
            if (rowIndex === item) {
              if (j === 0) {
                return {
                  rowspan: element.length,
                  colspan: 1
                }
              } else if (j !== 0) {
                return {
                  rowspan: 0,
                  colspan: 0
                }
              }
            }
          }
        }
      }
    }



    
  }
    
}
</script>

<style>

</style>