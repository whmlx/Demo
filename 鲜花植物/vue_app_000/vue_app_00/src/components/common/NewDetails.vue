<template>
    <div id="miniApp" class="miniApp">
        <div id="editor" class="editor">

            <div class="editor-caption" style="color: rgb(0, 0, 0); background: rgb(255, 255, 255);">
                <div class="nav-btn"  @click="back"></div>
                <div class="editor-title-wrapper">
                    <span class="page-title ellipsis">文章详情</span>
                </div>
                <div class="nav-rightbtn-group light">
                    <div class="divider"></div>
                    <div class="options-btn"></div>
                    <div class="close-btn"></div>
                </div>
            </div>

            <div class="editor-wrapper">
                <div class="news-wrapper">
                    <div class="news-detail">
                        <h1 class="news-detail-title">{{list.xh_news_title}}</h1>
                        <span class="news-detail-time">{{list.xh_news_date}}</span>
                        <span class="news-detail-read">阅读 101</span>
                        <div class="news-detail-content">
                            <p><span>{{list.xh_news_content}}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="kb"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[],
            id:"",
        }
    },
    created() {
        var url="News_2";
        this.id=this.$route.query.id;
            var obj={id:this.id};
            this.axios.get(
                url,
                {params:obj}
            ).then(res=>{
                // console.log(res);
                this.list=res.data.data[0];
                // console.log(this.list);
            })
    },
    methods: {
         back() {
            this.$router.go(-1);
        },
    },
}
</script>

<style  scoped>
.miniApp{
    background-color: #f0f0f0;
}
.editor-caption{
    height: 49px;
    line-height: 49px;
     border-bottom: 1px solid #eee;
    font-size: 17px;
    text-align: center;
    position:fixed;
    top: 0;
    z-index: 2;
    width: 100%;
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
    background: url(../../assets/mbg01.png) no-repeat -874px -89px;
}
.editor-title-wrapper{
    text-align: center;
    position: relative;
    top: 0;
    width:80px;
    left:60%;
    margin-left: -80px;
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
}
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.news-detail {
    padding: 15px;
    background-color: #fff;
}
.news-detail .news-detail-title {
    font-size: 20px;
    color: #353535;
    margin-bottom: 5px;
    line-height: 28px;
    padding-right: 30px;
    word-wrap: break-word;
}
.news-detail .news-detail-time {
    font-size: 11px;
    color: #afb1af;
    margin-right: 18px;
}
.news-detail .news-detail-read {
    font-size: 11px;
    color: #afb1af;
}
.news-detail-content{
    padding: 10px 0;
    font-size:14px
}
.kb{
    height:60px;
    background-color: #f0f0f0;
}
</style>