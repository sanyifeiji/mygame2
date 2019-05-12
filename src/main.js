// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/* eslint-disable no-new */
// 引入路由
import router from "./router.js"    // import router 的router 一定要小写， 不要写成Router, 否则报 can't match的报错
import  VueResource  from 'vue-resource'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 
Vue.use(Vuetify)

Vue.use(VueResource)
Vue.use(Vuex)
const store=new Vuex.Store({
   state:{
   	 count:[],
   	 st0:0,
   	 sstt0:0
   },
   mutations:{
   	  f1 (state)
   	  {

        state.count.push(1);

   	  },
   	  f2 (state)
   	  {

        state.count.push(2);

   	  }
   }



});

new Vue({
  el: '#app',
  router,  // 注入到根实例中
  store,
  render: h => h(App)
})
