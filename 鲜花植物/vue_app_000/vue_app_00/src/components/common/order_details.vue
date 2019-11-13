<template>
    <div id="bj">
        <div class="zhe1">
            <div class="nav-btn"  @click="back"></div>
                <div class="editor-title-wrapper">
                <span class="page-title ellipsis">订单详情</span>
            </div>
        </div>
        <div class="order-details-wrap" v-if="order_details[0]">
            <div class="order-details-header">
                <div class="order-details-statusImg1"></div>
                <span class="order-details-status">{{order_details[0].OrderStatus==1?"订单待支付":order_details[0].OrderStatus==2?"订单进行中":order_details[0].OrderStatus==3?"订单已完成":"订单已取消"}}</span>
            </div>
            <div class="order-details-info">
                <div class="order-details-content">
                    <div class="order-details-img"></div>
                    <div>
                        <p class="order-details-title">
                            {{order_details[0].Ordertitle}}
                        </p>
                        <span class="order-details-label">
                            {{order_details[0].OrderDetails}}
                        </span>
                        <div class="order-price-wrap">
                            <span class="order-selling-price">￥{{order_details[0].OrderNewPrice}}</span>
                            <span class="order-original-price">￥{{order_details[0].OrderOldPrice}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order-details-booking">
                <div class="order-details-title">预约信息</div>
                <div class="order-details-content">
                    <span class="order-details-label">预约人：{{order_details[0].Uname}}</span>
                </div>
                <div class="order-details-content">
                    <span class="order-details-label">预约电话：{{order_details[0].Uphone}}</span>
                </div>
                <div class="order-details-content">
                    <span class="order-details-label">买家留言：{{order_details[0].beizhu}}</span>
                </div>
            </div>
            <div class="order-details-order">
                <div class="order-details-title">订单信息</div>
                <div class="order-details-content">
                    <span class="order-details-label">订单编号：{{order_details[0].OrderNumber}}</span>
                </div>
                <div class="order-details-content">
                    <span class="order-details-label">下单时间：{{order_details[0].Ordertime}}</span>
                </div>
            </div>
            <div class="order-details-footer">
                <div class="order-details-btn order-details-btn-left">
                    查看地址
                </div>
                <div class="order-details-btn">
                    联系我们
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            order_details:[]
        }
    },
    created(){
        var Oid=this.$route.query.Oid;
        //console.log(Oid);
        var obj={Oid:Oid}
        var url="order_details";
        this.axios.get(
            url,
            {params:obj}    
        ).then(res=>{
            //console.log(res);
            var order_details=this.order_details.concat(res.data);
            this.order_details=order_details;
            // console.log(order_details);
        })
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
    },
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
    .order-details-wrap{
        width: 345px;
        min-height: 534px;
        background: #fff;
        box-shadow: 0 0 5px 0 rgba(0,0,0,.05);
        border-radius: 4px;
        margin: 15px;
    }
    .order-details-header{
        height: 74px;
        line-height: 74px;
        border-bottom: 1px dashed #e5e5e5;
        margin: 0 12px;
        display: flex;
    }
    .order-details-statusImg1{
        width: 25px;
        height: 27px;
        margin: 24px 10px 0 10px;
        background: url('../../../public/images/mbg01.png') -774px -327px no-repeat;
    }
    .order-details-status{
        font-size: 15px;
        color: #353535;
    }
    .order-details-header::before {
        content: '';
        display: block;
        height: 13px;
        width: 13px;
        border-radius: 50%;
        background: #f4f4f4;
        position: absolute;
        top: 83px;
        right: 8px;
    }
    .order-details-header::after {
        content: '';
        display: block;
        height: 13px;
        width: 13px;
        border-radius: 50%;
        background: #f4f4f4;
        position: absolute;
        top: 83px;
        left: 8px;
    }
    .order-details-info {
        height: 120px;
        border-bottom: 1px dashed #e5e5e5;
        margin: 0 12px;
        overflow: hidden;
    }
    .order-details-wrap .order-details-content {
        margin-bottom: 8px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        }
        .order-details-wrap .order-details-img {
        height: 82px;
        width: 82px;
        margin: 20px 13px 0 8px;
        background: url('../../../public/images/defaultIcon.png') 0 -1015px no-repeat;
    }
    .order-details-title {
        font-size: 14px;
        font-weight: 700;
        color: #353535;
        margin-top: 23px;
        text-align: left;
    }
    .order-details-wrap .order-details-label {
        font-size: 12px;
        color: #888;
        text-align: left;
    }
    .order-details-wrap .order-price-wrap {
        margin-top: 10px;
        text-align: left;
    }
    .order-details-wrap .order-selling-price {
        font-size: 15px;
        color:rgb(87, 190, 173);
    }
    .order-details-wrap .order-original-price {
        font-size: 12px;
        color: #888;
        text-decoration: line-through;
    }
    .order-details-booking {
        height: 164px;
        border-bottom: 1px dashed #e5e5e5;
        margin: 0 12px;
        padding: 0 10px;
        overflow: hidden;
    }
    .order-details-title {
        font-size: 14px;
        font-weight: 700;
        color: #353535;
        margin: 22px 0 13px 0;
    }
    .order-details-wrap .order-details-content {
        margin-bottom: 8px;
        display: flex;
    }
    .order-details-wrap .order-details-label {
        font-size: 12px;
        color: #888;
    }
    .order-details-order {
        min-height: 124px;
        margin: 0 12px;
        padding: 0 10px;
        overflow: hidden;
        border-bottom: 1px dashed #e5e5e5;
    }
    .order-details-footer {
        height: 48px;
        line-height: 48px;
        display: flex;
        border-top: 1px solid #eee;
    }
    .order-details-btn-left {
        border-right: 1px solid #eee;
    }
    .order-details-btn {
        color: #333;
        text-align: center;
        cursor: pointer;
        font-size: 14px;
        flex: 1 1;
    }
    .order-details-btn {
        color: #333;
        text-align: center;
        cursor: pointer;
        font-size: 14px;
        flex: 1 1;
    }
</style>