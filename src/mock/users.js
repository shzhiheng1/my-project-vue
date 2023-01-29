const UsersLogin={
  "error":{
    "code":1,
    "msg":"登录成功！"
  },
  "data":{
    "token":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIyMjUwMTg4MDdAcXEuY29tIiwibmFtZSI6InNoaXpoaWhlbmciLCJpYXQiOjE2NjgxNTYyMTgsImV4cCI6MTY2ODE2MzQxOH0.fEFBsb6wLhJGbo2ZYnDQt1puFluOdsyxSDgU7oZP6OA"
  }
}
const UsersInfo={
  "error":{"code":1,"msg":"获取用户信息成功！"},
  "data":{
    "email":"2225018807@qq.com",
    "name":"shizhiheng"
  }
}

export default{
  usersLogin:UsersLogin,
  usersInfo:UsersInfo
}