<template>
  <div id="app"> 
     <header >
     
    <!-- router-link 定义点击后导航到哪个路径下 -->
    <div @click="hclick">
      <router-link to="/home" class="rrr" v-if="show" ><img src="../static/cover/sunRise.jpg" class="ee">游戏</router-link>
      <router-link to="/about" class="rrr" v-show="show"  ><img src="../static/cover/egg.jpg" class="ee">指示</router-link>
       <router-link to="/end" class="rrr" v-show="show"  ><img src="../static/cover/dunkirk.png" class="ee">积分榜</router-link>
      </div>
    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view :data1="seller" ></router-view>   
  </div>
</template>

<script>
import heade from './header1'
export default {
  data:function (){
  return {show:true,
          seller:{},
          }
  },
  created(){
    this.$http.get('/api/seller').then((response) =>{
           response=response.body;
           this.seller=response.data;

    });
     },


  components:{heade},
  methods:{
  hclick:function(){
  this.show=!this.show;
  
  }
  }
}
</script>


<style>
#app .ee
{
    height:50PX;
    width:50px;
}

#app header
{   height:40px;
    width:500px;
    margin:30px 100px;
}

</style>