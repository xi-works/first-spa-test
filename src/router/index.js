import Vue from 'vue'
import Router from 'vue-router'
import Concentration from '@/pages/concentration'
import About from '@/pages/about'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '',
    routes: [{
        path: '/concentration',
        name: 'concentration',
        component: Concentration,
        props: {cardNum: 6},
    },{
        path: '/about',
        name: 'about',
        component: About,
    }]
})