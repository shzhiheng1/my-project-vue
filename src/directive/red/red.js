export default {
  // inserted:function(el,binding){
  //     // el.style.background = 'red';
  //     // console.log(binding)
  //     console.log(el)
  // },
  inserted: function (el, binding, vnode) {
    // el.innerHTML =binding.value
    el.innerHTML=
          '<el-button>'+binding.value.name+'</el-button>'
    }
}