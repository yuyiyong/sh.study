import React from 'react';
import Ref from './ref';
import {Row,Col} from 'antd';
import UnContrulCo from "./unContrulCo";
import ThemedButton from "./context/themed-button";
import App from "./context/app";




function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
       // console.log("props.children",props.children(i));
        items.push(props.children(i));
    }
    return <div>{items}</div>
}


const demo1 = () => {
    return (
        <div>
            <Row>
                <Col span={8}>
                    <h2>函数, 看下效果</h2>
                    <Repeat numTimes={10}>
                        {(index) => <div key={index}>this is item{index} in the list </div>}
                    </Repeat>
                </Col>
                <Col span={8}>
                    <h2>Ref , 看下效果</h2>
                    <Ref />
                </Col>
                <Col span={8}>
                    <h2>看下受控和不受控组件</h2>
                    <UnContrulCo />
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <br/>
                    <h2>看下动态 Context</h2>
                    <App />
                </Col>
                <Col span={8}></Col>
                <Col span={8}></Col>
            </Row>


        </div>
    )
};
export default demo1;