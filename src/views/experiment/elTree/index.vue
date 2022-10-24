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
        <download-excel
          class = "export-excel-wrapper"
          :data = "json_data"
          :fields = "json_fields"
          name = "filename.xls">
          <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
          <el-button type="primary" size="small">前端导出EXCEL</el-button>
        </download-excel>
        <!-- 上传文件夹 不推荐-->
        <!--参考地址 https://www.helloweba.net/javascript/632.html -->
        <uploader :options="uploaderOptions" :autoStart="false" class="uploader-example" :file-status-text="statusText" @file-added="onFileAdded" @file-error="fileError">
          <uploader-unsupport></uploader-unsupport>
          <uploader-drop>
            <p>vue-simple-uploader插件上传文件夹或文件</p>
            <uploader-btn>选择文件</uploader-btn>
            <uploader-btn :attrs="attrs">图片</uploader-btn>
            <uploader-btn :directory="true"  >选择文件夹</uploader-btn>
          </uploader-drop>
          <uploader-list></uploader-list>
        </uploader>
        <hr>
        <!-- 手动的上传文件夹 根据需要实际需要使用-->
        <h3>手动上传文件夹</h3>
        <input ref="fileRef" type='file' name="file" webkitdirectory @change.stop="uploadDirectory"/>
        <!-- 
          <el-button type="primary"  @click="uploadFile2()">点击上传</el-button>
          <input type="file" @change="fileValueChange2()" ref="uploadFile2" enctype="multipart/form-data" style="display:none;" accept="image/jpeg,image/png,image/gif">
         -->
         <!-- 使用element-ui上传文件夹 -->
         <el-upload
              class="upload-demo"
              action="#"
              :on-remove="fileRemove"
              :on-change="fileChang"
              accept=""
              :auto-upload="false"
              :multiple="true"
              :file-list="form.instFilePics"
              ref="uploadFile">
              <el-button size="small" type="primary" >
                <i class="el-icon-folder-opened"></i>
              </el-button>
          </el-upload>

    </div>
</template>
<script>
import {uploadFiles} from '@/api/comment'

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
        ],
        json_data:[
          {
            'name':'111',
            'age':22
          }
        
        ],
        json_fields:{
          '姓名':'name',
          "年龄":"age"
        },
        uploaderOptions: {
          target: 'http://localhost:9000/upload',//目标上传地址URL,默认值为 '/'。
          testChunks: false,
          chunkSize: 1024*1024*2,  //1MB
          simultaneousUploads: 3, //并发上传数
          // fileParameterName:'file',//上传文件时文件的参数名，默认 file。
          //maxChunkRetries:1,//最大自动失败重试上传次数,默认0，
          headers: {
                'access-token': 'abcd1234'
          },
        },
        attrs: {
          accept: 'image/*'
        },
        statusText: {
          success: "上传成功",
          error: "上传失败",
          uploading: "上传中",
          paused: "暂停中",
          waiting: "等待中"
        },

        form:{
          instFilePics:[],
        },
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
         //以下代码，有时候可能写法不同，可在控制台打印一层一层的找input，再给加webkitdirectory 属性
	      this.$refs.uploadFile.$children[0].$refs.input.webkitdirectory = true;
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
      },
      /***********************插件上传文件夹*********************************/ 
      onFileAdded(file){
         console.log('----上传----',file)
         return
      },
      fileError(rootFile, file, message, chunk){
       console.log(rootFile, file, message, chunk)
      },
      /*************手动上传***********/ 
      /*参考https://blog.csdn.net/Web_chicken/article/details/120032911*/ 
      uploadDirectory(){
        console.log(this.$refs.fileRef.files);//文件列表
        // 选中文件后，会触发input的change事件，即会进入此函数
        var formData = new FormData()
        // this.$refs.uploadFile2是vue中获取dom元素的方法
        // 通过files就可以拿到所有上传的文件，如果是多个文件循环即可
        let files=this.$refs.fileRef.files;
        let fileLength = files.length;
        for (let i = 0; i < fileLength; i++) {
          formData.append( 'file',files[i],files[i].name)
        }
        formData.append('productNumbers', 'DW22D1709E');
        uploadFiles(formData).then(res=>{
                console.log(res)
        })
      },
      /*****************element-ui*******************/ 
      fileChang(file, fileList) {
        console.log('-------调用次数----------',fileList)
        this.form.instFilePics = fileList;
      },
      fileRemove(file, fileList, name) {
        this.form.instFilePics = fileList
      }
    },
  };
</script>
<style scoped>
.uploader-example {
    width: 880px;
    padding: 15px;
    margin: 40px auto 0;
    font-size: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
  }
  .uploader-example .uploader-btn {
    margin-right: 4px;
  }
  .uploader-example .uploader-list {
    max-height: 440px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>