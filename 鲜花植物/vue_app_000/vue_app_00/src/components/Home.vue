<template>
    <div>
        <!-- 头部 -->
        <!-- 消息面板 -->
       <mt-tab-container v-model="active">
           <mt-tab-container-item id="tab0">
               <index></index>
           </mt-tab-container-item>
           <mt-tab-container-item id="tab1">
               <product></product>
           </mt-tab-container-item>
           <mt-tab-container-item id="tab2">
               <yy></yy>
           </mt-tab-container-item>
           <mt-tab-container-item id="tab3">
               <me></me>
           </mt-tab-container-item>
       </mt-tab-container>
       <!-- 底部导航栏  start-->
        <mt-tabbar fixed v-model="active">
            <!-- 第一个按钮 微信 -->
            <mt-tab-item id="tab0" @click.native="changeState(0)">
                <tabbaricon :focused="
            list[0].isSelect" :selectedImage="require('../assets/index/0000010.png')" :normalImage="require('../assets/index/000002.png')">
                </tabbaricon>首页
            </mt-tab-item>
            <mt-tab-item id="tab1" @click.native="changeState(1)">
                <tabbaricon :focused="
            list[1].isSelect" :selectedImage="require('../assets/index/0000020.png')" :normalImage="require('../assets/index/0000012.png')">
                </tabbaricon>
            更多植物
            </mt-tab-item>
            <mt-tab-item id="tab2" @click.native="changeState(2)">
                <tabbaricon :focused="
            list[2].isSelect" :selectedImage="require('../assets/index/0000040.png')" :normalImage="require('../assets/index/0000032.png')">
                </tabbaricon>预约
            </mt-tab-item>
            <mt-tab-item id="tab3" @click.native="changeState(3)">
                <tabbaricon :focused="
            list[3].isSelect" :selectedImage="require('../assets/index/0000050.png')" :normalImage="require('../assets/index/0000042.png')">
                </tabbaricon>我的
            </mt-tab-item>
        </mt-tabbar>
        <!-- 底部导航栏  end-->
    </div>
</template>
<script>
//1.引入子组件 TitleBar.vue
import Index from './common/Index.vue'
import Product from './common/Product.vue'
import TabbarIcon from './common/TabbarIcon.vue'
import me from './common/me.vue'
import yy from './common/xiangmu.vue'
export default {
    data() {
        return {
            //保存当前显示子面板id
            active:"tab0",
            //创建数组保存tabbar状态
            list:[
                {isSelect:true},//首页
                {isSelect:false},//更多植物
                {isSelect:false},//预约
                {isSelect:false},//我的
            ],
            
        }
    }, 
    methods: {
        changeState(idx){
            for(var i=0;i<this.list.length;i++){
                if(i==idx){
                    sessionStorage.setItem("i",idx);
                    this.list[i].isSelect=true;
                }else{
                    this.list[i].isSelect=false;
                }
            }
        },
        
    },
    created(){
        var idx=sessionStorage.getItem("i")
        if(idx==null){
            idx=0;
            this.changeState(idx);
            this.active=`tab${idx}`;
        }else{
            this.changeState(idx);
            this.active=`tab${idx}`;
        }
    },
    //2.注册子组件
    components: {
        "index":Index,
        "product":Product,
        "tabbaricon":TabbarIcon,
        "me":me,
        "yy":yy
    },
}
</script>
<style scoped>
/* 1.修改tabbar中默认-灰和选择文字-绿 */
/* 文体颜色 */
/* 默认文体颜色 */
.mint-tabbar{
    height:50px;
    box-sizing: border-box;
}
.mint-tabbar>.mint-tab-item{
    color:#999;
}
/* 选中文字颜色 */
.mint-tabbar>.mint-tab-item.is-selected{
    background-color: transparent;
    color: rgb(87, 190, 173);
}
</style>
