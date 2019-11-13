<template>
    <div id="dd">
        <div class="zhe1">
            <div class="nav-btn"  @click="back"></div>
                <div class="editor-title-wrapper">
                <span class="page-title ellipsis">商品详情</span>
            </div>
        </div>
        <div id="dd1">
            <mt-swipe :show-indicators="false" id="lunbo">
                <mt-swipe-item><img :src="'http://127.0.0.1:4000/'+list.img" alt=""></mt-swipe-item>
                <mt-swipe-item><img :src="'http://127.0.0.1:4000/'+list.img" alt=""></mt-swipe-item>
                <mt-swipe-item><img :src="'http://127.0.0.1:4000/'+list.img" alt=""></mt-swipe-item>
            </mt-swipe>
            <p>{{list.title}}</p>
            <p>{{list.details}}</p>
            <div>
                <span>价格面议</span>
                <span>已预约：</span>
                <span>{{list2}}</span>
                <span>剩余：</span>
                <span>{{list.residue}}</span>
            </div>
        </div>
        <div id="dd2">
            <p>
                服务详情
            </p>
            <p>
                {{list.details}}
            </p>
        </div>
              <div class="kb"></div>
        <div id="dd3">

                 <span @click="actionSheet">
                    电话
                </span>
            <mt-actionsheet :actions= "actions" v-model="sheetVisible"></mt-actionsheet>
            <a href="javascript:;" id="yuyue" @click="jump(list.gid)">立即预约</a>
        </div>
    </div>
</template>
<script> 
export default {
    data(){
        return{
            list:{img:"tqc.jpg"},
            list1:[],
            list2:[],
            actions:[{
                name:'电话',
                method:this.getCamera},
                {
                name:'13755089157',
                method:this.getLibrary
            }],
            sheetVisible:false
        }
    },
    methods:{
        actionSheet:function(){
            this.sheetVisible=true;
        },
        getLibrary:function(){
            console.log("拨打电话");
        },
         back() {
            this.$router.go(-1);
        },
        jump(a){
            var uid=sessionStorage.getItem("Uid")
            if(!uid){
                this.$messagebox("消息","请登录");
                this.$router.push("/login")
            }else{
                this.$router.push({path:'/jies',query:{id:a}});
            }
            
        },
        sum:function(){
            var url="order_sum";
            console.log(this.list1.title)
            var obj={title:this.list1.title};
            this.axios.get(
                url,
                {params:obj}
            ).then(res=>{
                console.log(res.data.length);
                this.list2=res.data.length;
            })
        }
    },
    created(){
    var url="Product_1";
    this.id=this.$route.query.id;
        var obj={id:this.id};
        this.axios.get(
            url,
            {params:obj}
        ).then(res=>{
            // console.log(res);
            this.list=res.data.data[0];
            this.list1=res.data.data[0];
            console.log(this.list);
            console.log(this.list1)
            this.sum();
        })
    },
}
</script>
<style>
    *{
        margin: 0;padding: 0;
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
    #dd{
        background-color: #f1f1f1;
        text-align: left;
    }
    #dd1{
        display: block;
        color: #000;
        background-color: #fff;
        margin-bottom: 10px;
        margin-top: 50px;
        padding-bottom: 10px;
        padding-top: 10px;
    }
    #lunbo{
        width: 343px;height: 190px;
        margin-top:10px;
        margin-left: 15px;
    }
    img{
        width: 343px;height: 190px;
    }
    #dd1>:nth-child(2){
        margin-top: 5px;
        margin-left: 15px;
    }
    #dd1>:nth-child(3){
        font-size: 14px;
        color: #999;
        overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
        margin-top:10px;
        margin-left: 15px;
    }
    #dd1>:last-child{
        margin-top:10px;
        margin-left: 13px;
    }
    #dd1>:last-child>:first-child{
        color: green;
        font-size: 14px;
        margin-right: 5px;
    }
    #dd1>:last-child>:nth-child(2),#dd1>:last-child>:nth-child(4){
        font-size: 14px;
        color: #999;
    }
    #dd1>:last-child>:nth-child(3),#dd1>:last-child>:nth-child(5){
        margin-right: 5px;
        font-size: 14px;
        color: #999;
    }
    #dd2{
         background-color: #fff;
    }
    #dd2>:first-child{
        width: 100px; height: 20px;
        border-left: 3px solid #000;
        font-size: 14px;
        text-align: center;
        margin:0 10px;
        padding: 10px 0 5px 0;
        line-height: 20px;
    }
    #dd2>:last-child{
        letter-spacing:1.5px;
        margin:8px;
        font-size: 14px;
        color: #999;
        border-top: 1px solid #999;
        text-indent:28px;
        word-wrap: break-word;
        padding: 10px 0;
    }
    #dd3{
        padding:5px 0;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        position: fixed;
        bottom: 0;
        height: 50px;
        box-sizing: border-box;
    }
    #dd3>:first-child{
        display: inline-block;
        align-items: center;
        line-height: 40px;
    }
    #yuyue{
        display: inline-block;
        width: 291px;height: 40px;
        background-color: rgb(87, 190, 173);
        color: #fff;
        text-align: center;
        line-height: 40px;
        border-radius: 20px;
        margin-right: 20px;
    }
    .kb{
    height:60px;
    margin-bottom: 50px;
}
</style>