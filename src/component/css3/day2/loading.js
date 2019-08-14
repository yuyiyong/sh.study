import React, {useState, useEffect} from 'react';
import styles from './setting/loading.less'
const Loading  = () => {
  return (
    <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
};
export default Loading ;