<template>
    <div>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="uname" :attr="{autofocus:true}"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
        <mt-button size="large" @click="login">登录</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            uname:'',
            upwd:''
        }
    },
    methods:{
        login(){
            var u=this.uname;
            var p=this.upwd;
            //console.log(u,p);
            var reg=/^[a-z0-9]{3,12}$/i;
            if(reg.test(u)==false){
                this.$messagebox("消息","用户名格式不正确");
                return;
            }
            if(reg.test(p)==false){
                this.$messagebox("消息","密码格式不正确");
                return;
            }
            var url="login";
            var obj={UserName:u,UserPwd:p};
            this.axios.get(
                url,
                {params:obj}
            ).then(res=>{
                // console.log(res.data.code);
                // console.log(res.data.result);
                if(res.data.code==1){
                    this.$messagebox("消息","登录成功");
                    sessionStorage.setItem("Uid",res.data.result);
                    sessionStorage.setItem("UserName",res.data.UserName);
                    this.$router.push("/Home");
                }else{
                    this.$messagebox("消息","登录失败");
                    // this.$router.push("/Product");
                }
            })
        }
    }
}
</script>

<style scoped>
    
</style>