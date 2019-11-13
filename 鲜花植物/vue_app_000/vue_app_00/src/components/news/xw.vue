<template>
    <div class="color">
        <div class="news-item" @click="jump(item.xh_news_id)" v-for="(item,i) of list" :key="i" >
            <a class="news-item-wrapper">
                <div class="news-img">
                    <img :src="'http://127.0.0.1:4000/'+item.xh_news_img" alt="">
                </div>
                <div class="news-info">
                    <div class="info-wrapper">
                        <h2 class="news-title">
                        <!---->{{item.xh_news_title}}</h2>
                        <p class="news-abstract">{{item.xh_news_content}}</p>
                        <span class="news-time">{{item.xh_news_date}}</span>
                    </div>
                </div>
            </a>
        </div>                           
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[]
        }
    },
    created() {
        this.show();
    },
    methods: {
        jump(a){
            console.log(a);
            this.$router.push({path:'/NewDetails',query:{id:a}});
        },
        show(){
            var url="News_3";
            var obj={name:"新闻动态"};
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
.color{
    background: #fff;
}
    .news-item {
    padding: 15px 15px 15px 15px;
    cursor: pointer;
    text-align: left;
}
.news-item-wrapper {
    display: inline-block;
    width: 100%;
    position: relative;
}
.news-img {
    float: right;
    margin-left: 25px;
}
.news-img img {
    width: 80px;
    height: 60px;
    border-radius: 4px;
    border: 1px solid #f1f1f1;
}
img {
    border: 0;
    vertical-align: top;
}
.news-item-wrapper .news-info {
    min-height: 62px;
}
.news-title {
    font-size: 14px;
    color: #353535;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
}
h2{
    font-weight: bold;
}
.news-abstract {
    color: #a9a9a9;
    /* margin-top: 5px; */
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-height: 19px;
}
.news-time {
    font-size: 9px;
    color: #afb1af;
    position: absolute;
    left: 0;
    bottom: -2px;
    margin-bottom: 7px;
}


.news-item-wrapper:after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    background: #eee;
    position: absolute;
    left: 0;
    bottom: -15px;
}
</style>