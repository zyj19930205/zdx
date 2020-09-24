<template>
    <div>
        <div class="article-view-box">
            <div v-if="loading" class="loading">
                        Loading..
                    </div>
            <div class="article-content" v-html="articleDetail.content"></div>
        </div>
    </div>
</template>
<script>
    import RightNav from "../../components/RightNav";
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
                this.$axios({
                    method:'get',
                    url:'http://localhost:8081/article/2'
                }).then((response) =>{
                    this.loading = false
                    this.articleDetail = response.data
                }).catch((error) =>{
                    console.log(error)
            })
            }
        }
    }
</script>
<style scoped>

</style>
