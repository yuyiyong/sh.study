import styles from './setting/winner.less'
import BLayout from "./layout/layoutBlock";
import React from "react";
import {RowMy, ColMy} from "./RowMy/RowMy";

const Winner = () => {
  return (
    <div className={styles.layout}>
      <BLayout
        title='携手共赢'
      >
        <div className={styles.ConGlobal}>


          <RowMy>
            <ColMy>
              <div className={styles.imgDiv}>123
              </div>
            </ColMy>
            <ColMy>
              <div className={styles.imgDiv}>
              </div>
            </ColMy>
            <ColMy>
              <div className={styles.imgDiv}>
              </div>
            </ColMy>
            <ColMy>
              <div className={styles.imgDiv}>
              </div>
            </ColMy>
            <ColMy>
              <div className={styles.imgDiv}>
              </div>
            </ColMy>
            <ColMy>
              <div className={styles.imgDiv}>
              </div>
            </ColMy>
            <ColMy>
              <div className={styles.imgDiv}>
              </div>
            </ColMy>
            <ColMy>
              <div className={styles.imgDiv}>
              </div>
            </ColMy>
            <ColMy>
              <div className={styles.imgDiv}>
              </div>
            </ColMy>
            <ColMy>
              <div className={styles.imgDiv}>
              </div>
            </ColMy>


          </RowMy>
        </div>
      </BLayout>
    </div>
  )
};
export default Winner;
