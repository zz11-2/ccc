import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import VueRouter from 'vue-router';
import 'ant-design-vue/dist/antd.css'
// import router from './router/index'
import PaGe from './components/PaGe01.vue';

Vue.use(Antd)
 Vue.use(VueRouter)
 const routes = [
    { path: '/', component: PaGe }];

const router = new VueRouter({
        routes
      }); 
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')