<template>
    <div class="right-box">
        <div class="rbox">
            <div class="box-title">
                <slot name="boxtitle"/>
            </div>
            <div class="box-content">
                <slot name="boxcontent"/>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss" scoped>
    .right-box{
        font-size: 14px;
        padding: 20px 20px 20px 60px;
    }
    .rbox{
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
        border-radius: 4px;
    }
    .rbox{
        .box-title{
            background-color: black;
            color: white;
            padding: 5px 5px 5px 10px;
            height: 30px;
            line-height: 30px;
        }
        .box-content{
            background-color: white;
            padding: 20px;
            font-size: 14px;
        }
    }
</style>
