<template>
  <div>
    <div class="container mt-1 mb-1">
     <div class="row justify-content-betwee mb-2">
       <div class="col-8 fs-2">vuedraggable拖拽插件实例1</div> 
       <div class="col-4 text-end"><button type="submit" class="btn btn-primary" @click="handleSave">保存</button></div>
     </div>
     <div class="row"> 
      <div class="col mx-2 px-2 py-3 bg-light border rounded">
        <h6>待开发</h6>
        <Draggable v-model="todos" class="draggable-list"  group="tasks">
            <div v-for="(idea, i) in todos" :key="i">
              <div class="bg-white mt-3 p-2 shadow border rounded">
                <p>{{ idea }}</p>
              </div>
          </div>
        </Draggable>
      </div>
      <div class="col mx-2 px-2 py-3 bg-light border rounded">
        <h6>开发中</h6>
        <Draggable v-model="inprogress" class="draggable-list"  group="tasks">
          <div v-for="(todo, i) in inprogress" :key="i">
            <div class="bg-white mt-3 p-2 shadow border rounded">
              <p>{{ todo }}</p>
            </div>
          </div>
        </Draggable>
      </div>
      <div class="col mx-2 px-2 py-3 bg-light border rounded">
        <h6>待测试</h6>
        <Draggable v-model="review" class="draggable-list"  group="tasks">
            <div v-for="(idea, i) in review" :key="i">
              <div class="bg-white mt-3 p-2 shadow border rounded">
                <p>{{ idea }}</p>
              </div>
          </div>
        </Draggable>
      </div>
      <div class="col mx-2 px-2 py-3 bg-light border rounded">
        <h6>完成</h6>
         <Draggable v-model="completed" class="draggable-list"  group="tasks">
            <div v-for="(idea, i) in completed" :key="i">
              <div class="bg-white mt-3 p-2 shadow border rounded">
                <p>{{ idea }}</p>
              </div>
          </div>
        </Draggable>
      </div>
     </div>
  </div>
  </div>
  
</template>
<script>
import Draggable from "vuedraggable";
export default {
  components: {
    Draggable
  },
  data() {
    return {
        todos: ["更新卡拉云开发文档"],
        inprogress: ["搜索组件开发", "解决容器内拖拽定位问题"],
        review: ["实现富文本编辑","解决win下滚动条显示问题"],
        completed: [],
    };
  },
  methods:{
    handleSave(){
      console.log('------todos------',this.todos)
    }
  }
};
</script>

<style scoped>
h6 {
  font-weight: 700;
}
.col {
  height: 40vh;
  overflow: auto;
}
.draggable-list {
  min-height: 10vh;
}
.draggable-list > div {
   cursor: move;;
}
</style>
