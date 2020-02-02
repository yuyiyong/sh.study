import React from 'react';
import {Row, Col} from 'antd';
import UseSon from "./useSonDemo/useSon";
import UseFormSonFun from "./useFormSonFun/UseFormSonFun";
import WinSizeDemo from "./useWinSize/useWinSizeDemo";

const Day4 = () => {
    return (
        <div>
            <Row>
                <Col span={8}>
                    <h3>父组件用子组件demo</h3>
                    <UseSon/>
                </Col>
                <Col span={8}>
                    <h3>父组件调用子组件, 子组件有Form的submit方法</h3>
                    <UseFormSonFun/>
                </Col>
                <Col span={8}>
                    <h3>自定义函数</h3>
                    <WinSizeDemo/>
                </Col>
            </Row>
            <Row>
                <Col span={8}>1页</Col>
                <Col span={8}>2页</Col>
                <Col span={8}>3页</Col>
            </Row>
            <Row>
                <Col span={8}>1页</Col>
                <Col span={8}>2页</Col>
                <Col span={8}>3页</Col>
            </Row>

        </div>
    )
};
export default Day4;
