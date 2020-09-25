<template>
    <el-row>
        <el-col :span="16">
    <div class="write-box">
        <div class="write-box-title">今天做了啥？</div>
        <div class="write-editor">
            <div style="width: 400px;display: flex;margin-bottom: 20px">
                <el-input placeholder="请输入标题" prefix-icon="el-icon-toilet-paper"/>
            </div>
        <ArticleEditor v-model="detail" :isClear="isClear" @change="change"></ArticleEditor>
            <div style="margin-top: 10px">
                <div class="commitArticle hvr-ripple-out">我写完了！</div>
            </div>
        </div>
    </div>
        </el-col>
    </el-row>
</template>
<script>
    import ArticleEditor from "./component/ArticleEditor";
    export default {
        components:{
            ArticleEditor
        },
        data() {
            return {
                isClear: false,
                detail:""
            }
        },
        methods: {
            change(val) {
                console.log(val)

            }
    }
    }
</script>
<style>
    .write-box{
        margin-top: 50px;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
        border-radius: 10px;
        width: 1300px;
        background-color: white;
        min-height: 500px;
    }
    .write-box-title{
        height: 30px;
        background-color: #303133;
        color: white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        font-size: 12px;
        line-height: 30px;
        padding: 0px 20px;
    }
    .write-editor{
        padding: 30px;
    }
    .el-input__inner:focus {
        border-color: black !important;
        outline: 0;
    }
    .commitArticle{
        margin: 20px auto;
        height: 40px;
        width: 200px;
        background-color: #303133;
        color: #f3f6f8;
        border-radius: 2px;
        font-size: 14px;
        line-height: 38px;
        text-align: center;
        cursor: pointer;
    }
    .hvr-ripple-out:before{
        border: #303133 solid 6px;
    }
    .hvr-ripple-out{
        display: block;
    }
</style>
