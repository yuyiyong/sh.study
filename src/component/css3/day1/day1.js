import React from 'react';
import styles from "./setting/day1.less";
import {Col, Row} from 'antd';
import 'antd/dist/antd.css';

const Day1 = () => {
    return (
        <div>
            <Row>
                <Col span={8}>
                    <div className={styles.imgMian}>
                        <img className={styles.imgMv} src={require('./setting/imge/betauful.jpg')}
                             alt=""/>
                    </div>

                </Col>
                <Col span={8}>
                    <div className={styles.aB}>

                        <a href="">变色a标签</a>
                    </div>
                </Col>
                <Col span={8}>
                    <div className={styles.InputB}>
                        <input type="text"/><br/>
                        <input type="text" disabled/><br/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <div className={[styles.demo, styles.clearfix].join(' ')}>
                        <ul>
                            <p>88</p>
                            <li><a href="">1</a></li>
                            <li><a href="">2</a></li>
                            <li><a href="">3</a></li>
                            <li><a href="">4</a></li>
                            <li><a href="">5</a></li>
                            <li><a href="">6</a></li>
                            <li><a href="">7</a></li>
                            <li><a href="">8</a></li>
                            <li><a href="">9</a></li>
                            <li><a href="">10</a></li>
                        </ul>
                    </div>
                </Col>
                <Col span={8}>
                    <div className={styles.weiYuanSu}>
                        <p>
                            财经 | 7月份CPI同比涨2.8% 鲜果价格涨39.1%
                            早评：沪指高开0.4%重返2800点 徐翔离婚持续发酵
                            科技 | 107亿美元！博通收购赛门铁克企业业务
                            2019 MacBook Air体验:想重塑经典却无奈性能妥协
                            体育 | 投1千可赚213万!外籍高手足彩15连中盈利逆天
                            惨烈车祸中,这名新疆球员逆火施救:做好了最坏准备
                            娱乐 | 李嫣晒画像为王菲庆生 自侃画得不像
                            汪小菲获儿女贴心送礼：我最幸福
                            时尚 | 黄多多的蝎尾辫 你离少女只差这步！
                        </p>
                    </div>
                </Col>
                <Col span={8}>
                    <div className={styles.bAa}>
                        上下两个图
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <div className={styles.borderRadius}>

                    </div>
                </Col>
                <Col span={8}>
                    <div className={styles.sanjiao}></div>
                    <div className={styles.chart}>Hello, Dui</div>
                </Col>
                <Col span={8}>
                    <div className={styles.diamond}></div>
                    <div className={styles.parallel}></div>
                    <div className={styles.start}></div>
                    <div className={styles.sixStart}></div>
                    <div className={styles.tiXing}></div>

                </Col>
            </Row>
            <Row>
                <Col span={8}>

                    <div className={styles.sixBian}></div>
                    <div className={styles.heart}></div>
                    <div className={styles.egg}></div>
                    <div className={styles.taiji}></div>
                </Col>
                <Col span={8} className={styles.globCol}>
                    <div className={styles.bgFont}>
                        <p>可是那两根琴弦，却在半途中被另一道更锐利的银光截断了，紧绷之势骤松，断弦垂到了地上。
                            截断它的，也是琴弦！
                            断弦震颤之势割伤了金光瑶的手心，他旋即松手，而蓝忘机也恰好在此时撤袖，面不改色地收回了琴弦。
                            窃技之徒偷师到的弦杀术，毕竟不如正统精习的弦杀术快且狠。
                            一口气也没喘，金光瑶随即挥出第三根琴弦。这次的目标是距离蓝忘机较远的聂怀桑，好让蓝忘机来不及施救。可是，这一着也落空了。一声清脆的玉石与金石砰击之响，蓝曦臣持着裂冰，挡在聂怀桑身前。
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
};
export default Day1;