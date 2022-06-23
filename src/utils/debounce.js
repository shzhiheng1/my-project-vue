/***
 * 防抖：每次触发时都会取消之前的延时调用。防抖是将多次执行变为最后一次执行。
 * 参数：1.fn:执行函数；
 * 2.delay:延时的时长；
 * 3.immdiate：是否立即执行；
 * 
 * 
 * 
 */
 function debounce(fn,delay=1000,immdiate=false){
  let timer=null;//计算器
  return function _debounce(...args){
    let context = this
    if(timer)clearTimeout(timer)
    if(immdiate){
      fn();
    }else{
      timer=setTimeout(function(){
        fn.apply(context, args)
        timer=null
      },delay)
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