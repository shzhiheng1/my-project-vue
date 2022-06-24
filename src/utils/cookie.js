/**************
 * cookie
 * 如果过期时间设为0，则关闭浏览器(非当前的页面)就失效
 * 
 * 
 * ************/  
 function  setCookie(name,value='',minutes=0){
  //minutes分钟
  let date=new Date();
  date.setTime(date.getTime()+minutes*60*1000);
  document.cookie=name+'='+JSON.stringify(value)+((minutes==0?'':';expires='+date.toGMTString()))
}

function getCookie(name){
  let _data=document.cookie;		
  let arr=_data.split(';');
  let value='';
  for (let i=0;i<arr.length;i++) {
    if(arr[i].includes(name)){
      value=arr[i].slice(arr[i].indexOf('=')+1)
    }
  }
  let result=value?JSON.parse(value):'';
  return result;
}

  export {
    setCookie,
    getCookie
  }