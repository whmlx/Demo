<template>
    <ul type="none">
        <li v-for="(item,i) of list" :key="i" @click="jump(item.xh_news_id)" :data-id="item.xh_news_id">
            <a href="javascript:;">
                <div><img :src="'http://127.0.0.1:4000/'+item.xh_news_img" style="width:80px;height:60px;border-radius: 4px;
    border: 1px solid #f1f1f1;"></div>
                <div>
                    <h2 class="news-title">{{item.xh_news_title}}</h2>
                    <p class="news-abstract">{{item.xh_news_content}}</p>
                </div>
                <span class="news-time">{{item.xh_news_date}}</span>
            </a>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            list:[],
            
        }
    },
    created() {
        this.show();
    },
    methods: {
        jump(a){
            this.$router.push({path:'/NewDetails',query:{id:a}});
        },
        show(){
            var url="News";
            var obj={};
            this.axios.get(
                url,
                {params:obj}
            ).then(res=>{
                // console.log(res);
                this.list=res.data.data;
                // console.log(this.list);
            })
        },
    },
}
</script>
<style scoped>
section>ul{
    overflow: hidden;
    box-sizing: border-box;
}
a{
    text-decoration: none;
    display: inline-block;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    text-align: left;
}
li{
    padding: 15px 15px 15px 15px;
    cursor: pointer;
    height:94px;
    box-sizing: border-box;
    border-top: 1px solid #f0f0f0;
    overflow: hidden;
}
li div:first-child{
    overflow: hidden;
    position: absolute;
    right:0;
    display: inline-block;
    margin-left: 25px;
}
li div:nth-child(2){
    display: inline-block;
    max-height: 40px;
    overflow: hidden;
    margin-right: 110px;
}
h2{
    font-size: 14px;
    font-weight: initial;
    color: #353535;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
    margin: 0;
    max-height: 17px;
}
p{
    color: #9b9b9b;
    margin-top: 4px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-height: 19px;
}
span{
    font-size: 9px;
    color: #afb1af;
    position: absolute;
    left: 0;
    bottom: -18px;
}
</style>

