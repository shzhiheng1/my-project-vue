<template>
    <div>
        <el-tree
          :data="data2"
          show-checkbox
          default-expand-all
          node-key="id"
          ref="tree"
          @check-change	="handleNodeClick"
          highlight-current
          :props="defaultProps">
        </el-tree>

        <div class="buttons">
          <el-button @click="getCheckedNodes">通过 node 获取</el-button>
          <el-button @click="getCheckedKeys">通过 key 获取</el-button>
          <el-button @click="setCheckedNodes">通过 node 设置</el-button>
          <el-button @click="setCheckedKeys">通过 key 设置</el-button>
          <el-button @click="resetChecked">清空</el-button>
        </div>
        <div class="block">
          <span class="demonstration">单选</span>
          <el-cascader
            v-model="value"
            :props="cascaderProps"
            :options="options"
            @active-item-change="handleItemChange"
            @change="handleChange">
            </el-cascader>
        </div>
         <div class="block">
          <span class="demonstration">多选</span>
            <DustoCascader
              @change="handleChange2"
              v-model="value2"
               collapse-tags
              :options="options2"
              :props="cascaderProps2"
              clearable>
            </DustoCascader>
        </div>
    </div>
</template>
<script>
  export default {
     data() {
      return {
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        cascaderProps:{
           label:'name',
           value:'code'
        },
        value: [
          // 'zhinan','shejiyuanze'
          ],
        options:[
             {
               code: 'zhinan',
               name: '指南',
               children:[
                //  {
                //    code: 'shejiyuanze',
                //    name: '设计原则',
                //  }
               ]
             },
        ],
        value2:[],//多选值
        cascaderProps2:{
            label:'name',
            value:'code',
            multiple: true
        },
        options2:[
          { 
            code: 'zhinan',
            name: '指南',
            children:[
                 {
                   code: 'shejiyuanze',
                   name: '设计原则',
                 },
                 {
                   code: 'mobiao',
                   name: '设计目的',
                 }
            ]
          },
          { 
            code: 'yuyan',
            name: '语言',
            children:[
                 {
                   code: 'zhongwen',
                   name: '中文',
                 },
                 {
                   code: 'yingwen',
                   name: '英文',
                 },
            ]
          }
        ]
      }
    },
    components:{
    },
    mounted(){
         if(this.value[1]){
             this.options[0].children = [
             {
                   code: 'shejiyuanze',
                   name: '设计原则',
             }]
         }
    },
    methods: {
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
      // 节点被点击
      handleNodeClick(data, checked, indeterminate){
          console.log(data, checked, indeterminate);
      },


      // 值变化
      handleChange(value) {
        console.log(value);
      },
      // 某一动态加载数据
      handleItemChange(val){
        console.log(this.value)
        console.log('active item:', val);
        setTimeout(() => {
          this.options[0].children = [
             {
                   code: 'shejiyuanze',
                   name: '设计原则',
             }]
        }, 300);
      },
      // 多选值
      handleChange2(val){
         console.log(val)
      }
    },
  };
</script>