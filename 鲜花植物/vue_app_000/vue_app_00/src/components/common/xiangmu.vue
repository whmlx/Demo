<template>
    <div>
        <div class="zhe1">        
                <div class="editor-title-wrapper">
                <span class="page-title ellipsis">预约商品</span>
            </div>
        </div>   
        <div id="anniu">
            <a data-id="tab1" @click="handle">全部</a>
            <a data-id="tab2" @click="handle">捕蝇草</a>
            <a data-id="tab3" @click="handle">竹芋</a>
        </div>
        <div class="context1">
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="tab1">
                    <qb></qb>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab2">
                    <bwc></bwc>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab3">
                    <zy></zy>
                </mt-tab-container-item>
            </mt-tab-container> 
        </div>
    </div>
</template>
<script>
import qb from '../yy/qb.vue'
import bwc from '../yy/bwc.vue'
import zy from '../yy/zy.vue'
export default {
  data(){
    return {
       active:"tab1"
    }
  },
  methods:{
    handle(event){
      var id = event.target.dataset.id;
      this.active = id;
    },
  },
  components:{
      qb,
      bwc,
      zy
  }
}
</script>
<style>
    *{
        margin:0;padding: 0;
    }
    .zhe1{
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
    .nav-btn{
    width: 9px;
    height: 15px;
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    cursor: pointer;
    background: url(../../assets/mbg01.png) no-repeat -874px -89px;
    }
    a{
        text-decoration:none;
    }
    #anniu{
        height: 35px;
        margin-top: 50px;
        background-color: #fff;
        line-height: 35px;
        display: flex;
        justify-content: space-around;
    }
    #anniu>a{
        width:50px;height: 30px;
        display: inline-block;
        text-align: center;
        margin:0;
    }
    #anniu>a:hover{
        color: green;
        border-bottom:2px solid green;
    }
    .context1{
        margin-bottom: 60px;
    }
    #d1>a,#d2>a,#d3>a{
        display: block;
        width: 345px;height: 305px;
        border-bottom: 1px solid #999;
        color: #000;
        margin-left: 15px;
    }
    #d1>a>img,#d2>a>img,#d3>a>img{
        width: 343px;height: 190px;
        margin-top:10px;
    }
    #d1>a>:nth-child(2),#d2>a>:nth-child(2),#d3>a>:nth-child(2){
        margin-top: 5px;
    }
    #d1>a>:nth-child(3),#d2>a>:nth-child(3),#d3>a>:nth-child(3){
        font-size: 14px;
        color: #999;
        overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
        margin-top:10px;
    }
    #d1>a>:last-child,#d2>a>:last-child,#d3>a>:last-child{
        margin-top:10px;
    }
    #d1>a>:last-child>:first-child,#d2>a>:last-child>:first-child,#d3>a>:last-child>:first-child{
        color: green;
        font-size: 14px;
    }
    #d1>a>:last-child>:nth-child(2),#d2>a>:last-child>:nth-child(2),#d3>a>:last-child>:nth-child(2){
        font-size: 14px;
        color: #999;
    }
    #d1>a>:last-child>:last-child,#d2>a>:last-child>:last-child,#d3>a>:last-child>:last-child{
        display: inline-block;
        width: 80px;height: 25px;
        background-color: rgb(87, 190, 173);
        text-align: center;
        line-height: 25px;
        font-size: 14px;
        color: #fff;
        border-radius: 15px;
        margin-left: 50px;
    }
</style>