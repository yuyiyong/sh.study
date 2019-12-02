import React, {useState, useEffect} from 'react';
import {Row, Col} from 'antd'
import WebsocketDemo1 from "./day1/WebsocketDemo1";

const WebSockets = () => {
    return (
        <>
            <Row>
                <Col span={8}><WebsocketDemo1/></Col>
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
export default WebSockets;
