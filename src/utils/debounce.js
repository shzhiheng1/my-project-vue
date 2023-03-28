/***
 * 防抖：每次触发时都会取消之前的延时调用。防抖是将多次执行变为最后一次执行。
 * 防抖：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
 * 参数：1.fn:执行函数；
 * 2.delay:延时的时长；
 * 3.immdiate：是否立即执行；
 * 
 * 
 * apply与call都是改变this的指向：
 * apply(指向的对象，数组)  返回执行结果
 * call(指向的对象，a,b,....)  //返回执行结果
 * bind(指向的对象，a,b,...) 返回执行函数
 * 
 * 
 */
 function debounce(fn,delay=1000,immdiate=false){
  let timer=null;//计时器
  // return function _debounce(...args){
  //   let context = this
  //   console.log('----timer===',timer)
  //   console.log('----args----',args)
  //   if(timer)clearTimeout(timer)
  //   if(immdiate){
  //     fn.apply(context, args);
  //   }else{
  //     timer=setTimeout(function(){
  //       fn.apply(context, args)
  //       timer=null
  //     },delay)
  //   }
  // }

  return function () {
    // console.log('----this-----',this)
    // console.log('----arguments---',arguments)
    const _context=this
    // console.log(timer)
    // 清除计时器
    if(timer)  clearTimeout(timer)
    if(immdiate){
      fn.call(_context);
    }else{
      timer= setTimeout( ()=> {
        fn.call(_context);
        timer=null;
      }, delay);
    }
   
  }
}


/**
 * 节流：点我单位时间内只执行1次，别的触发无效
* @desc 函数节流
* @param func 函数
* @param wait 延迟执行毫秒数
*/
function throttle(func, wait) {
    let timeout = null
    return function () {
        let context = this
        let args = arguments
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                func.apply(context, args)
            }, wait)
        }

    }
}

export {debounce,throttle}