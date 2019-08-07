import React, {Component} from 'react';
import styles from './setting/menu.less'
// import Link from 'umi/link';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class MyMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: -1,
      activeId: -1,
    }
    // this.textDiv = React.createRef();
  }

  componentDidMount() {
    const {active} = this.props;
    this.setState({
      activeKey: active ? active : 0,
    })
  }


  render() {
    const {active} = this.props;
    //console.log("active:", active);
   // console.log("this.state.activeKey", this.state.activeKey);
    //主菜单下划线
    let styleStr = '';
    //字体颜色
    let fontStr = '';
    //子菜单背景颜色
    let bgStr = '';
    const {arr} = this.props;
    // let left = this.textDiv.current && this.textDiv.current.offsetLeft;
    //console.log('text...textDiv...', left);


    return (
      <div>
        <ul className={styles.nav}>
          {arr.map((item, key) => {
            styleStr = parseInt(this.state.activeKey) === key ? '2px solid rgba(24, 144, 255, 1)' : '';
            fontStr = parseInt(this.state.activeKey) === key ? 'rgba(24, 144, 255, 1)' : '';
            return (
              this.buildLi(item, key, styleStr, fontStr, bgStr)
            )
          })}
        </ul>
      </div>
    )
  }

  buildLi = (item, key, styleStr, fontStr, bgStr) => {
    if (item.AUrl) {
      return (
        <a href={item.AUrl} target="view_frame" key={key + 'ba'}>
          {this.buildUl({key, styleStr, fontStr, item})}
        </a>
      )
    } else if (item.url) {
      return <Link to={item.url} key={key + 'a'}>
        {this.buildUl({key, styleStr, fontStr, item, bgStr})}
      </Link>;
    } else {
      return this.buildUl({key, styleStr, fontStr, item, bgStr})
    }
  };
//子目录
  buildUl = ({key, styleStr, fontStr, item, bgStr}) => {
    //this.getOffsetLeft();
    const left = this.state.left;
    return <li
      key={key}
      onClick={() => this.handle(key)}
      style={{borderBottom: styleStr}}
      className={styles.menuLi}
    >
      <span style={{color: fontStr}}>{item.title}</span>
      {this.buildZi(item, key, fontStr, bgStr)}
    </li>;
  };

  buildZi(item, key, fontStr1, bgStr) {
    if (!item.child)
      return;
    /*this.setState({
      leftSing: true,
      left:'',
    });*/
    return <div
      //ref={this.textDiv}
      className={styles.menuDivZ}
      style={{left: this.state.left}}
    >
      <ul className={styles.zUl}>{
        item.child.map((itemChild, id) => {
          bgStr = parseInt(this.state.activeKey) === key && parseInt(this.state.activeId) === id ? '#e6f7ff' : '';
          fontStr1 = parseInt(this.state.activeKey) === key && parseInt(this.state.activeId) === id ? 'rgba(24, 144, 255, 1)  ' : '';
          if (itemChild.AUrl) {
            return <a href={itemChild.AUrl} target="view_frame" key={key + 'ab'}>
              {this.liOnClickItem(key, id, fontStr1, itemChild, bgStr)}
            </a>
          } else {
            return <Link to={itemChild.url} key={id + 'acb'}>
              {this.liOnClickItem(key, id, fontStr1, itemChild, bgStr)}
            </Link>
          }
        })
      }</ul>
    </div>;
  }

  liOnClickItem(key, id, fontStr1, itemChild, bgStr) {
    return <li
      style={{background: bgStr,}}
      onClick={(e) => {
        // e.preventDefault();
        // e.stopPropagation();
        this.handleZ(key, id)
      }}>
      <span style={{color: fontStr1}}>{itemChild.title}</span>
    </li>;
  }

  /*getOffsetLeft() {
      console.log("前", this.textDiv.current && this.textDiv.current.offsetLeft);
      if (this.state.leftSing) {
        if (this.textDiv.current) {
          if (this.textDiv.current.offsetLeft > 0) {
            const left = this.textDiv.current.offsetLeft - 20;
            console.log("结果", left);
            this.setState({
              leftSing: false,
              left: left,
            });
            return left
          } else {
            return
          }
        }
      } else {
        return this.state.left
      }
      //let left = this.textDiv.current && this.textDiv.current.offsetLeft;
    }*/

//子目录的li

  handle = (key) => {
    //console.log("show key:", key);
    this.setState({
      activeKey: key
    })
  }
  handleZ = (key, id) => {
    //console.log("key,id", key, id);
    this.setState({
      activeKey: key,
      activeId: id,
    })
  }
}


export default MyMenu;
