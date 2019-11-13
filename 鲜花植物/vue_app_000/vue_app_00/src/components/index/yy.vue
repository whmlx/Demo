<template>
    <ul type="none">
        <li v-for="(item,i) of list" :key="i">
            <a href="javascript:;" @click="jump(item.gid)">
                <img :src="'http://127.0.0.1:4000/'+item.img" width="100%" height="190px">
                <div class="text">{{item.title}}</div>
                <div class="text1">{{item.details}}</div>
                <div class="wrap">
                    <div>
                        <span>价格面议</span>
                        <span>已预约：{{item.subscribe}}</span>
                        <span>剩余：{{item.residue}}</span>
                    </div>
                    <div>立即预约</div>
                </div>               
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
            this.$router.push({path:'/xiangqing',query:{id:a}});
        },
        show(){
            var url="Product_2";
            var obj={id:10};
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
    padding: 0 15px 15px;
    overflow: hidden;
    box-sizing: border-box;
}
section>ul li{
    padding-bottom: 10px;
    margin-top: 15px;
    border-radius: 8px;
    border-bottom: 1px solid #eee;
    position: relative;
    cursor: pointer;
    height:298px;
    box-sizing: border-box;
}
a{
    text-decoration: none;
    font-family: 微软雅黑,'microsoft yahei',宋体,新宋体,sans-serif;
}
.text{
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    font-size: 14px;
    color: #333;
}
.text1{
    height:14px;
    font-size: 12px;
    margin-top: 14px;
    color: #888;
    max-height: 2.8em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.wrap{
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    overflow: hidden;
}

.wrap>div:first-child>span:first-child{
    color: rgb(87, 190, 173);
    font-size: 13px;
}
.wrap>div:first-child>span:nth-child(2), .wrap>div:first-child>span:last-child{
    margin-left: 4px;
    font-size: 12px;
    color: #989898;
    line-height: 26px;
}
.wrap>div:last-child{
    background-color: rgb(87, 190, 173);
    width: 80px;
    height: 26px;
    line-height: 26px;
    font-size: 12px;
    border-radius: 13px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    vertical-align: bottom;
    display: inline-block;
}
</style>


