import styles from './setting/appSectiona.less'
import React, {Component} from 'react';
import BLayout from "./layout/layoutBlock";

/*import {connect} from 'dva';
@connect(({})=>({
loading:loading.effects[''],
}))*/
class AppSeciona extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active:0,
    }
  }

  render() {
    console.log("_______",this.state.active);
    return (
      <div className={styles.layout}>
        <BLayout
          title='迅雷链可应用场景'
          descript='我们提供智能合约开发、区块链应用落地、区块链商业生态建设等服务；触达实体产业、人工智能、物联网、生命科学在内的各行各业。'
        >
          <div className={styles.global}>
            <div className={styles.left}>
              <ul>
                {
                  arr.map((item,key)=>{
                    return (
                      <li
                        className={[
                          styles.L_liDiv,
                          this.selectKey(key)
                        ].join(' ')}
                        key={"l"+key}
                        style={{background:item.color}}
                        onMouseEnter={() => this.onMousein(key)}
                        onMouseLeave={() => this.onMouseout(key)}
                      >
                        {'图片'+item.name}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className={styles.right}>
            <ul>
              {
                arr.map((item,key)=>{
                  return (
                    <li
                      className={[
                        styles.R_liDiv,
                        this.state.active===key?styles.active:''
                      ].join(' ')}
                      key={"l"+key}
                      style={{background:item.color}}
                    >
                      {'文字'+item.name}
                    </li>
                  )
                })
              }
            </ul>
            </div>
          </div>
        </BLayout>
      </div>
    )
  }
  onMousein = (key) => {
    console.log("in",key);
    this.setState({
      active:key,
    })
  };
  onMouseout = (key) => {
    console.log("out",key);
  };
  selectKey = (key) =>{
    if(key===1) return styles.li1;
    if(key===2) return styles.li2;
    if(key===3) return styles.li3;

  }

}
const arr = [
  {name:'a',color:'red',delay:'0.2s'},
  {name:'b',color:'green',delay:'0.6s'},
  {name:'c',color:'#de7658',delay:'0.4s'}
];

export default AppSeciona;
