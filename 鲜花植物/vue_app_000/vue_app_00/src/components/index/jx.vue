<template>
    <div class="mrjx-con">
                <ul type="none">
                    <li v-for="(item,i) of list" :key="i">
                        <a href="javascript:;" @click="jump(item.gid)"> 
                            <img :src="'http://127.0.0.1:4000/'+item.img" alt="" style="width:100%;height:120px;border-radius: 4px;">
                            <div class="photoDesc">{{item.title}}</div>
                        </a>
                    </li>
                </ul>
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
            this.$router.push({path:'/xiangqing',query:{id:a}});
        },
        show(){
            var url="All";
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
.mrjx-con{
    padding: 15px;
    box-sizing: border-box;
}
.photoDesc{
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
.mrjx-con ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    margin: 0;
}
.mrjx-con ul li{
    height:151px;
    width:  47.8%;
    margin-bottom: 10px;
}
a{
    text-decoration: none;
}
</style>

