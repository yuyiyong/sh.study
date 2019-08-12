import React from 'react';
import styles from "../globalSetting/leftLayout.less";
import {Link} from 'react-router-dom';
const LayoutLeft  = (props) => {
  return (
      <div className={styles.mainDiv}>
          <div className={styles.leftNav}>
              <h3>{props.title}</h3>
              <ul>{
                  props.content.map((item,key) => (
                      <li key={key}><Link to={item.path}>{item.title}</Link></li>
                  ))
              }
              </ul>
          </div>

          <div className={styles.rightMain}>
              {props.children}
          </div>
      </div>
  )
};
export default LayoutLeft ;