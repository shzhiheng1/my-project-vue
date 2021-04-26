import md5 from 'js-md5';
import {KEY,CODE} from '@/constant/index.js';
export default function createToken() {
  // let  $code= 'myApp';
  // let  $key= '427c579384224abf9570779d82969d1e';
  // let  $time= '1557034496';
  let $time=new Date().getTime()
    // md5加密
  let token=md5(CODE +  KEY + $time);
  return token;
}