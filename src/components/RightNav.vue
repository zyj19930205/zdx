<template>
    <div class="rightNav">
        <!-- 用户信息展示区 -->
        <RightBox>
            <div slot="boxtitle"><i class="el-icon-user-solid" style="padding-right: 5px"></i>我是谁</div>
            <div slot="boxcontent">
                <div class="avatar">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="60"></el-avatar>
                </div>
                <div class="user-info-area">
                    <div style="margin-top: 10px">你好，粥工</div>
                    <div style="margin-top: 10px;font-size: 12px">粉丝数：<span class="fans">{{userInfo.fansNum}}</span></div>
                    <div style="margin-top: 20px">你一共发表了<span class="article-num">{{userInfo.articleNum}}</span>篇文章</div>
                </div>
                <el-divider><i class="el-icon-lollipop"></i></el-divider>
                <div class="user-tool-list">
                    <div class="hvr-buzz"><img :src="tool1"/><div class="tool-font">控制台</div></div>
                    <div class="hvr-buzz"><img :src="tool3"/><div class="tool-font">摸鱼</div></div>
                    <div class="hvr-buzz"><img :src="tool2"/><div class="tool-font">跑路</div></div>
                </div>
            </div>
        </RightBox>

        <!-- 最热文章区 -->
        <RightBox>
            <div slot="boxtitle">最热文章</div>
            <div slot="boxcontent"> <ul class="hot-list">
                <li v-for="(hotArticle,index) in hots" :key="index" class="hotArticle">
                    <span>{{index + 1}}.{{hotArticle.title}}</span>
                    <span>{{hotArticle.author}}</span>
                </li>
            </ul></div>
        </RightBox>

        <!-- 推荐作者 -->
        <RightBox>
            <div slot="boxtitle">推荐作者</div>
            <div slot="boxcontent">
                暂时还没有推荐哦
            </div>
        </RightBox>

        <!-- 标签导航区 -->
        <RightBox>
            <div slot="boxtitle">标签筛选</div>
            <div slot="boxcontent">
                <div class="taglist">
                        <el-tag v-for="(tag,index) in tags" :key="index" :type="tag.type"  effect="plain" size="small">
                             {{tag.tagName}}
                        </el-tag>
                </div>
            </div>
        </RightBox>
    </div>
</template>
<script>
    import RightBox from "./RightBox";
    import tool1 from "../assets/tool1.jpg"
    import tool2 from "../assets/tool2.jpg"
    import tool3 from "../assets/tool3.jpg"
    export default {
        props:['hots','tags','userInfo'],
        components:{
            RightBox
        },
        data(){
            return{
                tool1:tool1,
                tool2:tool2,
                tool3:tool3,
                number:0,
                tweenedNumber: 0
            }
        }

    }
</script>
<style lang="scss" scoped>
    .rightNav{
        margin-top: 20px;
    }
    .hot-list{
        list-style: none;
    }
    .hotArticle{
        height: 30px;
        display: flex;
        justify-content: space-between;
    }
    .avatar,.user-info-area{
        text-align: center;
    }
    .article-num{
        background: #409EFF;
        padding: 5px;
        color:white ;
        margin: 0 5px;
        border-radius: 4px;
    }
    .fans{
        cursor: pointer;
    }
    .user-tool-list{
        display: flex;
        margin-top: 20px;
        margin-bottom: 10px;
        padding: 5px 50px;
        justify-content: space-between;
        div{
            height: 50px;
            width: 50px;
        }
        img{
            height: 100%;
            width: 100%;
            cursor: pointer;
        }
        .tool-font{
            text-align: center;
            font-size: 12px;
            color: #606266;
            cursor: pointer;
        }
    }
    .taglist{
        display: flex;
        justify-content: flex-start;
        span{
            margin: 0 3px;
        }
    }
</style>
