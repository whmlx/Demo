<template>
    <div class="index-app">
        <div class="header">
            <span>鲜花植物</span>
        </div>
        <!-- 背景图片 -->
        <div class="img">
            <div class="img_h">大  量  多  种  绿  植  &  花  卉  出  售  批  发</div>
            <div class="img_cen">
                <div>P   L   A   N   T</div>
                <div>绿植</div>
                <div>—</div>
                <div>花卉</div>
                <div>F   L   O   W   E   R</div>
            </div>
            <div class="img_f">欢  迎  选  购</div>
        </div>
        <!-- 导航栏 -->
        <section class="nav">
            <div class="nav-icon" >
                <a href="javascript:;"  @click="jump1">
                    <div class="nav-icon-img">
                        <img src="../../assets/index/cb.png" alt="">
                    </div>
                    <div class="nav-icon-text">草本植物</div>
                </a>
            </div>
            <div class="nav-icon">
                <a href="javascript:;"  @click="jump1">
                    <div class="nav-icon-img">
                        <img src="../../assets/index/mb.png" alt="">
                    </div>
                    <div class="nav-icon-text">木本植物</div>
                </a>
            </div>
            <div class="nav-icon">
                <a href="javascript:;"  @click="jump1">
                    <div class="nav-icon-img">
                        <img src="../../assets/index/tb.png" alt="">
                    </div>
                    <div class="nav-icon-text">藤本植物</div>
                </a>
            </div>
            <div class="nav-icon">
                <a href="javascript:;"  @click="jump1">
                    <div class="nav-icon-img">
                        <img src="../../assets/index/lk.png" alt="">
                    </div>
                    <div class="nav-icon-text">兰科植物</div>
                </a>
            </div>
            <div class="nav-icon">
                <a href="javascript:;"  @click="jump1">
                    <div class="nav-icon-img">
                        <img src="../../assets/index/ss.png" alt="">
                    </div>
                    <div class="nav-icon-text">水生植物</div>
                </a>
            </div>
            <div class="nav-icon">
                <a href="javascript:;"  @click="jump1">
                    <div class="nav-icon-img">
                        <img src="../../assets/index/qg.png" alt="">
                    </div>
                    <div class="nav-icon-text">球根植物</div>
                </a>
            </div>
            <div class="nav-icon">
                <a href="javascript:;"  @click="jump1">
                    <div class="nav-icon-img">
                        <img src="../../assets/index/sg.png" alt="">
                    </div>
                    <div class="nav-icon-text">宿根植物</div>
                </a>
            </div>
            <div class="nav-icon">
                <a href="javascript:;"  @click="jump1">
                    <div class="nav-icon-img">
                        <img src="../../assets/index/dr.png" alt="">
                    </div>
                    <div class="nav-icon-text">多肉植物</div>
                </a>
            </div>
        </section>
        <!-- 热门植物 -->
        <section class="rmzw">
            <div class="rmzw-title">
                <span class="lines left_lines"></span>
                热门植物
                <span class="lines right_lines"></span>
            </div>
            <carousel></carousel>
        </section>
        <!-- 每日精选 -->
        <section class="mrjx">
             <div class="mrjx-title">
                <span class="lines left_lines"></span>
                每日精选
                <span class="lines right_lines"></span>
            </div>
            <jx></jx>
        </section>
        <!-- 养护 -->
        <div class="yh" style="height:182px">
            <div>C   U   R   I   N   G</div>
            <div>养护</div>
        </div>
        <!-- 花卉养护知识 -->
        <section class="hf">
            <div class="hf-title">
                <div>花卉养护知识</div>
                <div><a href="javascript:;" @click="jump">查看全部></a></div>
            </div>
            <hf></hf>
        </section>
        <!-- 批量预约 -->
        <section class="yy">
            <div class="yy-title">
                <div>批量预约</div>
                <div><a href="javascript:;" @click="jump2">查看全部></a></div>
            </div>
            <yy></yy>
        </section>
        <!-- 门面环境 -->
        <div class="hj">
            <div class="hj-img">
                <div>门面环境</div>
            </div>
        </div>
        <!--  -->
        <div class="kb"></div>
    </div>
