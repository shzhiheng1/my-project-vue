<template>
  <div>
    <Tasks></Tasks>
   <ComDragCopy></ComDragCopy>
   <ShortTable></ShortTable>
  </div>
</template>
<script>
import Draggable from "vuedraggable";
import Tasks from './components/TasksList.vue'
import ShortTable from './components/ShortTable.vue'
import ComDragCopy from './components/DragClone.vue'
export default {
  components: {
    Draggable,
    ComDragCopy,
    ShortTable,
    Tasks
  },
  data() {
    return {
        
    };
  },
  methods:{
    
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
