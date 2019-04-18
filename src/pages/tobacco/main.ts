import 'es6-promise/auto';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '../../store';
import Vant from 'vant';
import '@/utils/util';
import '@/utils/stringUtils';
import 'vant/lib/index.css';

Vue.use(Vant);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
