<template>
    <div class="hh">
        <h1 class="hc">游戏&nbsp;&nbsp;&nbsp;{{st+1}}/10</h1>
       
        <p class="hc">体力值：<span class="spantil">{{til}}</span>&nbsp;&nbsp;&nbsp;生命值：<span class="spanlif">{{lif}}</span></p>
 
        <v-btn  @click="next" v-show="btn1">下一题</v-btn>
        <v-btn  @click="data5" v-show="st!=0">上一题</v-btn>
        <span class="ppp" v-if="ifp"></span>
                   <div class="mdiv">
                    <div class="mmdiv" :style="{'width':mmdivwidth()+'px','height':mmdivheight()+'px'}">
                    <div v-if="reFresh" v-for="(d, key1, index1) in dizhi" class="f" >
                          <div v-for="(dd, key2, index2) in d" class="ff im1" 

                        :class="classclass(key1,key2)" 

                           @click="data9(key1,key2)" :style="{'backgroundImage':bgcred(key1,key2)}" >
                             <span :style="{'color':bgc(key1,key2)}">{{ddt(key1,key2)}}</span>
                              <span :style="{'color':bgc2(key1,key2)}">{{ddt2(key1,key2)}}</span>


                          </div>
                         </div>
                    </div>
                     </div>


        
        <router-link to="/App"   ><v-btn>返回主页</v-btn></router-link>
        <v-input height=30px width=80px color="red" value="ff" v-model="haha" v-show="sss"></v-input>
        <v-btn @click="reset" v-show="sss" color="gray">重置</v-btn>
        <v-btn  @click="data7" v-show="ssss" color="gray">后退</v-btn>
        <v-btn  @click="data8" v-show="sss" color="gray">跳过</v-btn>


    </div>
