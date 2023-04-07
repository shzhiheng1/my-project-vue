
const initTitle="石先生小分队"
export default function getPageTitle(title) {
   if(title){
     return initTitle+'-'+title
   }else{
    return initTitle
   }
}