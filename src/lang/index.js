import Vue from 'vue'
import VueI18n  from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'
import {getCookie} from '@/utils/cookie'

Vue.use(VueI18n);

const messages={
  en:{
    ...elementEnLocale,
    ...enLocale
  },
  zh:{
    ...elementZhLocale,
    ...zhLocale
  }
}
const  i18n=new VueI18n({
  locale:getCookie('lange')||'zh',
  messages
})
export default i18n;