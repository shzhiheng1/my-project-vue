
const initTitle="vue测试项目"
export default function getPageTitle(title) {
   if(title){
     return initTitle+'-'+title
   }else{
    return initTitle
   }
}