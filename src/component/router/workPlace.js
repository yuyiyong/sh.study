import React from 'react';
import {Link,Route} from 'react-router-dom'
import Money from "./pages/workPlace/money";
import GetUp from "./pages/workPlace/getUp";
import styles from './pages/layout/setting/video.less'
const WorkPlace  = () => {
  return (
    <div>
       <div className={styles.topNav}>
           <ul>
               <li><Link to='/router/123/workPlace/money'>money</Link></li>
               <li><Link to='/router/123/workPlace/getUp'>早起攻略</Link></li>
           </ul>
       </div>
        <div className={styles.videoContent}>
            <h2>工作职场</h2>
            <Route path="/router/:id/workPlace/money" component={Money}/>
            <Route path="/router/:id/workPlace/getUp" component={GetUp}/>

        </div>
    </div>
  )
};
export default WorkPlace ;