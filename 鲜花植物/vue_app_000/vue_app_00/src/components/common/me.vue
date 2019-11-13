<template>
    <div id="bj">
        <div id="nav_top">我的</div>
        <div id="head">
            <table></table>
            <div id="head-icon">
                <input type="file" id="upload_file" @change="addimg">
                <img :src="logo_src" width="60px" height="60px" alt="" @click="actionSheet">
                <mt-actionsheet :actions= "actions" v-model="sheetVisible"></mt-actionsheet>
            </div>
            <span id="head_login" @click="login">{{Uname}}</span>
        </div>
        <div id="main">
            <div class="order">
                <div class="orders" @click="suoyouOrder">
                    <span>所有订单</span>
                </div>
                <div id="order-state" @click="orderStatus">
                    <div class="order-status" data-status="2">
                        <div class="status-icon icon1" data-status="2"></div>
                        <span data-status="2">待支付</span>
                        <span class="icon-sum" data-status="2">{{daizhifu}}</span>
                    </div>
                    <div class="order-status" data-status="3">
                        <div class="status-icon icon2" data-status="3"></div>
                        <span data-status="3">进行中</span>
                        <span class="icon-sum" data-status="3">{{jinxingzhong}}</span>
                    </div>
                    <div class="order-status" data-status="4">
                        <div class="status-icon icon3" data-status="4"></div>
                        <span data-status="4">已完成</span>
                        <span class="icon-sum" data-status="4">{{yiwancheng}}</span>
                    </div>
                    <div class="order-status" data-status="5">
                        <div class="status-icon icon4" data-status="5"></div>
                        <span data-status="5">已取消</span>
                        <span class="icon-sum" data-status="5">{{yiquxiao}}</span>
                    </div>
                </div>
            </div>

            <div class="message mt pb">
                <div class="message_title">
                    <span>最新消息</span>
                </div>
                <div class="message_item">
                    <div v-for="(item,i) of list" :key="i">
                        <div class="item_top">
                            <div class="service-img-wrap"></div>
                            <div class="align_left mt-10 ellipsis service-name">{{list[i].Ordertitle}}</div>
                            <div class="align_left ellipsis mt-4 service-intro">{{list[i].OrderDetails}}</div>
                        </div>
                        <div class="item_bottom">
                            <span>专业抓徐亮！</span>
                        </div>
                    </div>
                    <div class="message-more" @click="more">
                        <span>查看更多</span>
                    </div>
                </div>
            </div>

            <div class="info">
                <div class="info-item address">
                    <i class="item-icon address-icon"></i>
                    <span class="item-text1">xxx省xxx市xxx县xxx路xxx号</span>
                    <span>100m</span>
                    <i class="more-icon"></i>
                </div>
                <div class="info-item phone">
                    <i class="item-icon phone-icon"></i>
                    <span class="item-text2">15207394594</span>
                    <i class="more-icon"></i>
                </div>
                <div class="info-item companyTime">
                    <i class="item-icon companyTime-icon"></i>
                    <span class="item-text3">周一至周五 09:00-18:00</span>
                    <i class="more-icon"></i>
                </div>
                <div class="info-item introduction">
                    <i class="item-icon introduction-icon"></i>
                    <span class="item-text4">这是鲜花植物行业的预约类模板</span>
                    <i class="more-icon"></i>
                </div>
            </div>

            <div class="footer-area">由众潮网络提供技术支持</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            daizhifu:0,
            yiwancheng:0,
            yiquxiao:0,
            jinxingzhong:0,
            Uname:"请点击登陆",
            pno:0,
            list:[],
            // action sheet 选项内容
            actions: [{
              name: '拍照',
              method : this.getCamera	// 调用methods中的函数
            }, {
              name: '从相册中选择', 
              method : this.getLibrary	// 调用methods中的函数
            }],
              // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
            sheetVisible: false,
            // files:[]
            logo_src:require("../../../public/images/head.png")
        }
    },
    methods:{
        uploadFile(file){
            console.log(file.sessionUid);
            // var item={
            //     name:file.name,
            //     // uploadPercentage:0,
            //     file:file.sessionUid
            // };
            // console.log(item);
            // this.files.push(item);
            // console.log(this.files);
            var fd = new FormData();
            console.log(fd);
            var Uid=sessionStorage.getItem("Uid");
            console.log(Uid);
            
            fd.append("logo", file,`${Uid}.png`);
            console.log(fd);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://127.0.0.1:4000/upload', true);
            // xhr.upload.addEventListener('progress', function (e) {
            //     item.uploadPercentage = Math.round((e.loaded * 100) / e.total);
            // }, false);
            // var formdata=fd;
            // xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.send(fd);
            var Uid = sessionStorage.getItem("Uid");
            var obj={Uid:Uid};
            var url1="Userimg";
            this.axios.get(
                url1,
                {params:obj}
            ).then(res=>{
                console.log(res.data[0].UserImg);
                this.logo_src=`http://127.0.0.1:4000/${res.data[0].UserImg}`;
                //var list=this.list.concat(res.data);
            })
        },
        login(){
            var Uid = sessionStorage.getItem("Uid");
            if(Uid==undefined){
                this.$router.push("login");
            }
        },
        orderStatus(e){
            var selected=e.target.dataset.status;
            //alert(selected);
            this.$router.push({
                //跳转的页面
                path: '/my_order',
                //跳转传出的参数
                query: {
                    selected:selected
                }
            })
        },
        suoyouOrder(){
            this.$router.push('./my_order');
        },
        more(){
            var url="goods";
            this.pno++;
            var obj={pno:this.pno};
            this.axios.get(url,{params:obj}).then(res=>{
                // console.log(res);
                // this.list=res.data.data;
                // console.log(this.list);
                var rows=this.list.concat(res.data.data);
                this.list=rows;
                console.log(this.list);
            })
        },
        actionSheet: function(){
        	// 打开action sheet
            var sessionUid=sessionStorage.getItem("Uid");
            if(sessionUid==null){
                this.$router.push("./login");
            }else{
                this.sheetVisible = true;
            }
        },
        getCamera: function(){
            console.log("打开照相机");
        },
        getLibrary: function(){
            console.log("打开相册")
            var upload_file=document.getElementById("upload_file");
            // var session=sessionStorage.getItem("Uid");
            // console.log(session);
            // if(Uid==null){
            //     this.$router.push("./login");
            // }else{
                upload_file.click();
            // }
        },
        addimg(e){
            // e.stopPropagation();
            // e.preventDefault();
            // var dt=e.dataTransfer;
            // console.log(dt);
            var file = e.target.files[0];
            console.log(file);
            // if (window.FileReader) {
            //     var reader = new FileReader();
            //     reader.readAsDataURL(file);
            //     //监听文件读取结束后事件    
            //     reader.onloadend = function(e) {
            //         console.log(e.target.result)
            //         // $(".img").attr("src", e.target.result); //e.target.result就是最后的路径地址
            //     };
            // }
            var sessionUid=sessionStorage.getItem("Uid");
            file.sessionUid=sessionUid;
            this.uploadFile(file);
        }
    },
    created(){
        var Uid = sessionStorage.getItem("Uid");
        var Uname = sessionStorage.getItem("UserName");
        console.log(Uname);
        if(Uid!=null){
            this.Uname=Uname;
        }
        //console.log(Uid);
        var url="order";
        var obj={Uid:Uid};
        this.axios.get(
                url,
                {params:obj}
            ).then(res=>{
                console.log(res.data);
                //var list=this.list.concat(res.data);
                var daizhifu=0;
                var jinxingzhong=0;
                var yiwancheng=0;
                var yiquxiao=0;
                for(var i=0;i<res.data.length;i++){
                    if(res.data[i].OrderStatus==1){
                        daizhifu+=1;
                    }else if(res.data[i].OrderStatus==2){
                        jinxingzhong+=1;
                    }else if(res.data[i].OrderStatus==3){
                        yiwancheng+=1;
                    }else if(res.data[i].OrderStatus==4){
                        yiquxiao+=1;
                    }
                }
                this.daizhifu=daizhifu;
                this.jinxingzhong=jinxingzhong;
                this.yiwancheng=yiwancheng;
                this.yiquxiao=yiquxiao;

                this.more();
        })

        var url1="Userimg";
        this.axios.get(
            url1,
            {params:obj}
        ).then(res=>{
            // console.log(res.data[0].UserImg);
            this.logo_src=`http://127.0.0.1:4000/${res.data[0].UserImg}`;
            //var list=this.list.concat(res.data);
        })
    }
}
</script>

