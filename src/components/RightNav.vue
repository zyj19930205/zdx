<template>
    <div class="rightNav">
        <RightBox>
            <div slot="boxtitle">我是谁</div>
            <div slot="boxcontent">你的名字叫拉</div>
        </RightBox>

        <RightBox>
            <div slot="boxtitle">最热文章</div>
            <div slot="boxcontent">最热文章很多啊</div>
        </RightBox>

        <RightBox>
            <div slot="boxtitle">标签筛选</div>
            <div slot="boxcontent">标签很多</div>
        </RightBox>
    </div>
</template>
<script>
    import RightBox from "./RightBox";
    export default {
        components:{
            RightBox
        }
    }
</script>
<style lang="scss" scoped>
    .rightNav{
        margin-top: 20px;
    }

</style>
