import styles from './setting/banner.less'
import React, {Component} from 'react';
/*import {connect} from 'dva';
@connect(({})=>({
loading:loading.effects[''],
}))*/
class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
          <div className={styles.layout}>
              banner
          </div>
      )
  }
}

export default Banner;