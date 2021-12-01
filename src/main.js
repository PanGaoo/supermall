

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import { Lazyload } from 'vant';
import 'vant/lib/index.css';

Vue.use(Lazyload, {
  lazyComponent: true,
  loading: require('assets/img/common/failedToLoad.png'),
});
Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
