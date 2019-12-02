import React, {useState, useEffect} from 'react';
import {Row, Col} from 'antd'
import DecoratorsDemo from "./day1/DecoratorsDemo";

const Decorators = () => {
    return (
        <>
            <Row>
                <Col span={8}><DecoratorsDemo/></Col>
                <Col span={8}>2</Col>
                <Col span={8}>3</Col>
            </Row>
            <Row>
                <Col span={8}></Col>
                <Col span={8}></Col>
                <Col span={8}></Col>
            </Row>

        </>
    )
};
export default Decorators;
