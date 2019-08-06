import styles from './setting/advantage.less'
import BLayout from "./layout/layoutBlock";
import React, {Component} from 'react';

const attBlock = [1, 2, 3, 4, 5];

class Advantage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minWidth: '400px',
      active:0,
    }
  }

  render() {


    return (
      <div className={styles.layout}>
        <BLayout title='核心优势' >
          <ul className={styles.ulDiv}>
            {
              attBlock.map((item, key) => {
                return (
                  <li
                    className={[styles.liDiv,
                      this.state.active===key?styles.active:''
                    ].join(' ')}
                    key={key}
                    onMouseEnter={() => this.onMousein(key)}
                    onMouseLeave={() => this.onMouseout(key)}
                  >{item}</li>
                )
              })
            }
          </ul>
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
  }
}

export default Advantage;
// export default Advantage ;
