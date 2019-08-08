import React from 'react';
import styles from "./setting/css3Layout.less";
import Home from "../router/home";
import Video from "../router/video";
import WorkPlace from "../router/workPlace";
import List from "../router/list";
import {Link} from 'react-router-dom'
const Css3Layout  = (props) => {
  return (
      <div className={styles.mainDiv}>
          <div className={styles.leftNav}>
              <h3>Css3学习</h3>
              <ul>
                  <li><Link to='/css3/day1'>day1</Link></li>

              </ul>
          </div>

          <div className={styles.rightMain}>
              {props.children}
          </div>
      </div>
  )
};
export default Css3Layout ;