import React from 'react';
import {Route,Link} from 'react-router-dom';
import ReactPage from "./pages/video/ReactPage";
import Flutter from "./pages/video/Flutter";
import Vue from "./pages/video/Vue";
import styles from './pages/layout/setting/video.less'
const Video  = () => {
  return (
    <div>
        <div className={styles.topNav}>
            <ul>
                <li><Link to="/router/123/video/reactpage">React教程</Link></li>
                <li><Link to="/router/123/video/flutter">flutter教程</Link></li>
                <li><Link to="/router/123/video/Vue">vue教程</Link></li>
            </ul>
        </div>
        <div className={styles.videoContent}>
            <div><h3>视频教程</h3></div>
            <Route path="/router/123/video/reactpage" component={ReactPage}></Route>
            <Route path="/router/123/video/flutter" component={Flutter}></Route>
            <Route path="/router/123/video/Vue" component={Vue}></Route>
        </div>
    </div>
  )
};
export default Video ;