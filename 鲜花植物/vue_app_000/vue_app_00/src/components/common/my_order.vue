<template>
    <div id="bj">
        <div class="zhe1">
            <div class="nav-btn"  @click="back"></div>
                <div class="editor-title-wrapper">
                <span class="page-title ellipsis">我的订单</span>
            </div>
        </div>
        <!-- <mt-navbar v-model="selected"  @click.native="OrderList">
            <mt-tab-item id="1">全部</mt-tab-item>
            <mt-tab-item id="2" data-status="2">待支付</mt-tab-item>
            <mt-tab-item id="3" data-status="4">进行中</mt-tab-item>
            <mt-tab-item id="4" data-status="1">已完成</mt-tab-item>
            <mt-tab-item id="5" data-status="3">已取消</mt-tab-item>
        </mt-navbar> -->
        <ul id="order_nav" @click="order_status">
            <li @click="nav_true(i)" v-for="(n,i) of nav" :key="i" :class="b===i?'active':''" :data-i=i>{{n}}</li>
        </ul>
        <div class="clear"></div>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="order-content" v-for="(a, i) of list" :key="i" @click="order_details(i)">
                    <div class="order-item-wrap">
                        <div class="order-item-header">
                            <span class="fr">订单号：{{list[i].OrderNumber}}</span>
                            <span class="fl" style="color: rgb(87, 190, 173);">{{list[i].OrderStatus==1?"待支付":list[i].OrderStatus==2?"进行中":list[i].OrderStatus==3?"已完成":"已取消"}}</span>
                        </div>
                        <div class="order-item-content">
                            <div class="order-img-wrap"></div>
                            <div class="order-info-wrap">
                                <div class="order-name ellipsis">
                                    {{list[i].Ordertitle}}
                                </div>
                                <div class="order-abstract ellipsis">
                                    {{list[i].OrderDetails}}
                                </div>
                                <div class="order-price-wrap">
                                    <span class="selling-price">￥{{list[i].OrderNewPrice}}</span>
                                    <span class="original-price">￥{{list[i].OrderOldPrice}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="order-item-footer">
                            <button class="order-btn">取消预约</button>
                        </div>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="order-content" v-for="(a, i) of status_list" :key="i" @click="order_status_details(i)">
                    <div class="order-item-wrap">
                        <div class="order-item-header">
                            <span class="fr">订单号：{{status_list[i].OrderNumber}}</span>
                            <span class="fl" style="color: rgb(87, 190, 173);">{{status_list[i].OrderStatus==1?"待支付":status_list[i].OrderStatus==2?"进行中":status_list[i].OrderStatus==3?"已完成":"已取消"}}</span>
                        </div>
                        <div class="order-item-content">
                            <div class="order-img-wrap"></div>
                            <div class="order-info-wrap">
                                <div class="order-name ellipsis">
                                    {{status_list[i].Ordertitle}}
                                </div>
                                <div class="order-abstract ellipsis">
                                    {{status_list[i].OrderDetails}}
                                </div>
                                <div class="order-price-wrap">
                                    <span class="selling-price">￥{{status_list[i].OrderNewPrice}}</span>
                                    <span class="original-price">￥{{status_list[i].OrderOldPrice}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="order-item-footer">
                            <button class="order-btn">取消预约</button>
                        </div>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div class="order-content" v-for="(a, i) of status_list" :key="i" @click="order_status_details(i)">
                    <div class="order-item-wrap">
                        <div class="order-item-header">
                            <span class="fr">订单号：{{status_list[i].OrderNumber}}</span>
                            <span class="fl" style="color: rgb(87, 190, 173);">{{status_list[i].OrderStatus==1?"待支付":status_list[i].OrderStatus==2?"进行中":status_list[i].OrderStatus==3?"已完成":"已取消"}}</span>
                        </div>
                        <div class="order-item-content">
                            <div class="order-img-wrap"></div>
                            <div class="order-info-wrap">
                                <div class="order-name ellipsis">
                                    {{status_list[i].Ordertitle}}
                                </div>
                                <div class="order-abstract ellipsis">
                                    {{status_list[i].OrderDetails}}
                                </div>
                                <div class="order-price-wrap">
                                    <span class="selling-price">￥{{status_list[i].OrderNewPrice}}</span>
                                    <span class="original-price">￥{{status_list[i].OrderOldPrice}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="order-item-footer">
                            <button class="order-btn">取消预约</button>
                        </div>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <div class="order-content" v-for="(a, i) of status_list" :key="i" @click="order_status_details(i)">
                    <div class="order-item-wrap">
                        <div class="order-item-header">
                            <span class="fr">订单号：{{status_list[i].OrderNumber}}</span>
                            <span class="fl" style="color: rgb(87, 190, 173);">{{status_list[i].OrderStatus==1?"待支付":status_list[i].OrderStatus==2?"进行中":status_list[i].OrderStatus==3?"已完成":"已取消"}}</span>
                        </div>
                        <div class="order-item-content">
                            <div class="order-img-wrap"></div>
                            <div class="order-info-wrap">
                                <div class="order-name ellipsis">
                                    {{status_list[i].Ordertitle}}
                                </div>
                                <div class="order-abstract ellipsis">
                                    {{status_list[i].OrderDetails}}
                                </div>
                                <div class="order-price-wrap">
                                    <span class="selling-price">￥{{status_list[i].OrderNewPrice}}</span>
                                    <span class="original-price">￥{{status_list[i].OrderOldPrice}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="order-item-footer">
                            <button class="order-btn">取消预约</button>
                        </div>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
                <div class="order-content" v-for="(a, i) of status_list" :key="i" @click="order_status_details(i)">
                    <div class="order-item-wrap">
                        <div class="order-item-header">
                            <span class="fr">订单号：{{status_list[i].OrderNumber}}</span>
                            <span class="fl" style="color: rgb(87, 190, 173);">{{status_list[i].OrderStatus==1?"待支付":status_list[i].OrderStatus==2?"进行中":status_list[i].OrderStatus==3?"已完成":"已取消"}}</span>
                        </div>
                        <div class="order-item-content">
                            <div class="order-img-wrap"></div>
                            <div class="order-info-wrap">
                                <div class="order-name ellipsis">
                                    {{status_list[i].Ordertitle}}
                                </div>
                                <div class="order-abstract ellipsis">
                                    {{status_list[i].OrderDetails}}
                                </div>
                                <div class="order-price-wrap">
                                    <span class="selling-price">￥{{status_list[i].OrderNewPrice}}</span>
                                    <span class="original-price">￥{{status_list[i].OrderOldPrice}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="order-item-footer">
                            <button class="order-btn">取消预约</button>
                        </div>
                    </div>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nav:["全部","待支付","进行中","已完成","已取消"],
            selected:"1",
            b:0,
            list:[],
            status_list:[]
        }
    },
    methods:{
        back() {
            this.$router.go(-1);
        },
        nav_true(i){
            console.log(i);
            this.b=i;
            if(i===0){
                this.selected="1";
            }else if(i===1){
                this.selected="2";
            }
            else if(i===2){
                this.selected="3";
            }
            else if(i===3){
                this.selected="4";
            }else if(i===4){
                this.selected="5";
            }
        },
        order_status(e){
            var status=e.target.dataset.i;
            var Uid = sessionStorage.getItem("Uid");

            var url="order_status";
            var obj={Uid:Uid,status:status};
            this.axios.get(
                url,
                {params:obj}    
            ).then(res=>{
                console.log(res.data);
                var status_list=this.status_list.concat(res.data);
                this.status_list=status_list;
                console.log(status_list);
            })
         this.status_list=[];
        },
        order_details(i){
            var Oid=this.list[i].Oid;
            console.log(Oid);
            this.$router.push({
                //跳转的页面
                path: '/order_details',
                //跳转传出的参数
                query: {
                    Oid:Oid
                }
            })
        },
        order_status_details(i){
            var Oid=this.status_list[i].Oid;
            console.log(Oid);

            this.$router.push({
                //跳转的页面
                path: '/order_details',
                //跳转传出的参数
                query: {
                    Oid:Oid
                }
            })
        }
    },
    mounted(){

    },
    created(){
        var selected= this.$route.query.selected;
        console.log(selected);
        if(selected!=undefined){
            this.selected=selected;
            this.b=selected-1;

            var Uid = sessionStorage.getItem("Uid");
            var status=selected-1
            var url="order_status";
            var obj={Uid:Uid,status:status};
            this.axios.get(
                url,
                {params:obj}    
            ).then(res=>{
                console.log(res.data);
                var status_list=this.status_list.concat(res.data);
                this.status_list=status_list;
                console.log(status_list);
            })
         this.status_list=[];
        }
        // console.log(selected);
        

        var Uid = sessionStorage.getItem("Uid");
        console.log(Uid);
        var url="order";
        var obj={Uid:Uid};
        this.axios.get(
            url,
            {params:obj}
        ).then(res=>{
            // console.log(res.data);
            var list=this.list.concat(res.data);
            this.list=list;
            // console.log(list);
        })
    }
}
</script>

<style scoped>
    #bj{
        background: #f5f5f5;
        text-align: center;
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
    .mint-navbar .mint-tab-item.is-selected{
        color: rgb(87, 190, 173);
        border-color: rgb(87, 190, 173);
    }
    .order-item-wrap{
        padding: 0 15px;
        margin-top: 9px;
        background-color: #fff;
        cursor: pointer;
    }
    .order-item-header{
        height: 49px;
        line-height: 49px;
        border-bottom: 1px solid #eee;
    }
    .fr{
        float:left;
    }
    .fl{
        float: right;
    }
    .order-item-content{
        padding: 15px 15px 15px 0;
        overflow: hidden;
    }
    .order-img-wrap{
        width: 65px;
        height: 65px;
        margin-right: 15px;
        float: left;
        background: #ccc;
        background: url('../../../public/images/defaultIcon.png') 0 -935px no-repeat;
    }
    .ellipsis{
        text-align: left;
    }
    .order-abstract{
        margin-top: 5px;
        font-size: 12px;
        color: #999;
    }
    .order-price-wrap{
        text-align: left;
        margin-top:5px;
    }
    .selling-price{
        font-size:16px;
        color:#57bead;
    }
    .original-price{
        font-size: 12px;
        color: #999;
        text-decoration: line-through;
    }
    .order-item-footer{
        height: 59px;
        border-top: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .order-btn{
        padding: 5px;
        background-color: #fff;
        border: 1px solid #999;
        border-radius: 2px;
        outline: 0;
        color:#999;
        cursor: pointer;
    }

    #order_nav{
        list-style: none;
        margin: 0px;
        padding: 0px 20px;
        display: flex;
        justify-content: space-between;
        background: white;
    }
    #order_nav li{
        float: left;
        width:48px;
        height:45px;
        line-height: 45px;
    }
    .clear{
        clear: both;
    }
    .active{
        border-bottom: 2px solid #57bead;
    }
</style>