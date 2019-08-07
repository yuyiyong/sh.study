import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
//import Xunlei from "./component/xunlei/xunlei";
import Index from "./indexC";
import Xunlei from "./component/xunlei/xunlei";
import TodoList from "./component/todoList/TodoList";
import Layout from "./component/xunlei/layout/layout";
import List from "./component/router/list";
import Login from "./component/login/login";

/*function Index() {
    return <h2>dUI</h2>;
}*/


function AppRouter() {
    return (
        <Router>
            <Layout>
                <Route path="/" exact component={Index}/>
                <Route path="/todoList/" component={TodoList}/>
                <Route path="/list/:id" component={List} />
                <Route path="/login" component={Login} />
            </Layout>
        </Router>
    );
}

export default AppRouter;