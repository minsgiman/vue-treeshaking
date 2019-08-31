import Vue from 'vue';
import VueRouter from 'vue-router';
import 'es6-promise/auto';
import app from './app';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '*', component: () => import(/* webpackChunkName: "login" */ './pages/login')},
        {path: '/guide', component: () => import(/* webpackChunkName: "guide" */ './pages/guide')}
    ]
});

const vueApp = new Vue({
    el: '#app',
    router,
    template: '<app/>',
    components: { app }
});