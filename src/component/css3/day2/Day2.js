import React, {Component} from 'react';
import {Row,Col} from 'antd';
import {require} from "../../../utils/commentUtils";
import imgSrc from '../../globalSetting/img/tou.jpg'
import styles from './setting/day2.less'
import KeyFrame from "./keyFrame";
import Loading from "./loading";
import Loading2 from "./loading2";
class Day2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div>
         <Row>
             <Col span={8}>
                 <div className={styles.fontD}>
                     <img className={styles.imgDiv} src={imgSrc} alt=""/>
                     Dui
                 </div>
             </Col>
             <Col span={8}>
                 <div className={styles.fontApple}>
                     运动
                 </div>
                 <KeyFrame/>
             </Col>
             <Col span={8}>
                 <Loading/>
                 <Loading2/>
             </Col>
         </Row>
         <Row>
             <Col span={8}>
                 <div className={styles.textOverflow1}>
                     React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据改变时 React 能有效地更新并正确地渲染组件。
                 </div>
                 <div className={styles.textOverflow2}>
                     React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据改变时 React 能有效地更新并正确地渲染组件。
                 </div>
             </Col>
             <Col span={8}>
                 <div className={styles.lastD}>
                    Css最后一节 rem
                     <h1>H1标签</h1>
                 </div>

             </Col>
             <Col span={8}></Col>
         </Row>
     </div>
    )
  }
}

export default Day2;