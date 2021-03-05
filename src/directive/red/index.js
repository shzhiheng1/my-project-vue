
import red from './red'

const install = function(Vue) {
  Vue.directive('red', red)
}

// if (window.Vue) {
//   window['red'] = red
//   Vue.use(install); // eslint-disable-line
// }

red.install = install
export default red