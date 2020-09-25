<template>
    <div class="right-box">
        <div class="rbox">
            <div class="box-title hvr-bounce-to-right">
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
            width: 338px;
            cursor: pointer;
        }
        .box-content{
            background-color: white;
            padding: 20px;
            font-size: 14px;
        }
    }
    .hvr-bounce-to-right:before{
        background: #141e30; /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #141e30, #243b55); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #141e30, #243b55); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
</style>
