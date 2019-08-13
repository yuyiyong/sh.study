import React, {Component} from 'react';
import {Row,Col} from 'antd';
import {require} from "../../../utils/commentUtils";
import imgSrc from '../../globalSetting/img/tou.jpg'
import styles from './setting/day2.less'
class Day2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div>
         <Row>
             <Col span={8}>
                 <div >
                     <img className={styles.imgDiv} src={imgSrc} alt=""/>
                 </div>
             </Col>
             <Col span={8}>
                 1231231
             </Col>
             <Col span={8}>

             </Col>
         </Row>
         <Row>
             <Col span={8}></Col>
             <Col span={8}></Col>
             <Col span={8}></Col>
         </Row>
     </div>
    )
  }
}

export default Day2;