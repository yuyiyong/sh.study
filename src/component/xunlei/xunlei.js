import Layout from "./layout/layout";
import styles from './setting/xunlei.less';
import Banner from './banner';
import QuicklyConnect from "./quicklyConnect";
import Advantage from "./advantage";
import AppSeciona from "./appSeciona";
import ServerLian from "./serverLian";
import AboutUs from './aboutUs';
import News from "./news";
//import Winner from "./winner";


import React, {Component} from 'react';
const childrenContent = [
  <Banner key="aa1" />,
  <QuicklyConnect key="aa2" />,
  <Advantage key="aa3"/>,
  <AppSeciona key="aa4"/>,
  <ServerLian key="aa5"/>,
  <AboutUs key="aa6"/>,
  <News key="aa7"/>,
  {/*<Winner key="aa1"/>,*/}
];
/*import {connect} from 'dva';
@connect(({})=>({
loading:loading.effects[''],
}))*/
class Xunlei extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Layout classname={styles.text} heard = {styles.head}>
            {/*{childrenContent}*/}
            <Banner key="aa1" />
            <QuicklyConnect key="aa2" />
            <Advantage key="aa3"/>
            <AppSeciona key="aa4"/>
            <ServerLian key="aa5"/>
            <AboutUs key="aa6"/>
            <News key="aa7"/>
          </Layout>
        </div>
    )
  }
}

export default Xunlei;

