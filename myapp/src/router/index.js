import Vue from 'vue'

import Home from '../page/Home.vue'
import Cart from '../page/Cart.vue'
import List from '../page/List.vue'
import Login from '../page/Login.vue'
import Reg from '../page/Reg.vue'
import Mine from '../page/Mine.vue'
import Auction from '../page/Auction.vue'
import Goods from '../page/Goods.vue'
import Shop from '../page/Shop.vue'
import Detail from '../page/Detail.vue'
import loginout from '../page/loginout.vue'
import collection from '../page/collection.vue'


import vuerouter from 'vue-router';
Vue.use(vuerouter)

let router = new vuerouter({
    routes: [{
            name: 'home',
            path: '/home',
            component: Home
        }, {
            name: 'list',
            path: '/list',
            component: List,
            meta: {
                requiresAuth: true
            }
        }, {
            name: 'cart',
            path: '/cart',
            component: Cart,
            meta: {
                requiresAuth: true
            }
        }, {
            name: 'login',
            path: '/login',
            component: Login
        }, {
            name: 'reg',
            path: '/reg',
            component: Reg
        }, {
            name: 'mine',
            path: '/mine',
            component: Mine,
            meta: {
                requiresAuth: true
            }
        }, {
            name: 'shop',
            path: '/shop',
            component: Shop,
        },
        //设置动态路由
        {
            name: 'goods',
            path: '/goods',
            component: Goods,
            // beforeEnter(to, form, next) {
            //     window.console.log('beforeEnter');
            //     next()
            // },
            meta: {
                requiresAuth: true
            }
        },
        {
            name: 'loginout',
            path: '/loginout',
            component: loginout
        }, {
            name: 'collection',
            path: '/collection',
            component: collection
        },
        {
            path: '/',
            redirect: '/home'
            // component:Home
        }, {
            name: 'Auction',
            path: '/auction',
            component: Auction
        },
        {
            name: 'Detail',
            path: '/detail',
            component: Detail,
            meta: {
                requiresAuth: true
            }
        }
    ]
})
router.beforeEach((to, form, next) => {
    if (to.meta.requiresAuth) {
        let Authorization = localStorage.getItem('Authorization');
        if (Authorization) {
            next();
            router.app.$axios.get('http://114.215.146.121:1911/verify', {
                headers: {
                    Authorization
                }
            }).then(({
                data
            }) => {
                if (data.status === 0) {
                    // $store.commit('logout');
                    next({
                        path: '/login',
                        query: {
                            redirectUrl: to.fullPath
                        }
                    })
                }
            })
        } else {
            next({
                path: '/login',
                query: {
                    redirectUrl: to.fullPath
                }
            })
        }
    } else {
        next()
    }
})
export default router