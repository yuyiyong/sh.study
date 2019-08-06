import styles from "../setting/layoutBlock.less";

import React, {Component} from 'react';
/*import {connect} from 'dva';
@connect(({})=>({
loading:loading.effects[''],
}))*/
class LayoutBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
          <div className={styles.container}>
              <div
                  className={styles.title}
              >
                  <div>{this.props.title}</div>
                  <p className={styles.p}>{this.props.descript}</p>
              </div>

              <div className={styles.content}>
                  {this.props.children}
              </div>
          </div>
      )
  }
}

export default LayoutBlock;
