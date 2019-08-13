import React from 'react';
import HOCdemo from "./HOC/HOCdemo";
import MouseTracker, {Cat} from "./renderProps/renderProps";
import {Row, Col} from 'antd';

const Day2 = () => {
    return (
        <div >

            <Row>
                <Col span={8}>
                    <HOCdemo/>
                </Col>
                <Col span={8}>
                    <h2>Render Props</h2>
                    <MouseTracker
                        render={mouse =>(
                            <Cat mouse={mouse} />
                        )}
                    />
                </Col>
                <Col span={8}></Col>
            </Row>


        </div>
    )
};
export default Day2;