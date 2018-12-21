import Vue from 'vue';
import App from './App.vue';
import {Tooltip} from 'element-ui';
import IvistaUi from '../src';

Vue.use(Tooltip);
Vue.use(IvistaUi);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