</template>
<script>
import carousel from '../index/Carousel.vue'
import jx from '../index/jx.vue'
import hf from '../index/hf.vue'
import yy from '../index/yy.vue'
export default {
    methods:{
        jump(){
            this.$router.push("/News");
        },
        jump1(){
            sessionStorage.setItem("i",1);
            this.$router.push("/Back");
        },
        jump2(){
            sessionStorage.setItem("i",2);
            this.$router.push("/Back");
        }
    },
    components:{
        carousel,
        jx,
        hf,
        yy
    },
}
</script>
<style scoped>
.index-app{
    margin-bottom:50px; 
    background-color: #f0f0f0;
}
.header{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    font-size: 17px;
    text-align: center;
    top:0;
    position: fixed;
    z-index: 100;
    background-color: #fff;
    box-sizing: border-box;
    width: 100%;
}
/* 背景图片 */
.img{
    background-image: url("../../assets/index/banner-750-A.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height:376px;
    position: relative;
    overflow: hidden;
    margin-bottom: 9px;
    margin-top: 50px;
}  
.img_h{
    height:37px;
    font-size: 12px;
    color: rgb(131, 204, 192);
    text-align: center;
    line-height: 37px;
}
.img_cen{
    margin: 0 auto;
    text-align: center;
    align-items: center;
    font-size: 12px;
    color: rgb(34, 75, 79);
    font-family: 微软雅黑,'microsoft yahei',宋体,新宋体,sans-serif;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -153.5px;
    margin-top:-91px ;
    width: 307px;
}
.img_cen>div:first-child,.img_cen>div:last-child{
    letter-spacing: 3px;
}
.img_cen>div:nth-child(2),.img_cen>div:nth-child(4){
    font-size: 48px;
    font-weight: bold;
    height:53px;
    line-height: 53px;
    padding:10px;
}
.img_cen>div:nth-child(3){
    font-size: 30px;
    height:10px;
    line-height: 10px;
    box-sizing: border-box; 
}
.img_f{
    font-size: 12px;
    color: rgb(131, 204, 192);
    text-align: center;
    line-height: 17px;
    position: absolute;
    left: 50%;
    bottom: 2%;
    margin-left: -153.5px;
    width: 307px;
}
/* 导航栏 */
.nav{
    padding:15px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
    margin-bottom: 9px;
    background-color: #fff;
}
.nav-icon{
    width: 86.25px;
    height: 81px;
}
.nav-icon-img{
    width: 45px;
    height:45px;
    text-align: center;
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 10px;
    border-radius: 50%;
    position: relative;
}
.nav-icon-img img{
    width: 45px;
    height:45px;
}
a{
     text-decoration: none;
}
ul{
    padding: 0;
    margin: 0;
}
.nav-icon-text{
    text-align: center;
    font-size: 12px;
    color: #595959;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    word-break: break-all;
}
/* 热门植物 */
.rmzw{
    background-color: #fff;
    margin-bottom: 9px;
    overflow: hidden;
}
.rmzw-title{
    height:50px;
    text-align: center;
    line-height: 50px;
    font-size: 15px;
    color: #353535;
    border-bottom:1px solid #f0f0f0;
    box-sizing: border-box;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.rmzw-title span{
    display: inline-block;
    width: 12px;
    height: 1px;
    background-color: #d9d9d9;
    vertical-align: middle;
    position: relative;
    top: 1px;
}
/*每日精选*/
.mrjx{
    background-color: #fff;
    margin-bottom: 9px;
    overflow: hidden;
}
.mrjx-title{
    height:50px;
    text-align: center;
    line-height: 50px;
    font-size: 15px;
    color: #353535;
    border-bottom:1px solid #f0f0f0;
    box-sizing: border-box;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mrjx-title span{
    display: inline-block;
    width: 12px;
    height: 1px;
    background-color: #d9d9d9;
    vertical-align: middle;
    position: relative;
    top: 1px;
}

/*养护*/
.yh{
    background-image: url(../../assets/index/banner-360-C.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
    margin-bottom: 9px;
    color:#224b4f;
    font-family: 微软雅黑,'microsoft yahei',宋体,新宋体,sans-serif;
}
.yh>div:first-child{
    position: absolute;
    left: 220px;
    top: 50px;
    width: 153px;
    letter-spacing: 3px;
    font-size: 14px;
}
.yh>div:last-child{
    font-size: 48px;
    color: rgb(34, 75, 79);
    font-weight: bold;
    position: absolute;
    right:55px;
    top:70px;
}
/*花卉养护知识*/
.hf{
    background-color: #fff;
    margin-bottom: 9px;
    overflow: hidden;
}
.hf-title{
    height:50px;
   line-height: 50px;
   display: flex;
   justify-content: space-between;
    font-size: 15px;
    color: #353535;
    border-bottom:1px solid #f0f0f0;
    box-sizing: border-box;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.hf-title div{
    display: inline-block;
}
.hf-title>div:first-child{
    margin-left: 15px;
    font-size: 15px;
    color: #353535;
}
.hf-title>div:last-child a{
    font-size: 12px;
    color: #9b9b9b;
    cursor: pointer;
    margin-right: 15px;
}
/*批量预约*/
.yy{
    background-color: #fff;
    margin-bottom: 9px;
    overflow: hidden;
}
.yy-title{
    height:50px;
   line-height: 50px;
   display: flex;
   justify-content: space-between;
    font-size: 15px;
    color: #353535;
    border-bottom:1px solid #f0f0f0;
    box-sizing: border-box;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.yy-title div{
    display: inline-block;
}
.yy-title>div:first-child{
    margin-left: 15px;
    font-size: 15px;
    color: #353535;
}
.yy-title>div:last-child a{
    font-size: 12px;
    color: #9b9b9b;
    cursor: pointer;
    margin-right: 15px;
}
/*门面环境*/
.hj{
    height:220px;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #fff;
    padding:10px 15px;
    
}
.hj-img{
    height:200px;
    width:100%;
    background-image: url(../../assets/index/hj.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
}
.hj-img>div{
    width: 100%;
    height: 30px;
    padding: 0 5px;
    margin-bottom: 0;
    position: absolute;
    bottom: 0;
    font-size: 12px;
    background-color: rgba(0,0,0,.2);
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
/**/
.kb{
    height:60px;
}
</style>
