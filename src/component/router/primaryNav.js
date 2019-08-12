import React from 'react';
import styles from './pages/layout/setting/primaryNav.less'
import {Link,Route} from 'react-router-dom'
import Home from "./home";
import Video from "./video";

import Layout from "../xunlei/layout/layout";
import List from "./list";
import WorkPlace from "./workPlace";
const PrimaryNav  = (props) => {
  return (
    <div className={styles.mainDiv}>
        <div className={styles.leftNav}>
            <h3>一级导航</h3>
            <ul>
                <li><Link to='/router/123/home'>首页</Link></li>
                <li><Link to='/router/123/video'>视频教程</Link></li>
                <li><Link to='/router/123/workPlace'>工作职场</Link></li>
                <li><Link to='/router/133/list'>list表</Link></li>
            </ul>
        </div>

        <div className={styles.rightMain}>
            <Route path="/router/:id/home" component={Home}/>
            <Route path="/router/:id/video" component={Video}/>
            <Route path="/router/:id/workPlace" component={WorkPlace}/>
            <Route path="/router/:id/list" component={List}/>
        </div>
    </div>
  )
};
export default PrimaryNav ;