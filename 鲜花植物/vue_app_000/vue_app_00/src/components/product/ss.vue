<template>
        <div class="mrjx-con">
            <ul type="none" :style="{width:(list.length*155.113)%canWidth+'%'}">
                <li v-for="(item,i) of list" :key="i" @click="jump(item.gid)">
                    <img :src="'http://127.0.0.1:4000/'+item.img">
                    <div class="photoDesc">{{item.title}}</div>
                </li>
            </ul>    
        </div>
</template>
<script>
export default {
    data() {
        return {
            list:[],
            canWidth:window.width
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
            var url="Product";
            var obj={id:5};
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
    height:172px;
    padding:15px 10px;
    overflow: hidden;
    box-sizing: border-box;
}
ul{
    display: flex;
    margin: 0;
    padding:0;
    overflow-x: auto
}
li{
    display: block;
    width: 134.113px !important;
    margin-right: 11px;
    box-sizing: border-box;
}
li img{
    width: 134.113px !important;
    height: 99px;
    border-radius: 4px 4px 0 0;
}
.photoDesc{
    width: 100%;
    background: #fff;
    padding: 13px 10px;
    font-size: 12px;
    color: #353535;
    border: 1px solid #f1f1f1;
    border-top: none;
    border-radius: 0 0 4px 4px;
    box-sizing: border-box;
}
</style>

