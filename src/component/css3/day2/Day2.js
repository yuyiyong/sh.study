import React, {Component} from 'react';
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
}

export default Day2;