</template>
<script>
    export default {
        props:['data1'],
        data () {
            return {
                st:this.$store.state.count.length,
                sstt:this.$store.state.count.length,
                fuzu:0,
                data3:this.data1,
                data4:[],
                data44:[],
                da4:[ [ 1, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
                coun:0,
                gamestatei:[0],
                gamestatej:[0],
                gamestatedizhi:["0 0"],
                dizhi:[["-100 +10","0 0","+1 0"],
               [   "0 0","0 0","+3 -1"],
               [   "0 +1","0 -1","+100 +10"]],
                haha:'',
                sss:true,
                ssss:true,
                begi:'',
                ifp:false,
                btn1:false,
                classred:'wr',
                classwhite:'ww',
                ssi:0,
                ssj:0,
                lif:3,
                til:3,
                s1:'im1',
                reFresh:true,
                
            }
        },
        computed:{
             




        },
        

        

        

        methods:{

         
         next:function(){
           this.coun=0;
           this.data4=[];
           this.data44=[];
           this.dat4=[];
           this.ssi=0;
           this.ssj=0;
           var shuzu=[];
           var dizhi2;
           this.gamestatei=[];
           this.gamestatej=[];
           this.gamestatedizhi=[];
           for(var name in this.data1){
          
           this.data4.push(this.data1[name]);
          
           }
          for(var name in this.data2){
          
           this.data44.push(this.data25[name]);
          
           }
            

           if (this.st<72)
           this.st++;
              if (this.st>this.sstt&&this.st>this.$store.state.count.length)
               { 
                   if (this.fuzu==1)
                    this.$store.commit('f1');
                   else
                     this.$store.commit('f2');


               }

             if (this.st>this.sstt)
             this.sstt=this.st;

                this.dizhi=JSON.parse(JSON.stringify(this.data4[this.st]));
                   

               this.da4=JSON.parse(JSON.stringify(this.dizhi));
              
                   for (var i=0;i<this.da4.length;i++)
                      for (var j=0;j<this.da4[0].length;j++)
                      {
                        
                      if ((this.da4[i][j].split(" "))[0]==="+100")
                      {this.lif=parseInt((this.da4[i][j].split(" "))[1]);
                       this.gamestatei.push(i);
                       this.gamestatej.push(j); 
                       this.gamestatedizhi.push(this.da4[i][j]);

                       }

                      if ((this.da4[i][j].split(" "))[0]==="-100")
                      {
                       this.ssi=i;
                       this.ssj=j;
                       shuzu=this.da4[i][j].split(" ");
                       

                      
                               this.til=parseInt(shuzu[1]);
                               this.da4[i][j]=1;
                       }
                      else
                      this.da4[i][j]=0;
                      }



              
              this.sss=true;
              this.ssss=true;
              this.ifp=false;
              this.haha='';
              this.btn1=false;
              this.reset();

         },
         data5:function(){
           this.coun=0;
           for(var name in this.data1){
           console.log(name); 
           this.data4.push(name);
          console.log(this.data1[name]);
           }
               if (this.st>0)
              this.st--;
              this.dizhi=this.data4[this.st];
             this.sss=true;
             this.ssss=true;
             this.ifp=false;
             this.haha='';
             this.reset();

         },
         reset:function(){
             this.coun=0;
           this.data4=[];
           this.data44=[];
           this.dat4=[];
           this.ssi=0;
           this.ssj=0;
           this.gamestatei=[0];
                this.gamestatej=[0];
                this.gamestatedizhi=["0 0"];
           var shuzu=[];
           var dizhi2;
           for(var name in this.data1){
          
           this.data4.push(this.data1[name]);
          
           }
          for(var name in this.data2){
          
           this.data44.push(this.data25[name]);
          
           }
            

           

                this.dizhi=JSON.parse(JSON.stringify(this.data4[this.st]));
                   

               this.da4=JSON.parse(JSON.stringify(this.dizhi));
              
                   for (var i=0;i<this.da4.length;i++)
                      for (var j=0;j<this.da4[0].length;j++)
                      {
                        
                      if ((this.da4[i][j].split(" "))[0]==="+100")
                      {this.lif=parseInt((this.da4[i][j].split(" "))[1]);
                       
                             


                       }

                      if ((this.da4[i][j].split(" "))[0]==="-100")
                      {
                       this.ssi=i;
                       this.ssj=j;
                       shuzu=this.da4[i][j].split(" ");
                       

                      
                               this.til=parseInt(shuzu[1]);
                               this.da4[i][j]=1;
                       }
                      else
                      this.da4[i][j]=0;
                      }



              
              this.sss=true;
              this.ssss=true;
              this.ifp=false;
              this.haha='';
              this.btn1=false;




         },
         data7:function(){
         if (this.gamestatei.length>1)
              {var ii=this.gamestatei.pop();
              var jj=this.gamestatej.pop();
              this.ssi=this.gamestatei[this.gamestatei.length-1];
              this.ssj=this.gamestatej[this.gamestatej.length-1];
            this.da4[ii][jj]=0;
            this.da4[this.ssi][this.ssj]=1;
             var str=this.gamestatedizhi.pop();
             var se=str.split(" ");
             this.til=this.til-parseInt(se[0])+1;
             this.lif-=parseInt(se[1]);
            



             this.dizhi[ii][jj]=str;




            this.ifp=!this.ifp;
               }


         },
         data8:function(){
               this.ifp=true;
               if (this.data4.length==0)
               this.begi='2001太空漫游';
               else
               this.begi=this.data4[this.st];

               this.fuzu=2;
               this.ssss=false;
               this.sss=false;
               this.btn1=true;


         },
         data9:function(key1,key2){






         if (this.til>0&&this.lif>0)
    if ((this.ssi==key1&&this.ssj==key2-1)||(this.ssi==key1&&this.ssj==key2+1)||(this.ssi==key1-1&&this.ssj==key2)||(this.ssi==key1+1&&this.ssj==key2))
                {
                this.gamestatei.push(key1);
                this.gamestatej.push(key2);
                this.gamestatedizhi.push(this.dizhi[key1][key2]);
                


                this.da4[key1][key2]=1;
                this.til--;
                this.da4[this.ssi][this.ssj]=0;
                
                

                var obj=this.dizhi[key1][key2].split(" ");
                var o1=parseInt(obj[0]);
                var o2=parseInt(obj[1]);
                
                
                  this.lif+=o2;
                  this.til+=o1;
                if (this.dizhi[key1][key2].split(" ")[0]==="+100")
                {
                this.ifp=!this.ifp;
                this.begi="succ";
                this.data8();
                }
                this.dizhi[this.ssi][this.ssj]="0 0";
                this.ssi=key1;
                this.ssj=key2;
                
                   



                }
             
                 
               
                 

         },
          bgcred:function(a,b){
          if (false)
          if (this.dizhi[a][b]==1)
              return 'url(../static/cover/egg.jpg)';
              else if (this.dizhi[a][b]==2)
              return 'url(../static/cover/dunkirk.png)';
             else if (this.dizhi[a][b]==-1)
              return 'url(../static/cover/sunRise.jpg)';
              else if (this.dizhi[a][b]==-100)
              return 'url(../static/cover/previousWork.png)';
              else 
              return 'url(../static/cover/qr_code.jpg)';
              },
              classclass:function(a,b){

                    if (this.da4[a][b]==1)
                    return 'wr';
                    else
                    return 'ww';



              },
              ddt:function(a,b){
                        var obj=this.dizhi[a][b].split(" ");
                       if (obj[0]==0&&obj[1]==0)
                    return obj[0];
                    else if (obj[0]==-100||obj[0]==100)
                    return obj[0];
                    else if(obj[0]==0)
                    return '';
                    else if (obj[1]==0)
                    return obj[0];
                    else
                    return obj[0];
                     

              },
              ddt2:function(a,b){
                     var obj=this.dizhi[a][b].split(" ");
                        if (obj[0]==0&&obj[1]==0)
                    return '';
                    else if (obj[0]==-100||obj[0]==100)
                    return '';
                    else if(obj[0]==0)
                    return obj[1];
                    else if (obj[1]==0)
                    return '';
                    else
                    return obj[1];
                     

                



              },
              bgc:function(a,b){
                    var obj=this.dizhi[a][b].split(" ");
                    if (obj[0]==0&&obj[1]==0)
                    return 'gray';
                    else if (obj[0]==-100||obj[0]==100)
                    return 'black';
                    else if (obj[0]==0)
                    return 'red';
                    else 
                    return 'green';
                    
                     
                


              },
               bgc2:function(a,b){
                    var obj=this.dizhi[a][b].split(" ");
                    if (obj[0]==0&&obj[1]==0)
                    return 'black';
                    else if (obj[0]==-100||obj[0]==100)
                    return 'gray';
                    else if (obj[1]==0)
                    return 'green';
                    else 
                    return 'red';


              },
              data20:function()
              {
                 ++this.kkk3;
              },
              mmdivwidth:function(){
                      
                            
                      return this.dizhi.length*85;

              },
              mmdivheight:function(){

                       return this.dizhi.length*85;


              }

        

        }

    }
</script>

<style>
.te
{
    height:40px;
    width:200px;
    border:none;
    border-bottom:1px solid blue;
}




.img_dizhi
{
   height:300px;
    width:300px;
}
.f
{
  float:left;
}

.ff
{
  height:60px;
  width:60px;
  margin:20px 10px 20px 10px;
  font-weight:bold;
  font-size:20px;
  line-height:60px;
  text-align:center;
  border:1px solid gray;
}

.wh
{
  color:black;
}
.wr
{
  color:red;
  background-color:gray;
}
.ww
{
  color:black;
}
.spanlif
{
  color:red;
  font-weight:bold;
  font-size:20px;
}
.spantil
{
  color:green;
   font-weight:bold;
  font-size:20px;
}
.hc{
  text-align:center;
}
.mdiv{
  margin:0 auto;
  height:300px;
  width:500px;
}
.mmdiv{
  margin:0 auto;
  clear:both;
}

</style>