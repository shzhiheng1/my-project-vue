import {Service} from "../utils/request";

// 登录
export function PostLogin(data) {
  return Service({
    url:'/users/login',
    method:'post',
    data
  })
}

// 注册
export function PostRegister(data) {
  return Service({
    url:'/users/register',
    method:'post',
    data
  })
}
// 获取用户信息
export function PostUsersInfo() {
  return Service({
    url:'/users/info',
    method:'post'
  })
}