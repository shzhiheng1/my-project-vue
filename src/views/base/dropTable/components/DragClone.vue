<template>
  <div class="container my-2">
      <div class="row">
        <div class="col mx-2 border rounded bg-primary">
          <Draggable class="draggable-wrap" :options="{group:{name: 'itxst',pull:'clone',put:false},sort: true}"   animation="300" :move="onMove">
            <transition-group>
              <div v-for="(item) in oldArr" :key="item.id">
                <div class="bg-white my-3 p-2 shadow border rounded">
                  <p>{{ item.name }}</p>
                </div>
              </div>
            </transition-group>
          </Draggable>
        </div>
        <div class="col mx-2 border rounded bg-success">
           <Draggable class="draggable-wrap" group="itxst" animation="300" >
              <transition-group>
              <div v-for="item in Arr" :key="item.id">
                <div class="bg-white mt-3 p-2 shadow border rounded">
                  <p>{{ item.name }}</p>
                </div>
              </div>
            </transition-group>
          </Draggable>
        </div>
      </div>
  </div>
</template>
<script>
import Draggable from 'vuedraggable'
export default {
  components:{
    Draggable
  },
  data(){
    return {
        col: [
          {
            label: '日期',
            prop: 'date'
          },
          {
            label: '姓名',
            prop: 'name'
          },
          {
            label: '地址',
            prop: 'address'
          }
        ],
       oldArr:[
        {id:'1',name:'小王',date:'2021-10-10',address:'浙江杭州'},
        {id:'2',name:'小名',date:'2021-10-10',address:'浙江杭州'},
        {id:'3',name:'小黑',date:'2021-10-10',address:'浙江杭州'},
       ],
       Arr:[
        // {id:'4',name:'小刘'},
        ]
    }
  },
  methods:{
    onMove(e,originalEvent){
       console.log(e)
    }
  }
}
</script>
<style scoped>
.draggable-wrap{
  min-height: 300px;
  cursor: move;
}
.draggable-wrap>span{
    min-height: 300px;
    display: block;
}
</style>