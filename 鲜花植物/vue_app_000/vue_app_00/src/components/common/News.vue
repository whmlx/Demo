<template>
    <div id="miniApp" class="miniApp">
        <div id="editor" class="editor">

            <div class="editor-caption" style="color: rgb(0, 0, 0); background: rgb(255, 255, 255);">
                <div class="nav-btn" @click="back"></div>
                <div class="editor-title-wrapper">
                    <span class="editor-title ellipsis">新闻资讯</span>
                </div>
                <div class="nav-rightbtn-group light">
                    <div class="divider"></div>
                    <div class="options-btn"></div>
                    <div class="close-btn"></div>
                </div>
            </div>

            <div class="editor-wrapper">
                <div class="nav-topnav-bar">
                            <div class="nav-topnav-wrap">
                                <div id="nav-topnav-scroll" class="nav-topnav-scroll">

                                    <div id="nav-topnav-list" class="nav-topnav-list ">
                                        <span id="item" class="topnav-item"  @click="changeState(0)" :class="{'topnav-item-active':this.add[0].isSelect==true}">
                                            <span data-id="tab1" @click="handle" :focused="
            add[0].isSelect" class="topnav-text" style="border-color: rgb(87, 190, 173); color: rgb(87, 190, 173);">全部</span>
                                        </span>
                                        <span id="item" class="topnav-item"  @click="changeState(1)" :class="{'topnav-item-active':this.add[1].isSelect==true}">
                                            <span data-id="tab2" :focused="
            add[1].isSelect" @click="handle" class="topnav-text" style="border-color: rgb(87, 190, 173); color: rgb(87, 190, 173);">行业资讯</span>
                                        </span>
                                        <span id="item" class="topnav-item"  @click="changeState(2)" :class="{'topnav-item-active':this.add[2].isSelect==true}">
                                            <span data-id="tab3" :focused="
            add[2].isSelect" @click="handle" class="topnav-text" style="border-color: rgb(87, 190, 173); color: rgb(87, 190, 173);">养花知识</span>
                                        </span>
                                        <span id="item" class="topnav-item"  @click="changeState(3)" :class="{'topnav-item-active':this.add[3].isSelect==true}">
                                            <span data-id="tab4" :focused="
            add[3].isSelect" @click="handle" class="topnav-text" style="border-color: rgb(87, 190, 173); color: rgb(87, 190, 173);">新闻动态</span>
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
            </div>
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="tab1">
                    <qb></qb>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab2">
                    <hy></hy>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab3">
                    <yh></yh>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab4">
                    <xw></xw>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
import qb from '../news/qb.vue'
import hy from '../news/hy.vue'
import yh from '../news/yh.vue'
import xw from '../news/xw.vue'
export default {
    data(){
        return {
            active:"tab1",
            add:[
                {isSelect:true},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false},
            ]
        }
    },
    components:{
        qb,
        hy,
        yh,
        xw
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        handle(event){
            var id=event.target.dataset.id;
            this.active=id;
        },
        changeState(idx){
            for(var i=0;i<this.add.length;i++){
                if(i==idx){
                    this.add[i].isSelect=true;
                }else{
                    this.add[i].isSelect=false;
                }
            }
        }
    },
}
</script>

<style  scoped>
.editor-caption{
    height: 49px;
    line-height: 49px;
    /* border-bottom: 1px solid #eee; */
    font-size: 17px;
    text-align: center;
    width: 100%;
    position: relative;
    position: fixed;
    top:0;
    z-index:20;
}
.editor-caption .nav-btn{
    width: 9px;
    height: 15px;
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    cursor: pointer;
    background: url(../../assets/mbg01.png?v=201909251255) no-repeat -874px -89px;
}

.editor-title-wrapper{
    text-align: center;
    position: relative;
    top: 0;
    left:50%;
    width:50px;
    margin-left:-50px; 
}

.editor-caption .editor-title{
    width: 110px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    vertical-align: middle;
    position: relative;
}

.editor-wrapper{
    margin-top:49px; 
    background: #fff;
}
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.nav-topnav-wrap {
    padding: 0 15px;
    position: relative;
    border: 1px dashed transparent;
}
.topnav-item {
    display: inline-block;
    text-align: center;
    margin-right: 13px;
    font-size: 14px;
    color: #353535;
    position: relative;
    flex-basis: auto;
}
.nav-topnav-list .topnav-item-active .topnav-text {
    color: #d02f3e;
    border-bottom: 2px solid #d02f3e;
}
.topnav-text {
    display: inline-block;
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
}
.nav-topnav-list .topnav-item:not(.topnav-item-active) .topnav-text {
    cursor: pointer;
    text-decoration: none;
    color: #000!important;
}

</style>