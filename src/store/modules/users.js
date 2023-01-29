import {PostUsersInfo} from '@/api/users.js'

const users={
   state:{
      userInfo:{
        email:'',
        name:''
      }
   },
   mutations:{
    SET_USER_INFO:(state,data)=>{
     state.userInfo= data
    }
  },
   actions:{
     getUserInfo:(context)=>{
        PostUsersInfo().then(res=>{
           const _data=res.data
           const result={email:_data.email,name:_data.name}
           context.commit('SET_USER_INFO',result)
        })      
     }
   },
}

export default users

