import Mock from "mockjs";


import usersApi from './users'
Mock.mock(/\/users\/login/, 'post',usersApi.usersLogin)

export default Mock
