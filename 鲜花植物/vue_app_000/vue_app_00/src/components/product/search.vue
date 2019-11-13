<template>
    <div>
        <div class="zhe1">
            <div class="nav-btn"  @click="back"></div>
                <div class="editor-title-wrapper">
                <span class="page-title ellipsis">搜索</span>
            </div>
        </div>
        <mt-search v-model="value" cancel-text="取消" placeholder="搜索" ></mt-search>

        <div class="mrjx-con_1">
            <ul type="none">
                <li v-for="(item,i) of list" :key="i">
                    <a @click="jump1(item.gid)" data-id1=item.gid> 
                        <img :src="'http://127.0.0.1:4000/'+item.img" alt="" style="width:100%;height:120px;border-radius: 4px;">
                        <div class="photoDesc_1">{{item.title}}</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    
</template>
<script>
export default {
    data() {
        return {
            value:"",
            list:[]
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        jump1(a){
            console.log(1)
            this.$router.push({path:'/xiangqing',query:{id:a}});
        }
    },
    watch:{
        'value':function(){
            console.log(this.value);
            var url="search";
            var obj={value1:this.value};
            this.axios.get(
                url,
                {params:obj}
            ).then(res=>{
                console.log(res.data);
                this.list=res.data.data;
            })
        }
    }
}
</script>
<style>
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

.mint-search{
    height:58px !important;
    margin-top:50px !important;
}
.mint-search>.mint-searchbar{
    background: #fff !important;
    height:58px !important;
    padding:12px 15px !important;
}
.mint-searchbar-inner{
    border-radius: 17px !important;
    background: #f2f2f2 !important;
}
.mint-searchbar-inner .mintui-search {
    font-size: 20px !important;
}
.mint-searchbar-core{
    background: #f2f2f2 !important;
    padding-left:8px !important;
}
.mint-search-list{display:none !important;}
.mrjx-con_1{
    padding: 15px;
    box-sizing: border-box;
    background: white;
}
.photoDesc_1{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    max-height: 35px;
    font-size: 14px;
    color: #353535;
    margin-top: 6px;
    margin-bottom: 9px;
}
.mrjx-con_1 ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    margin: 0;
}
.mrjx-con_1 ul li{
    height:151px;
    width:  47.8%;
    margin-bottom: 10px;
}
a{
    text-decoration: none;
}
</style>