import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Index from "./indexC";
import TodoList from "./component/todoList/TodoList";
import Layout from "./component/xunlei/layout/layout";
import Login from "./component/login/login";
import {Provider} from 'react-redux';
import store from "./store";
import R_TodoList from './component/todoList_reactRedux/R_TodoList'
import PrimaryNav from "./component/router/primaryNav";
import Css3 from "./component/css3/css3"
import Hooks from "./hooks/hocks";
import ReactAdvance from "./component/reactAdvanced/reactAdvance";

const R_TodoListApp = () => <Provider store={store}><R_TodoList/></Provider>;
const LoginApp = () => <Provider store={store}><Login/></Provider>;

function AppRouter() {
    return (
        <Router>
            <Layout
                arr={arr}
            >
                <Route path="/" exact component={Index}/>
                <Route path="/todoList/" component={TodoList}/>
                <Route path="/router/:id" component={PrimaryNav}/>
                <Route path="/login" component={LoginApp}/>
                <Route path="/todoList-ReactRedux" component={R_TodoListApp}/>
                <Route path="/css3" component={Css3}/>
                <Route path="/hooks" component={Hooks}/>
                <Route path="/reaxtAdvance" component={ReactAdvance}/>
            </Layout>
        </Router>
    );
}

const arr = [
    {title: '首页', url: '/'},
    {title: 'todo列表', url: '/todoList'},
    {title: 'Router例子', url: '/router/1231231'},
    {title: '登录Demo-redux应用', url: '/login/'},
    {title: 'ReactRedux-TodoList', url: '/todoList-ReactRedux/'},
    {title: "css3学习", url: '/css3'},
    {title: "hooks", url: '/hooks'},
    {title: "reaxtAdvance", url: '/reaxtAdvance'},
    {
        title: '新手引导', child: [
            {title: '免费注册', url: '/user/register?key=1'},
            {title: 'Api文档轻松接入', AUrl: ' curConfig.docPath'}
        ]
    },
    {title: '开发者中心', AUrl: 'curConfig.docPath'},
    {
        title: '帮助中心', child: [
            {title: '接入常见问题', url: ''},
            {title: '使用过程中常见问题', url: ''}
        ]
    },
    {title: '关于我们', url: '/front/about?key=4'},
];

export default AppRouter;