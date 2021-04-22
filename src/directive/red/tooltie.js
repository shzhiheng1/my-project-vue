const mainStore=false//是否为主门店
export default (Vue)=>{
  Vue.directive("tooltie", {
      inserted: function (el) {
        console.log('iiiii',el)
        console.log('6666',el.parentNode)
        if(!mainStore){
           el.parentNode&&el.parentNode.removeChild(el);
        }
      }
  })
}