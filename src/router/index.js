import Vue from 'vue'
import VueRouter from 'vue-router'
import PaGe01 from '@/components/PaGe01'
import PaGe02 from '@/components/PaGe02'
Vue.use(VueRouter)
const routes = [{
    path: '/p1',
    component: PaGe01
},
{
    path: '/p2',
    component: PaGe02
}
]
const router = new VueRouter({
    routes
})
export default router