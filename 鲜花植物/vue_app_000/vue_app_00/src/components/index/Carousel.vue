<template>
  <div id="demo" class="carousel" :style="{width:innerWidth+'px'}" @mouseenter="stop" @mouseleave="start">
      <!--1.轮播图片-->
    <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
      <div class="carousel-inner menu-container" :class="ulClass" :style="ulStyle" ref="menuContainer">
        <div v-for="(item,i) of list" :key="i" class="carousel-item" :style="{width:innerWidth+'px'}">
          <div :title="item.title">
            <img :src="'http://127.0.0.1:4000/'+item.img" :style="{width:innerWidth+'px'}" @click="jump(item.gid)" :data-id="item.gid">
          </div>
          <div v-text="item.title"></div>
        </div>
        <div class="carousel-item" :style="{width:innerWidth+'px'}">
          <div :title="imgs[0].title">
            <img :src="'http://127.0.0.1:4000/'+imgs[0].img" :style="{width:innerWidth+'px'}"
            @click="jump" :data-id="imgs[0].gid">
          </div>
          <div v-text="imgs[0].title"></div>
        </div>
      </div>
    </v-touch>
    <!--2.左右箭头-->
    <a href="javascript:;" @click="move(1)" class="carousel-control-next">
        <span class="carousel-control-next-icon"></span>
    </a>
    <a href="javascript:;" @click="move(-1)" class="carousel-control-prev">
        <span class="carousel-control-prev-icon"></span>
    </a>
    <!--3.轮播指示符-->
    <ul class="carousel-indicators" type="none">
        <li v-for="(item,idx) of list" :key="idx" :class="idx==i?'active':''" @click="moveTo(idx)"></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Queue',
  data(){
    return {
      innerWidth:window.innerWidth,
      ulClass:{ hasTrans:true },
      i:0,
      list:[],
      imgs:[
        {gid: 13, img: "lh.jpg", title: "芦荟"} 
      ],
      canClick:true,
      timer:null
    }
  },
  created(){
    window.addEventListener("resize",()=>{
      this.innerWidth=window.innerWidth;
    })
    this.start();
    this.carousel();
  },
  methods:{
    swiperleft: function () {
     this.move(1)
    },
    swiperright: function () {
     this.move(-1)
    },
    jump(a){
            this.$router.push({path:'/xiangqing',query:{id:a}});
        },
    carousel(){
      var url="Product";
      var obj={id:9};
      this.axios.get(
          url,
          {params:obj}
      ).then(res=>{
          // console.log(res);
          this.list=res.data.data;
      })
    },
    stop(){
      clearInterval(this.timer);
    },
    start(){
      this.timer=setInterval(()=>{
        this.move(1);
      },3000)
    },
    move(i){
      if(this.canClick){
        this.canClick=false;
        if(i==-1&&this.i==0){
          this.ulClass.hasTrans=false;
          setTimeout(()=>{
            this.i=this.list.length;
            setTimeout(()=>{
              this.ulClass.hasTrans=true;
              this.i+=i;
              setTimeout(()=>{
                this.canClick=true;
              },200)
            },50)
          },50)
        }else if(i==1&&this.i==this.list.length-1){
          this.i+=i;
          setTimeout(()=>{
            this.ulClass.hasTrans=false;
            setTimeout(()=>{
              this.i=0;
              setTimeout(()=>{
                this.ulClass.hasTrans=true;
                setTimeout(()=>{
                  this.canClick=true;
                })
              },50)
            },50)
          },200)
        }else{
          this.i+=i;
          setTimeout(()=>{
            this.canClick=true;
          },300)
        }
      }
    },
    moveTo(i){
      if(this.canClick){
        this.i=i;
        this.canClick=false;
        setTimeout(()=>{
          this.canClick=true;
        },300)
      }
    }
  },
  computed:{
    ulStyle(){
      var width=this.innerWidth*(this.list.length+1)+"px";
      var marginLeft=-this.i*this.innerWidth+"px";  
      return { width, marginLeft }
    }
  }
}
</script>
<style scoped>
/* section>#carousel>.carousel-inner>div>a{
    display:block;
  } */
  section .carousel{
    overflow:hidden;
    height:180px;
    position: relative;
  }
  section .carousel:after{
    content:"";
    display:block;
    clear:both;
  }
   section .carousel .carousel-inner.hasTrans{
     transition:all .2s linear;
   }
  section .carousel .carousel-inner>.carousel-item{
    display:block;
    float:left;
    position: relative;
  }
  section .carousel .carousel-inner>.carousel-item img{
    height:180px;
  }
  section .carousel .carousel-inner>.carousel-item>div:last-child{
    text-align: left;
    display:block;
    height:35px;
    color:#fff;
    font-size:12px;
    text-decoration:none;
    background: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.16));
    width:100%;
    padding: 10px 10px 5px 10px;
    position: absolute;
    bottom:0;
    left:0;
    box-sizing: border-box;
    font-family: 微软雅黑,'microsoft yahei',宋体,新宋体,sans-serif;
  }
  /*重写指示符的样式*/
  .carousel-indicators{
    margin: 0;
    padding: 0 0 8px 0;
    position: absolute;
    right:0;
    bottom:0;
  }
  .carousel-indicators li{
    width:5px;height:5px;
    background-color:#fff;
    margin-left:6px;
    margin-right:6px;
    border-radius: 50%;
    display: inline-block;
  }
  .carousel-indicators>li:hover, .carousel-indicators>li.active{
    transform:scale(1.5)
  }
 
 
</style>


