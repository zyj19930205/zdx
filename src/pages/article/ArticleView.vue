<template>
    <div>
        <div class="article-view-box">
<!--            <div v-if="loading" class="loading">-->
<!--                        Loading..-->
<!--                    </div>-->
            <div class="articleDetail">
                <div class="articleTitle">{{articleDetail.title}}</div>
                <div class="articleMeta"><span>{{articleDetail.author}}</span><span>{{articleDetail.createDate}}</span></div>
                <div class="articleContent" v-html="articleDetail.content"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import RightNav from "../../components/RightNav";
    import articleDetail from "../../data/articleDetail"
    export default {
        props: ['id'],
        components: {
            RightNav
        },
        data() {
            return {
                haha: 'haha',
                articleDetail:'',
                loading:false
            }
        },
        created () {
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
            this.fetchData()
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'fetchData'
        },
        methods:{
            fetchData(){
                this.loading = true
                this.articleDetail = articleDetail
            //     this.$axios({
            //         method:'get',
            //         url:'http://localhost:8081/article/2'
            //     }).then((response) =>{
            //         // this.loading = false
            //         // this.articleDetail = response.data
            //         console.log(response)
            //         this.articleDetail = articleDetail
            //     }).catch((error) =>{
            //         this.articleDetail = articleDetail
            //         console.log(error)
            // })
            }
        }
    }
</script>
<style scoped>
    .articleTitle{
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    }
    .articleMeta{
        height: 30px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #C0C0C0;
    }
    .articleContent{
        margin-top: 20px;
        line-height: 25px;
    }
</style>
