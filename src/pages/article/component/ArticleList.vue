<template>
    <div>
        <ul class="article-list">
            <li v-for="(article,index) in articleList" :key="index" @click="readArticle(article.id)">
                <div style="display: flex">
                                <span style="font-size: 18px;font-weight: bold">
                                    {{article.title}}
                                </span>
                    <div style="margin-left: auto"><span class="author">{{article.author}}</span><span class="author">{{article.type}}</span></div>
                </div>
                <div class="art-content"> <span>{{index+1}}</span>{{article.content}}</div>
                <el-divider></el-divider>
            </li>
        </ul>
    </div>
</template>
<script>
    import articleData from '../../../data/article'
    export default {
        data(){
            return{
                articleList:articleData
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
    .article-list li .art-content:hover{
        cursor: pointer;
        color: gray;
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
</style>
