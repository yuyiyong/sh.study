import React from 'react';
import {Row,Col} from 'antd';
import Demo2 from "./demo2";
import Counter from "./demo3Reducer";
const Day2  = () => {
  return (
    <div>
        <Row>
            <Col span={8}>
                <Demo2/>
            </Col>
            <Col span={8}>
                <h2>useReduser</h2>
                {Counter(3)}
            </Col>
            <Col span={8}>3</Col>
        </Row>
    </div>
  )
};
export default Day2 ;