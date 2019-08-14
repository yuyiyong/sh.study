/*import React, {Component} from 'react';
import {Col, Row} from 'antd';
import imgSrc from '../../globalSetting/img/tou.jpg'
import styles from './setting/day2.less'
import boxshImgSrc from '../../globalSetting/img/bizhi.png'

class Day2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={8}>
                        <div>
                            <img className={styles.imgDiv} src={imgSrc} alt=""/>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className={styles.linearGradient1}/>
                        <div className={styles.linearGradient2}/>
                        <div className={styles.circle}/>
                        <div className={styles.ellipse}/>
                        <div className={styles.circle2}/>
                        <div className={styles.ellipse2}/>
                        <div className={styles.re_line}/>
                        <div className={styles.re_circle}/>
                    </Col>
                    <Col span={8}>
                        <div className={styles.boxShadowDiv}>
                            <img src={boxshImgSrc} className={styles.boxShadow} alt=""/>
                        </div>
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
=======*/
import React, {Component} from 'react';
import {Col, Row} from 'antd';
import KeyFrame from "./keyFrame";
import Loading from "./loading";
import Loading2 from "./loading2";
import imgSrc from '../../globalSetting/img/tou.jpg'
import styles from './setting/day2.less'
import boxshImgSrc from '../../globalSetting/img/bizhi.png'

class Day2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
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
                        <div className={styles.linearGradient1}/>
                        <div className={styles.linearGradient2}/>
                        <div className={styles.circle}/>
                        <div className={styles.ellipse}/>
                        <div className={styles.circle2}/>
                        <div className={styles.ellipse2}/>
                        <div className={styles.re_line}/>
                        <div className={styles.re_circle}/>
                    </Col>
                    <Col span={8}>
                        <div className={styles.boxShadowDiv}>
                            <img src={boxshImgSrc} className={styles.boxShadow} alt=""/>
                        </div>
                    </Col>
                </Row>
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