import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods.vue'
import seller from '../components/seller/seller.vue'
import ratigns from '../components/ratings/ratings.vue'
Vue.use(Router)
const routes = [
    {
        path: '/',
        redirect: '/goods'
    },
    {
        path:'/goods',
        component:goods
    },
    {
        path:'/ratings',
        component:ratigns
    },
    {
        path:'/seller',
        component:seller
    }
]
export default new Router({
    linkActiveClass: 'active',
    routes,

})