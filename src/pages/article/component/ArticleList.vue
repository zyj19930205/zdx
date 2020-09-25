<template>
    <div>
        <ul class="article-list">
            <li v-for="(article,index) in articleList" :key="index">
                <div style="display: flex">
                                <span style="font-size: 18px;font-weight: bold" @click="readArticle(article.id)">
                                    <span v-if="article.agree > 15">[荐]</span>
                                    {{article.title}}
                                </span>
                    <div style="margin-left: auto"><span class="author">{{article.author}}·</span><span class="author">{{article.type}}</span></div>
                </div>
                <div class="art-content" @click="readArticle(article.id)">{{article.content}}</div>
                <div class="art-meta">
                    <div style="display: flex">
                    <span><img :src="createTimeImg" style="width: 30px;height: 30px;display: inline-block"/></span>
                    <div class="mate-font">{{article.createDate}}</div>
                    </div>
                    <div>
                        <el-button-group>
                            <el-button  icon="el-icon-share" size="mini">赞<span style="margin-left: 3px">{{article.agree}}</span></el-button>
                            <el-button  icon="el-icon-delete" size="mini">踩<span style="margin-left: 3px">{{article.disagree}}</span></el-button>
                        </el-button-group>
                    </div>
                </div>
                <el-divider></el-divider>
            </li>
        </ul>
        <div style="text-align: right">
        <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
        </div>
    </div>
</template>
<script>
    import articleData from '../../../data/article'
    import createDateImg from "../../../assets/createDate.jpg"
    export default {
        data(){
            return{
                articleList:articleData,
                createTimeImg:createDateImg
            }
        },
        methods:{
            readArticle(id){
                // this.$router.push('/articleView/'+ id)
                this.$router.push({name:'articleView',params:{id:id}})
            }
        }
    }
</script>
<style>
    .article-list{
        list-style: none;
    }
    .article-list li {
        padding: 10px 0px;
    }
    .article-list li .art-content{
        color: gray;
    }
    .article-list li .art-content:hover{
        cursor: pointer;
        font-style: italic;
    }
    .author{
        font-size: 13px;
    }
    .art-content{
        margin-top: 10px;
        line-height: 24px;
        font-size: 13px;
    }
    a{
        text-decoration: none;
    }
    .router-link-active {
        text-decoration: none;
        color: black;
    }
    a:link{
        color: black;
    }
    a{
        color: black;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active{
        background-color: #606266 !important;
    }
    .art-meta{
        margin-top: 15px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
    }
    .mate-font{
        line-height: 32px;
        margin-left: 10px;
        color: darkgray;
    }
    .article-list .el-divider--horizontal{
        margin: 10px 0 !important;
    }
</style>
