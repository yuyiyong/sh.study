import React from 'react';
import styles from "./setting/day1.less";
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';

const Day1 = () => {
    return (
        <Row>
            <Col span={8}>
                <img className={styles.imgMv} src={require('./setting/imge/7a722219gy1g4shszsbmaj20b40gpmxg.jpg')} alt=""/>
            </Col>
          <Col span={8}>
            <a href="">变色a标签</a>
          </Col>
          <Col span={8}>
            <input type="text"/><br/>
            <input type="text" disabled/><br/>

          </Col>
        </Row>

    )
};
export default Day1;