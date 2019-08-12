import React from 'react';
import styles from "../component/globalSetting/leftLayout.less";
import {Link} from 'react-router-dom'

const HocksLayout  = (props) => {
  return (
      <div className={styles.mainDiv}>
          <div className={styles.leftNav}>
              <h3>Hooks学习</h3>
              <ul>{
                  props.content.map((item,key) => (
                      <li><Link to={item.path}>{item.title}</Link></li>
                  ))
              }
                 {/* <li><Link to='/css3/day1'>day1</Link></li>*/}
              </ul>
          </div>

          <div className={styles.rightMain}>
              {props.children}
          </div>
      </div>
  )
};
export default HocksLayout ;