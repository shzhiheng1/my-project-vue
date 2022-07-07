const focus= {
  inserted(el,binding){
    console.log(el)
    // el-input聚焦
   const input= el.firstElementChild;
   input.focus()
    // input聚焦
    // el.focus()
  }
}
export default focus