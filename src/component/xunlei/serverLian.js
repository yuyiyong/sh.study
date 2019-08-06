import styles from './setting/serverLian.less'
import BLayout from "./layout/layoutBlock";
import React, {Component} from 'react';
/*import {connect} from 'dva';
@connect(({})=>({
loading:loading.effects[''],
}))*/
class ServerLian extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
          <div  className={styles.layout}>
              <BLayout
                  title='迅雷链为您提供服务'
                  descript='迅雷链为各行各业开发者提供成长的沃土，全维度解决企业和开发者应用区块链的难题，让开发者专注于应用创新和功能开发。'
              >
                  <div className={styles.block}></div>
                  <div className={styles.block}></div>
              </BLayout>
          </div>
      )
  }
}

export default ServerLian;
