import Layout from "./layout/layout";
import styles from './setting/xunlei.less';
import Banner from './banner';
import QuicklyConnect from "./quicklyConnect";
import Advantage from "./advantage";
import AppSeciona from "./appSeciona";
import ServerLian from "./serverLian";
import AboutUs from './aboutUs';
import News from "./news";
import React from 'react';
//import Winner from "./winner";



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

const XunLei  = () => {

  return (
      <div>
        <Layout classname={styles.text} heard = {styles.head}>
          {childrenContent}
        </Layout>
      </div>
  )
};
export default XunLei ;


