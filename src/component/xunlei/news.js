import styles from './setting/news.less'
import BLayout from "./layout/layoutBlock";
import React from "react";

const News = () => {
  return (
    <div className={styles.layout}>
      <BLayout
        title='最新动态'
      >
        <div className={styles.bLayout}>
       <div className={styles.left}>
         <div className={styles.card}>
           <div className={styles.img}></div>
           <div className={styles.fontContent}>
              <div className={styles.titles}>
                港科大与迅雷合建区块链联合实验室
              </div>
             <p>6月17日，香港科技大学(以下简称“港科大”)与迅雷集团正式宣布成立香港科技大学-迅雷区块链联合实验室。</p>
           </div>

         </div>
         <p className={styles.bottomP}>
           中国版权保护中心携手迅雷链 构建版权新生态
           荣获“新经济之王 企业服务最具影响力”奖22222
         </p>
       </div>
        <div className={styles.left}>
          <div className={styles.card}>
            <div className={styles.img}></div>
            <div className={styles.fontContent}>
              <div className={styles.titles}>
                港科大与迅雷合建区块链联合实验室
              </div>
              <p>6月17日，香港科技大学(以下简称“港科大”)与迅雷集团正式宣布成立香港科技大学-迅雷区块链联合实验室。</p>
            </div>

          </div>
          <p className={styles.bottomP}>
            中国版权保护中心携手迅雷链 构建版权新生态
            荣获“新经济之王 企业服务最具影响力”奖
          </p>
        </div>
        <div className={styles.left}>
          <div className={styles.card}>
            <div className={styles.img}></div>
            <div className={styles.fontContent}>
              <div className={styles.titles}>
                港科大与迅雷合建区块链联合实验室
              </div>
              <p>6月17日，香港科技大学(以下简称“港科大”)与迅雷集团正式宣布成立香港科技大学-迅雷区块链联合实验室。</p>
            </div>

          </div>
          <p className={styles.bottomP}>
            中国版权保护中心携手迅雷链 构建版权新生态
            荣获“新经济之王 企业服务最具影响力”奖
          </p>
        </div>
        </div>
      </BLayout>
    </div>
  )
};
export default News;
