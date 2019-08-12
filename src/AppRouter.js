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

const R_TodoListApp = () => <Provider store={store}><R_TodoList/></Provider>;
const LoginApp = () => <Provider store={store}><Login/></Provider>;

function AppRouter() {
    return (
        <Router>
            <Layout>
                <Route path="/" exact component={Index}/>

                <Route path="/todoList/" component={TodoList}/>
                <Route path="/router/:id" component={PrimaryNav}/>
                <Route path="/login" component={LoginApp}/>
                <Route path="/todoList-ReactRedux" component={R_TodoListApp}/>
                <Route path="/css3" component={Css3} />
            </Layout>
        </Router>
    );
}

export default AppRouter;