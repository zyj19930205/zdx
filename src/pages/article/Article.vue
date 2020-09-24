<template>
    <div>
        <el-row>
            <el-col :span="16">
                <div class="article-box">
                    <transition name="fade" mode="out-in">
                    <router-view/>
                    </transition>
                </div>
            </el-col>
            <el-col :span="8">
                <RightNav></RightNav>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import articleData from '../../data/article'
    import RightNav from "../../components/RightNav";
    import ArticleList from "./component/ArticleList";
    export default {
        components:{
          RightNav,ArticleList
        },
        data(){
            return{
                articleList:articleData
            }
        }
    }
</script>
<style scoped>
.article-box{
    background-color: white;
    margin-top: 30px;
    min-width: 700px;
    max-width: 900px;
    padding: 50px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    border-radius: 2px;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
