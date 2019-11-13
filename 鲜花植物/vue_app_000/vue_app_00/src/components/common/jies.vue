<template>
    <div id="editor">
        <div class="zhe1">
            <div class="nav-btn"  @click="back"></div>
                <div class="editor-title-wrapper">
                <span class="page-title ellipsis">订单结算</span>
            </div>
        </div>
        <div>
            <div class="goods">
                <img :src="'http://127.0.0.1:4000/'+list.img" alt="" style="width:80px;height:80px;">
                <div>
                    <div class="title">{{list.title}}</div>
                    <div class="txt">{{list.details}}</div>
                    <div class="price">价格面议</div>
                </div>
            </div>
            <div class="info">
                <div class="name contack">
                    <div><span>*</span>姓名</div>
                    <div>
                        <input type="text" maxlength="100" placeholder="请输入姓名" class="jz-input contact-item-input" id="Uname" name="Uname">
                    </div>
                </div>
                <div class="phone contack">
                    <div><span>*</span>电话</div>
                    <div>
                        <input type="text" maxlength="100" placeholder="请输入电话" class="jz-input contact-item-input" id="Uphone" name="Uphone">
                    </div>
                </div>
                <div class="discuss contack">
                    <div><span>*</span>买家留言</div>
                    <div contenteditable="true" placeholder="请输入买家留言" class="message" id="Beizhu" name="Beizhu"></div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div>
                <div @click="add" :data-gid="list.gid" :data-img="list.img" :data-title="list.title" :data-details="list.details">提交订单</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:{img:"tqc.jpg"}
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        add(event){
            var uid=sessionStorage.getItem("Uid")
            var uname=Uname.value;
            var uphone=Uphone.value;
            var beizhu=Beizhu.innerText;
            var Gid=event.target.dataset.gid;
            var img=event.target.dataset.img;
            var title=event.target.dataset.title;
            var details=event.target.dataset.details;
            var date=new Date();
            var url="add";
            var obj={uid,uname,uphone,beizhu,Gid,img,title,details,date};
            this.axios.get(url,
            {params:obj}).then(res=>{
                console.log(res);
                if(res.data.code==1){
                    this.$toast("提交成功");
                }else{
                    this.$toast("提交失败");
                }
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
                 console.log(this.list);
            })
    },
}
</script>
<style scoped>
#editor{
    height: 100%;
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
    .goods{
        margin-top: 50px;
        padding:15px;
        margin-bottom: 10px;
        background: #fff;
        overflow: hidden;
        display: flex;
    }
    .goods>div{
        overflow: hidden;
        margin-left: 15px;
        font-family: 微软雅黑,'microsoft yahei',宋体,新宋体,sans-serif;
    }
    .title{
        font-size: 14px;
        color: #353535;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-height: 19px;
        min-height: 19px;
    }
    .txt{
        font-size: 12px;
        margin-top: 4px;
        color: #888;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-height: 16px;
        min-height: 16px;
    }
    .price{
        max-height: 20px;
        min-height: 20px;
        line-height: 20px;
        margin-top: 18px;
        color: rgb(87, 190, 173);
        font-size: 13px;
        vertical-align: bottom;
    }
    .contack{
        background: #fff;
        padding: 15px 15px 10px;
        border-bottom: 1px solid #eee;
    }
    .name>div:first-child{
        margin-bottom: 10px;
    }
    .name>div:first-child span{
        color: red;
        vertical-align: middle;
        margin-right: 5px;
        display: inline-block;
    }
    .name>div:last-child{
        margin-top: -10px;
        width: 100%;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        pointer-events: auto;
    }
    .contact-item-input{
        border: none;
        padding-left: 0;
        width: 100%;
    }
    .jz-input{
        height: 34px;
        box-sizing: border-box;
        border-radius: 2px;
        background-color: #fff;
        font-size: 13px;
        font-family: 微软雅黑;
        color: #333;
        padding: 0 8px;
        text-overflow: ellipsis;
        outline: 0;
    }
    .phone{
        border:0;
        margin-bottom:10px;
    } 
    .phone>div:first-child{
        margin-bottom: 10px;
    }
    .phone>div:first-child span{
        color: red;
        vertical-align: middle;
        margin-right: 5px;
        display: inline-block;
    }
    .phone>div:last-child{
        margin-top: -10px;
        width: 100%;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        pointer-events: auto;
    }

    .discuss{
        border:0;
    }
    .discuss>div:first-child{
        margin-bottom: 10px;
    }
    .discuss>div:first-child span{
        color: red;
        vertical-align: middle;
        margin-right: 5px;
        display: inline-block;
    }
    .message{
        overflow: hidden;
        min-height: 34px;
    }
    .message::before{
        content: attr(placeholder);
        color: #888;
        display: block;
    }

    .footer{
        height: 49px;
        border-top: 1px solid #eee;
        background-color: #fff;
        box-shadow: 0 -2px 8px 0 rgba(0,0,0,.05);
        position: fixed;
        bottom:0;
        text-align: center;
        width:100%;
    }
    .footer>div{
        height: 100%;
        line-height: 50px;
        padding: 0 9px;
    }
    .footer>div>div{
        background-color: rgb(87, 190, 173);
        color: #fff;
        cursor: pointer;
        height: 38px;
        line-height: 38px;
        border-radius: 20px;
        font-size: 14px;
        display: inline-block;
        width: 100%;
    }
</style>