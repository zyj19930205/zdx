import Vue from 'vue'
import Router from 'vue-router'

import ToolBox from "./pages/tool/ToolBox";
import UserCenter from "./pages/usercenter/UserCenter";
import Article from "./pages/article/Article";
import ArticleView from "./pages/article/ArticleView";
import ArticleList from "./pages/article/component/ArticleList";
import WriteArticle from "./pages/article/WriteArticle";

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',name:'Article',component:Article,children:[
                {
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: '/articleView/:id',
                    component: ArticleView,
                    name:'articleView',
                    props:true
                },
                {
                    path: '/',
                    component: ArticleList,
                    name:'ArticleList'
                }
            ]
        },
        {path:'/write',name: 'WriteArticle',component: WriteArticle},
        {path:'/tool',name:'ToolBox',component:ToolBox},
        {path:'/userCenter',name:'UserCenter',component:UserCenter}
        // {path:'/articleView/:id',name:'articleView',component:ArticleView,props: true}
        ]
})
