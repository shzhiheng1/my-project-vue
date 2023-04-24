<template>
  <div class="water">
    <!-- 一.通过class处理动画 -->
    <div class="water_item" :class="[column%2===0?'water_animate1':'water_animate2']" :style="{background:item.background,height:item.height +'px',top:item.top+'px',left:item.left+'px'}" v-for="(item,index) in list" :key="index">
       {{index}}
    </div>
  </div>
</template>

<script>
export default {
   data(){
    return {
       column:0
    }
   },
   props:{
    list:{
      type:Array,
      default:()=>[]
    }
   },
   watch: {
    // 二.js控制动画
    // 'column': function (val) {
    //   console.log(val)
    //   this.controlAnimation()
    // }
  },
   mounted(){
    // 改变窗口大小
    window.onresize = () => {
      return (() => {
        this.$nextTick(() => {
          this.init()
        })
      })()
    }
    this.init()
   },
   methods:{
    init(){
      // 列
      const column=Math.floor(document.querySelector('.water').clientWidth/130) ;
      this.column=column;
      console.log(document.querySelector('.water').clientWidth)
      let heightArr=[];//存储高度
       for (let index = 0; index < this.list.length; index++) {
          // 第一行
          if(index<column){
            this.$set(this.list[index], 'top', 0);
            this.$set(this.list[index], 'left', index*130);
            heightArr.push(this.list[index].height);
          }else{
            // console.log('----第一行以后---')
           let minHeight=Math.min(...heightArr)
           let minIndex=heightArr.indexOf(minHeight)
          //  console.log(heightArr)
          //  console.log(minHeight,minIndex)
           this.$set(this.list[index], 'top', minHeight+10);
           this.$set(this.list[index], 'left', minIndex*130);
           heightArr[minIndex]=minHeight+this.list[index].height+10
          }
        
       }
      //  console.log(heightArr)
    },
    // 方法二：js控制动画
    controlAnimation(){
      const itemAll=document.querySelectorAll('.water_item')
      itemAll.forEach(element => {
        if(this.column%2===0){
            element.classList.add('water_animate1')
            element.classList.remove('water_animate2')
        }else{
          element.classList.add('water_animate2')
            element.classList.remove('water_animate1')
        }
      });
    }
   }

}
</script>

<style lang="scss" scoped>
.water{
  position: relative;
  width: 100%;
  &_item{
    position:absolute;
    width: 120px;
  }
  &_animate1{
    animation: toTop1 2s ease-in;
  }
   &_animate2{
    animation: toTop2 2s ease-in;
  }
  @keyframes toTop1{
    0% {
        margin-top: 100px;
        opacity: 0.1;
    }
    100% {
        margin-top: 0px;
        opacity: 1;
    }
  }
  @-webkit-keyframes toTop1 {
    0% {
        margin-top: 100px;
        opacity: 0.1;
    }
    100% {
        margin-top: 0px;
        opacity: 1;
    }
  }

    @keyframes toTop2 {
    0% {
        margin-top: 100px;
        opacity: 0.1;
    }
    100% {
        margin-top: 0px;
        opacity: 1;
    }
  }
  @-webkit-keyframes toTop2 {
    0% {
        margin-top: 100px;
        opacity: 0.1;
    }
    100% {
        margin-top: 0px;
        opacity: 1;
    }
  }
}

</style>>

