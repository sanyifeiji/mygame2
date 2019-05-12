import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./home.vue";
import about from "./about.vue";
import end from "./end.vue";
import App from "./App.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/home",
        component: home
    },
    {
        path: "/about",
        component: about
    },
    {
        path:"/end",
        component: end
    },
     {
        path:"/App",
        component: App
    },
    
]

var router = new VueRouter({
  routes,

})
export default router