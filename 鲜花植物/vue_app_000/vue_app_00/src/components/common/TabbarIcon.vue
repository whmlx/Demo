<template>
    <div>
        <!-- 显示一张图片，并且完成切换 -->
        <img :src="focused?selectedImage:normalImage" class="imgstyle">
    </div>
</template>
<script>
export default {
    props:{
        focused:false,//选中状态
        selectedImage:{dafault:""},
        normalImage:{dafault:""}
    }
}
</script>
<style scoped>
.imgstyle{
    width:26px;
    height:26px;
}
</style>