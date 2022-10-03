import Vue from 'vue'
import Router from 'vue-router'
import Concentrate from '@/pages/concentrate'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '',
    routes: [{
        path: '/concentrate',
        name: 'concentrate',
        component: Concentrate
    }]
})