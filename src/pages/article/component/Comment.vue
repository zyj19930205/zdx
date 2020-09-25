<template>
    <div class="comment-box">
        <div class="comment-item">
        <div class="comment-title">
        <div class="comment-user">
            <div class="user-ava"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></div>
            <div class="user-name">粥工</div>
        </div>
            <div class="comment-date">2020-08-25 19:00:13</div>
        </div>
        <div class="comment-content">
            这是一篇好文章，要稳住啊！
        </div>
        <div class="comment-meta">
            <div style="display: flex">
            <div>赞(32)</div>
            <div>踩(12)</div>
            </div>
            <div>1楼</div>
        </div>
        <el-divider></el-divider>
        </div>
        <div class="comment-item">
            <div class="comment-title">
                <div class="comment-user">
                    <div class="user-ava"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></div>
                    <div class="user-name">粥工</div>
                </div>
                <div class="comment-date">2020-08-25 19:00:13</div>
            </div>
            <div class="comment-content">
                这是一篇好文章，要稳住啊！
            </div>
            <div class="comment-meta">
                <div style="display: flex">
                    <div>赞(32)</div>
                    <div>踩(12)</div>
                </div>
                <div>1楼</div>
            </div>
            <el-divider></el-divider>
        </div>
        <div class="comment-item">
            <div class="comment-title">
                <div class="comment-user">
                    <div class="user-ava"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></div>
                    <div class="user-name">粥工</div>
                </div>
                <div class="comment-date">2020-08-25 19:00:13</div>
            </div>
            <div class="comment-content">
                这是一篇好文章，要稳住啊！
            </div>
            <div class="comment-meta">
                <div style="display: flex">
                    <div>赞(32)</div>
                    <div>踩(12)</div>
                </div>
                <div>1楼</div>
            </div>
            <el-divider></el-divider>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .comment-title{
        display: flex;
        justify-content: space-between;
    }
    .comment-user{
        display: flex;
        text-align: center;
    }
    .user-name{
        font-size: 14px;
        color: #606266;
        line-height: 45px;
        margin-left: 10px;
    }
    .comment-date{
        font-size: 14px;
        line-height: 45px;
        color: #606266;
    }
    .comment-content{
        font-size: 14px;
        margin-top: 10px;
        padding-left: 50px;
    }
    .comment-meta{
        text-align: right;
        font-size: 12px;
        display: flex;
        padding-left: 50px;
        margin-top: 10px;
        justify-content: space-between;
    }
    .comment-meta :nth-child(2){
        margin-left: 10px;
    }

</style>
