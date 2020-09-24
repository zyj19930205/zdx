<template>
    <div class="top-box">
        <div class="top-content">
            <div class="logo"></div>
            <div class="top-nav-list">
                <ul>
                    <router-link to="/" exact><li class="hvr-fade">首页</li></router-link>
                    <router-link to="/"><li li class="hvr-fade">写文</li></router-link>
                    <router-link to="/tool"><li li class="hvr-fade">工具箱</li></router-link>
                    <router-link to="/userCenter"><li li class="hvr-fade">我的</li></router-link>
                </ul>
            </div>
            <div class="user-info">
              <div class="user-info-img"><img :src="xj"/></div>
                <div class="user-name">熊吉</div>
            </div>
        </div>
    </div>
</template>
<script>
    import logo from '../assets/mylogo.jpg'
    import xj from '../assets/xj.png'
    export default {
        data(){
            return{
                logo:logo,
                xj:xj
            }
        }
    }
</script>
<style lang="scss" scoped>
    %other-styles {
        display: flex;
        flex-wrap: wrap;
    }
    %full-height {
        height: 100%;
        width: 100%;
    }
    *{
        margin: 0;
        padding: 0;
    }
    .logo{
        height: 55px;
        width: 185px;
        background-color: gray;
        img{
            @extend %full-height;
        }
    }
    .top-box{
        z-index: 999;
        background-color: white;
        border-bottom: 1px solid #f4f4f4;
        width: 100%;
        height: 55px;
        position: fixed;
        top: 0;
    }
    .top-content{
        @extend %other-styles;
        width: 1300px;
        height: 55px;
        margin: 0 auto;
    }
    .top-nav-list{
        padding-left: 100px;
    }
    .top-content ul{
        @extend %other-styles;
        list-style: none;
    }
    .top-content ul li{
        height: 55px;
        padding: 0 22px;
        align-items: center;
        display: flex;
        cursor: pointer;
        margin-left: 5px;
        &.hover{
            background-color: #42b983;
        }
    }
    .user-info{
        align-items: center;
        @extend %other-styles;
        margin-left: auto;
        .user-info-img{
            height: 30px;
            width: 30px;
            border-radius: 50%;
            padding: 2px;
            background-color: white;
            /*border: 1px solid #2B2E30;*/
            img{
                @extend %full-height;
                border-radius: 50%;
            }
        }
        .user-name{
            margin-left: 10px;
        }
    }
    .hvr-fade:hover{
        background-color: black;
    }
    .router-link-active {
        text-decoration: none;
    }
    a {
        text-decoraction: none;
    }

</style>
