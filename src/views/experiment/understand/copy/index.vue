<template>
  <div>
    <h2>js深浅copy的理解:</h2>
    <h3>1.理解：</h3>
    <ul>
      <li>js基本数据类型存在栈中;js引用数据类型(Oject,Array)存在堆中，在栈中存储的是一个指针，指向堆的地址。</li>
      <li>深拷贝和浅拷贝只是针对引用数据类型即Obect和Array而言的。</li>
    </ul>
    <h3>2.深拷贝和拷贝的区别：</h3>
    <p>浅拷贝：基本数据类型的值会被完全拷贝，而引用类型的值则是拷贝了“指向堆内存的地址”。当原对象发生变化的时候，拷贝对象也跟着变化。</p>
    <p>深拷贝：不仅会在栈中开辟另一块空间，若被拷贝对象中有引用类型，则还会在堆内存中开辟另一块空间存储引用类型的真实数据。更改原对象，拷贝对象不会发生变化。</p>
    <h3>3.赋值和浅拷贝的区别总结：</h3>
    <p>赋值：就是对原对象的栈内存地址进行复制，但是他们的堆内存数据还是共享的。(拷贝对象改变则：基本类型与引用类型都会改变原对象)</p>
    <p>浅拷贝：是对原对象的属性值进行精准复制;(拷贝对象改变，则原对象的基本类型不变，原对象的引用类型改变)。</p>
    <h3>4.深浅拷贝的特点：</h3>
    <p>浅拷贝是拷贝一层，属性为对象时，浅拷贝是复制，两个对象指向同一个地址</p>
    <p>深拷贝是递归拷贝深层次，属性为对象时，深拷贝是新开栈，两个对象指向不同的地址</p>
    <h3>浅拷贝的方式：</h3>
    <ul>
      <li>Object.assign()</li>
      <li>Array.prototype.concat()</li>
      <li>Array.prototype.slice()</li>
    </ul>

    <h3>深拷贝的方式：</h3>
     <ol>
      <li>1.JSON.parse(JSON.toString(obj))；先转为字符串，再把字符串解析成对象。注意不适合用于函数。</li>
      <li>2.递归方法实现深度克隆原理：遍历对象、数组直到里边都是基本数据类型，然后再去复制，就是深度拷贝。</li>
      <li>3.lodash库  _.cloneDeepa实现深拷贝。</li>
    </ol>
    <el-button @click="callBack">返回</el-button>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  data(){
    return {

    }
  },
  mounted(){
   this.shallowFn() 
   this.deepCoyp()
  },
  methods:{
    // 浅拷贝与赋值的区别
    shallowFn(){
      // let obj={name:'小王',age:18,likes:['a','b']}
      // let obj1=obj;
      // function shallowCopy(obj) {
      //   let result={}
      //   for(let attr in obj){
      //      if(obj.hasOwnProperty(attr)){
      //        result[attr]=obj[attr]
      //      }
      //   }
      //   return result;
      // }

      // 测试赋值
      // obj1.name='小白';
      // console.log('---赋值---',obj,obj1)

      /********测试浅拷贝******/ 
      // 1.手动实现浅拷贝
      // let obj2=shallowCopy(obj);
      // obj2.name='小黑';
      // obj2.likes.push('c')
      // console.log('----浅拷贝-----',obj,obj2)
      
      // 2.对象属性 Oject.assign()
      // let obj3=Object.assign({},obj)
      // obj3.name='小黑'; 
      // obj3.likes.push('c')
      // console.log('----浅拷贝-----',obj,obj3)
       
      const arr=['a','b',{c:{name:'c'}}];
      // 3.数组 slice()属性实现浅拷贝
      // let arr1=arr.slice()
      // arr1[0]=1;
      // arr1[2]['c']['name']='d';
      // console.log('---数组浅拷贝--',arr,arr1)

      // 4.数组 concat()属性实现浅拷贝
      let arr2=arr.concat()
      arr2[0]=1;
      arr2[2]['c']['name']='d';
      console.log('---数组浅拷贝--',arr,arr2)
    },
    // 深拷贝
    deepCoyp(){
      const oldObj=[{name:'小王',age:18,likes:['a','b']}]
      // 1.通过JSON.parse(JSON.stringfy(obj/arr)),不适用于wei
      // let newObj=JSON.parse(JSON.stringify(oldObj));
      // newObj.likes[0]=1;
      // console.log('----JSON实现深拷贝----',oldObj,newObj)

      // 2.手写递归回调
      // function getType(obj) {
      //   return Object.prototype.toString.call(obj).slice(8,-1);
      // }
      // console.log(getType(function(){}))
      // function backCopy(params) {
      //   let result,copy,type=getType(params);
      //   if(type==='Array'){
      //      result=[]
      //   }else if(type==='Object'){
      //      result={}
      //   }else{
      //     return params  //如果是基本数据类型就直接返回
      //   }
      //   for (let key in params) {
      //     if(params.hasOwnProperty(key)){
      //         copy=params[key]
      //         if(getType(copy)==='Object'||getType(copy)==='Array'){
      //          result[key]= backCopy(copy)//递归方法
      //         }else{
      //           result[key]=copy;//基本数据类型则赋值给属性
      //         }
      //     }
      //   }
      //   return result
      // }
      // let newObj=backCopy()
      // newObj[0].likes[0]=1;
      // console.log('-----手写递归实现深拷贝-----',oldObj,newObj)


      // 3. loadsh 第三库
         let newObj=_.cloneDeep(oldObj)
      newObj[0].likes[0]=1;
      console.log('-----lodash的cloneDeep方法-----',oldObj,newObj)
    },
    callBack(){
      this.$router.go(-1)
    }
  }
}
</script>