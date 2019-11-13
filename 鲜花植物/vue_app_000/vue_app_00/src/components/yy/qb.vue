<template>
        <div  id="d1">
            <a href="javascript:;" v-for="(item,i) of list" :key="i" @click="jump(item.gid)">
                <img :src="'http://127.0.0.1:4000/'+item.img" alt="">
                <p>{{item.title}}</p>
                <p>{{item.details}}</p>
                <div>
                    <div>
                        <span>价格面议</span>
                        <span>已预约：{{item.subscribe}}剩余：{{item.residue}}</span>
                    </div>
                    <span>立即预约</span>
                </div>
            </a>
        </div>
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
            var url="Product";
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
    #d1{
        background: #fff;
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
    #d1>a>:last-child{
        margin-top:20px;
        display: flex;
        justify-content: space-between;
    }
    #d1>a>:last-child>:first-child{
        color: green;
        font-size: 14px;
    }
     #d1>a>:last-child>div{
         line-height: 25px;
     }
    #d1>a>:last-child>div>:nth-child(2){
        font-size: 14px;
        color: #999;
    }
    #d1>a>:last-child>:last-child{
        display: inline-block;
        width: 80px;height: 25px;
        background-color: rgb(87, 190, 173);
        text-align: center;
        line-height: 25px;
        font-size: 14px;
        color: #fff;
        border-radius: 15px;
    }
</style>