import styles from './setting/aboutUs.less'
import BLayout from "./layout/layoutBlock";

import React, {Component} from 'react';

/*import {connect} from 'dva';
@connect(({})=>({
loading:loading.effects[''],
}))*/
class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0,
    }
  }

  render() {
    let opcityL = this.state.left>=0?0:1;
    let opcityR = this.state.left <= -1500?0:1;
    return (
      <div className={styles.layout}>
        <BLayout
          title='合作案例'
          descript='迅雷链联合优秀合作伙伴，共同打造专业开放的迅雷链应用圈生态'
        >
          <div className={styles.golob}>
            <div className={styles.left}>
              <a
                onClick={() => this.onhandleLeft()}
                style={{opacity:opcityL}}
              >left</a>
            </div>
            <div className={styles.center}>
              <ul
                className={styles.ulD}
                style={{left: this.state.left}}
              >
                <li>
                  <div className={styles.liDiv}>1</div>
                </li>
                <li>
                  <div className={styles.liDiv}>2</div>
                </li>
                <li>
                  <div className={styles.liDiv}>3</div>
                </li>
                <li>
                  <div className={styles.liDiv}>4</div>
                </li>
                <li>
                  <div className={styles.liDiv}>5</div>
                </li>
                <li>
                  <div className={styles.liDiv}>6</div>
                </li>
                <li>
                  <div className={styles.liDiv}>7</div>
                </li>
                <li>
                  <div className={styles.liDiv}>8</div>
                </li>
                <li>
                  <div className={styles.liDiv}>9</div>
                </li>
              </ul>
            </div>
            <div className={styles.right}>
              <a
                onClick={()=>this.handleRight()}
                style={{opacity:opcityR}}
              >right</a>
            </div>

          </div>
        </BLayout>
      </div>
    )
  }

  onhandleLeft = () => {
    let {left} = this.state;
    left = left+1200;
    if(left>=0 ){
      left = 0
    }
    this.setState({
      left:left
    })
  }
  handleRight = () => {
    let {left} = this.state;

    left = left - 1200;
    if (left <= -1500) {
      left = -1500;
    }
    this.setState({
      left: left,
    });
  }
}

export default AboutUs;
