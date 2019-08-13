import React from 'react';
import styles from "./setting/css3Layout.less";
import {Link} from 'react-router-dom'
import LayoutLeft from "../layout/layoutLeft";

const Css3Layout  = (props) => {
  return (
      <LayoutLeft
          title='css3 学习..'
          content={props.content}
      >
          {props.children}
      </LayoutLeft>

  )
};
export default Css3Layout ;