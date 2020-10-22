<template>
   <div>
      <p>表格拖拽</p>
   <div class="color-list">

      <div class="color-item" v-for="color in colors" v-dragging="{ item: color, list: colors }"
          :key="color.text"
      >{{color.text}}</div>
 
   </div>
   <table class="el-table el-table--border el-table--small" style="margin-top:20px;">
    <thead class="el-table__header-wrapper has-gutter">
      <tr>
        <th v-for="(columns, index) in tablesColumns" draggable='true' @dragstart="dragstartEvent(index)" @dragenter="dragenterEvent($event,columns)" @dragend="dragendEvent($event,columns)">
          <label class="cell" v-html="renderHeader(index, columns)">
          </label>
        </th>
      </tr>
    </thead>
    <tbody class="el-table__body">
      <tr v-for="(item, index) in tables">
        <td v-for="columns in tablesColumns">{{item[columns.key]}}</td>
      </tr>
    </tbody>
   </table>
   </div>
   
</template>
<script>
export default {
  data() {
    return {
        colors: [{
            text: "1"
        }, {
            text: "2"
        }, {
            text: "3"
        }, {
            text: "4"
        }, {
            text: "5"
        }, {
            text: "6"
        }, {
            text: "7"
        }, {
            text: "8"
        }, {
            text: "9"
        }],
        tables:[{
          bill_type:1,
          bill_type_name:"普通入库",
          id:30,
          owner_id:1,
          owner_name:"许旺",
          receipt_sn:"2018060282",
          status:4,
          status_name:"完验"
        }],
        tablesColumns: [{
          column:"单据类型",
          key:"bill_type_name",
          type:"checkbox"
          },{
          column:"入库单号",
          key:"receipt_sn",
          type:"input"
          },{
          column:"单据状态",
          key:"status_name",
          type:"radio"
        }],
          dragEndColumn: {},//目标对象最后放置的位置
          dragStartIndex: ""//目标对象原索引
        }
  },
  mounted () {
    this.$dragging.$on('dragged', ({ value }) => {
      console.log(value.item)
      console.log(value.list)
      // console.log(value.otherData)
    })
  },
  methods: {
    renderHeader(index, column) {
      if ('renderHeader' in this.tablesColumns[index]) {
      return this.tablesColumns[index].renderHeader(column, index);
      } else {
      return column.column || '';
      }
    },
//拖动开始 ---记录目标对象的索引，以判断是向前拖动还是向后拖动
    dragstartEvent(index) {
    this.dragStartIndex = index
    },
//拖动过程---每移动一个对象都会进这个方法，只有最后一次进这个方法的是拖动结束放置的位置
    dragenterEvent(ev, col) {
    this.dragEndColumn = col
    },
//拖动结束 ---删除原数组中的目标对象，并在放置位置加上目标对象
    dragendEvent(ev, col) {
        if (col.key != this.dragEndColumn.key) {
        this.tablesColumns.forEach((item, index) => {
        if (item.key == col.key) {
        this.tablesColumns.splice(index, 1)
        }
        })
      this.tablesColumns.forEach((el, index) => {
      if (el.key == this.dragEndColumn.key) {
      // var data = deepCopy(this.columns[this.dragStartIndex])
      var indexCol = ""
      if (this.dragStartIndex < index) {
      indexCol = index + 1
      } else {
      indexCol = index
      }
      this.tablesColumns.splice(indexCol, 0, col)
      this.dragEndColumn = {}
      this.dragStartIndex = ""
      return
      }
      })
    }
    }
  }
}
</script>
<style scoped>
  .color-item{
    width:200px;
    height:100px;
    margin:20px;
  }
</style>