<template>
    <div class="product-app">
        <div class="header">
            <span>更多植物</span>
        </div>
        <!-- 搜索框 -->
        <div class="search">
            <div @click="jump">
                <input type="text" placeholder="搜索您感兴趣的植物">
                <i class="jz-input-icon"></i>
            </div>
        </div>
        <!-- 生机 -->
        <div class="sj">
            <div>V   I   T   A   L   I   T   Y</div>
            <div>生机</div>
        </div>
        <!-- 草本植物 -->
        <section class="cb">
            <div class="cb-title">
                <span class="lines left_lines"></span>
                草本植物
                <span class="lines right_lines"></span>
            </div>
            <cb></cb>
        </section>
        <!-- 水生植物 -->
        <section class="ss">
            <div class="ss-title">
                <span class="lines left_lines"></span>
                水生植物
                <span class="lines right_lines"></span>
            </div>
            <ss></ss>
        </section>
        <!-- 绿意 -->
        <div class="vs">
            <div>G   R   E   E   N</div>
            <div>绿意</div>
        </div>
        <!-- 木本植物 -->
        <section class="mb">
            <div class="mb-title">
                <span class="lines left_lines"></span>
                木本植物
                <span class="lines right_lines"></span>
            </div>
            <mb></mb>
        </section>
        <!-- 多肉植物 -->
        <section class="dr">
            <div class="dr-title">
                <span class="lines left_lines"></span>
                多肉植物
                <span class="lines right_lines"></span>
            </div>
            <dr></dr>
        </section>
        <!--  -->
        <div class="kb"></div>
    </div>
</template>
<script>
import cb from '../product/cb.vue'
import ss from '../product/ss.vue'
import mb from '../product/mb.vue'
import dr from '../product/dr.vue'
export default {
    data(){
        return{
           
        }
    },
    components:{
        cb,
        ss,
        mb,
        dr
    },
    methods: {
        jump(){
             this.$router.push("/search");
        }
    },
}
</script>
<style scoped>
.product-app{
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
/*搜索框*/
.search{
    margin-top:50px;
    margin-bottom: 9px;
    background-color: #fff;
    text-align: center;
    padding: 12px 15px;
    position: relative;
}
.search>div:first-child{
    border-radius: 17px;
    background: #f2f2f2;
    width: 100%;
    border: 1px solid transparent;
}
.search input{
    width: 100%;
    background-color: transparent;
    border: none;
    text-indent: 23px;
    height: 32px;
    outline: 0;
    font-size: 13px;
    font-family: 微软雅黑;
    color: #333;
    padding: 0 8px;
    text-overflow: ellipsis;
    box-sizing: border-box;
    border-radius: 2px;
    cursor: pointer;
}
.search i{
    position: absolute;
    width: 32px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    cursor: pointer;
    left: 17px;
    background: url(../../assets/mbg01.png?v=201910151820) no-repeat -1452px -141px;
}


/*生机*/
.sj{
    height:181px;
    margin-bottom: 9px;
    overflow: hidden;
    background-image: url(../../assets/product/banner-360-A.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
.sj>div:first-child{
    position: absolute;
    left: 17px;
    top: 50px;
    width: 151px;
    font-size: 12px;
    color: rgb(34, 75, 79);
    text-align: center;
    line-height: 17px;
    letter-spacing: 3px;
}
.sj>div:last-child{
    font-size: 48px;
    color: rgb(34, 75, 79);
    font-weight: bold;
    text-align: center;
    line-height: 53px;
    position: absolute;
    left: 47px;
    top: 75px;
}
/* 草本植物 */
.cb{
    background-color: #fff;
    margin-bottom: 9px;
    overflow: hidden;
}
.cb-title{
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
.cb-title span{
    display: inline-block;
    width: 12px;
    height: 1px;
    background-color: #d9d9d9;
    vertical-align: middle;
    position: relative;
    top: 1px;
}
/* 水生植物 */
.ss{
    background-color: #fff;
    margin-bottom: 9px;
    overflow: hidden;
}
.ss-title{
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
.ss-title span{
    display: inline-block;
    width: 12px;
    height: 1px;
    background-color: #d9d9d9;
    vertical-align: middle;
    position: relative;
    top: 1px;
}
/*绿意*/
.vs{
    height:182px;
    margin-bottom: 9px;
    overflow: hidden;
    background-image: url(../../assets/product/banner-360-B.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
.vs>div:first-child{
    font-size: 12px;
    color: rgb(34, 75, 79);
    text-align: center;
    line-height: 17px;
    position: absolute;
    top:50px;
    right:50px;
    letter-spacing:4px;
}
.vs>div:last-child{
    font-size: 48px;
    color: rgb(34, 75, 79);
    font-weight: bold;
    text-align: center;
    line-height: 53px;
    position: absolute;
    top:75px;
    right:50px;
}
/*木本植物 */
.mb{
    background-color: #fff;
    margin-bottom: 9px;
    overflow: hidden;
}
.mb-title{
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
.mb-title span{
    display: inline-block;
    width: 12px;
    height: 1px;
    background-color: #d9d9d9;
    vertical-align: middle;
    position: relative;
    top: 1px;
}
/*多肉植物 */
.dr{
    background-color: #fff;
    margin-bottom: 9px;
    overflow: hidden;
}
.dr-title{
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
.dr-title span{
    display: inline-block;
    width: 12px;
    height: 1px;
    background-color: #d9d9d9;
    vertical-align: middle;
    position: relative;
    top: 1px;
}
/**/
.kb{
    height:60px;
}
</style>