<style scoped>
    #bj{
        width:100%;
        background: #f5f5f5;
        text-align: center;
        /* position: relative; */
        /* margin-top:50px; */
    }
    #nav_top{
        height: 50px;
        width:100%;
        position: fixed;
        background: white;
        font-size: 17px;
        line-height: 50px;
        top:0px;
        z-index: 5;
        text-align: center;
    }
    #head{
        width:100%;
        height:160px;
        /* position: relative; */
        background-color: rgb(87, 190, 173);
        border-bottom-left-radius: 45%;
        border-bottom-right-radius: 45%;
        margin-top:50px;
        text-align: center;
    }
    #head-icon>input{
        display: none;
        /* position: absolute;
        top:20px;
        left:155px;
        display: block;
        height: 60px;
        width:60px;
        border-radius:50%;
        z-index: 5;
        opacity: 0;
        text-align:center; 
        left:50%;
        margin-left: -30px;
        margin-top:20px; */
    }
    #head-icon>img{
        height: 60px;
        width:60px;
        border-radius:50%;
        background-size: contain;
        margin:20px auto 10px;
        /* position: absolute; */
        /* top:0px;
        left:158px; */
    }
    #head_login{
        font-size: 14px;
        color:white;
        /* position: absolute; */
        display: block;
        /* padding-top:88px; */
    }
    #main{
        position: relative;
        top:-35px;
    }
    .order,.message,.info{
        width:300px;
        background:white;
        border-radius: 4px;
        font-size: 14px;
        padding: 0 15px;
        margin: 0 auto;
    }
    .orders,.message_title{
        height:44px;
        line-height: 44px;
        border-bottom: 1px solid #eee;
    }
    .orders>span,.message_title>span{
        float: left;
    }
    .orders::after,.message_title::after{
        content: '';
        width: 7px;
        height: 12px;
        position: absolute;
        right:65px;
        top:15px;
        background: url('../../../public/images/mbg01.png') no-repeat -588px -192px;
    }
    #order-state{
        margin: 15px 0 10px;
        display: flex;
        justify-content: space-around;
    }
    .order-status{
        font-size: 12px;
        color: #666;
        position: relative;
        cursor: pointer;
        margin-bottom: 10px;
    }
    .status-icon{
        width: 25px;
        height: 25px;
        display: block;
        margin: 0 auto 4px;
        background: url('../../../public/images/mbg01.png') no-repeat;
        background-color: rgb(87, 190, 173);
    }
    .icon1{
        background-position: -707px -226px;
    }
    .icon2{
        background-position: -747px -153px;
    }
    .icon3{
        background-position: -707px -269px;
    }
    .icon4{
        background-position: -707px -312px;
    }
    .icon-sum{
        width: 18px;
        height: 18px;
        line-height: 18px;
        position: absolute;
        top: -9px;
        right: -3px;
        border-radius: 50%;
        border: 1px solid rgb(87, 190, 173);
        text-align: center;
        background: #fff;
        color: rgb(87, 190, 173);
    }
    .mt{
        margin-top:10px;
    }
    .pb{
        padding-bottom: 10px;
    }
    .item_top{
        height: 55px;
        margin-bottom: 10px;
        background-color: #f8f8f8;
        overflow: hidden;
        border:0px solid red;
    }
    .service-img-wrap{
        width: 55px;
        height: 100%;
        margin-right: 10px;
        float: left;
        background: url('../../../public/images/defaultIcon.png') 0 -868px no-repeat;
    }
    .item_bottom{
        text-align: left;
        margin-bottom: 14px;
    }
    .message-more{
        font-size: 12px;
        color: #888;
    }
    .message-more:before{
        content: '';
        width: 11px;
        height: 7px;
        margin-right: 10px;
        display: inline-block;
        vertical-align: middle;
        background: url('../../../public/images/mbg01.png') no-repeat;
        background-position: -1203px 0;
    }
    .info{
        margin-top:10px;
    }
    .info-item{
        padding:10px 0;
        display: flex;
        justify-content: space-between;
    }
    .address-icon{
        background-position: -475px -192px !important;
    }
    .item-icon{
        width: 16px;
        height: 16px;
        margin-top: 2px;
        background: url('../../../public/images/mbg01.png') no-repeat;
    }
    .more-icon{
        width: 7px;
        height: 12px;
        background: red;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        background: url('../../../public/images/mbg01.png') no-repeat -588px -192px;
        margin-top: 4px;
    }
    .phone-icon{
        background-position: -502px -191px;
    }
    .item-text2{
        margin-left:-150px;
    }
    .companyTime-icon{
        background-position: -530px -192px;
    }
    .item-text3{
        margin-left:-88px;
    }
    .introduction-icon{
        background-position: -557px -193px;
    }
    .item-text4{
        margin-left:-42px;
    }

    .align_left{
        text-align:left;
    }
    .mt-10{
        margin-top:10px;
    }
    .mt-4{
        margin-top:4px;
    }
    .ellipsis{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .service-name{
        font-size:13px;
    }
    .service-intro{
        font-size:12px;
        color:#888888;
    }
    .footer-area{
        height:60px;
        line-height: 60px;
        font-size: 12px;
        color: #999;
        text-align: center;
    }
</style>