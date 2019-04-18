import 'es6-promise/auto';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '../../store';
import Vant from 'vant';
import '@/utils/util';
import '@/utils/stringUtils';
import 'vant/lib/index.css';
import { set, getToken, setToken, removeToken } from '@/utils/cookieUtils';
Vue.use(Vant);

router.beforeEach((to, from, next) => {
    let token = getToken();
    if (!token) {
        window.location.href = 'login.html';
    } else {
        next();
    }
});
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
