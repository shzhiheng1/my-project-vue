import Mock from "mockjs";


import usersApi from './users'
Mock.mock(/\/users\/login/, 'post',usersApi.usersLogin)
Mock.mock(/\/users\/info/, 'post',()=>usersApi.usersInfo)

export default Mock
