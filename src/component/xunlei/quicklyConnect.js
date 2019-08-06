import BLayout from './layout/layoutBlock'
import styles from './setting/quicklyConnect.less'
import {Col, Row} from 'antd';


import React, {Component} from 'react';
/*import {connect} from 'dva';
@connect(({})=>({
loading:loading.effects[''],
}))*/
const wrapperCol = {
  //xs: {span: 24},
  sm: {span: 24},
  md: {span: 8},
};

class QuicklyConnect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.layout}>

          <BLayout title='快速接入'>
            <Row>
              <Col {...wrapperCol}>
                <div className={styles.insideLay}>
                  <div className={styles.imgDiv}>
                    {/*<img src="https://blockchain.xunlei.com/images/platform/v2/icon-index-pro1.png" alt=""/>*/}
                  </div>
                  <div className={styles.ccontent}>
                    <div className={styles.h2title}> 合约开放平台</div>
                    <p className={styles.h2content}>基于迅雷链，提供支持智能合约的稳定、快速的区块链服务，帮助开发者降低成本、打造去中心化应用。</p>
                  </div>
                </div>
              </Col>
              <Col {...wrapperCol}>
                <div className={styles.insideLay}>
                  <div className={styles.imgDiv}>
                    {/*<img src="https://blockchain.xunlei.com/images/platform/v2/icon-index-pro1.png" alt=""/>*/}
                  </div>
                  <div className={styles.ccontent}>
                    <div className={styles.h2title}> 合约开放平台</div>
                    <p className={styles.h2content}>基于迅雷链，提供支持智能合约的稳定、快速的区块链服务，帮助开发者降低成本、打造去中心化应用。</p>
                  </div>
                </div>
              </Col>
              <Col {...wrapperCol}>
                <div className={styles.insideLay}>
                  <div className={styles.imgDiv}>
                    {/*<img src="https://blockchain.xunlei.com/images/platform/v2/icon-index-pro1.png" alt=""/>*/}
                  </div>
                  <div className={styles.ccontent}>
                    <div className={styles.h2title}> 合约开放平台</div>
                    <p className={styles.h2content}>基于迅雷链，提供支持智能合约的稳定、快速的区块链服务，帮助开发者降低成本、打造去中心化应用。</p>
                  </div>
                </div>
              </Col>
            </Row>
          </BLayout>
        </div>

    )
  }
}

export default QuicklyConnect;
