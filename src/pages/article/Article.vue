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
                <RightNav v-bind:hots="hotData" v-bind:tags="tagData" v-bind:user-info="userInfo"></RightNav>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import articleData from '../../data/article'
    import RightNav from "../../components/RightNav";
    import ArticleList from "./component/ArticleList";
    import hotData from "../../data/hot.json"
    import tagData from "../../data/tag.json"
    import userInfo from "../../data/userInfo.json"
    export default {
        components:{
          RightNav,ArticleList
        },
        data(){
            return{
                articleList:articleData,
                hotData:hotData,
                tagData:tagData,
                userInfo:userInfo
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
    min-height: 500px;
    padding: 50px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    border-radius: 10px;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
.article-box-title{
    position: relative;
}
</style>
