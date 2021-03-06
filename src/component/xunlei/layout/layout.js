import styles from '../setting/layout.less'
//通过heard 和 foot 对上下布局控制
import MyMenu from '../MyMenu';
//import curConfig from "@/curConfig";
import React, {Component} from 'react';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 'absolute',
            right: -76,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const changeY = window.scrollY;
        //console.log("changeY", changeY);
        if (changeY >= 535) {
            this.setState({
                position: 'fixed',
                right: 0,
            })
        } else {
            this.setState({
                position: 'absolute',
                right: -76
            })
        }

    };

    render() {
        // this.bindScroll();
        return (
            <div>

                <div className={[styles.header, this.props.heard].join(' ')} style={{position: this.state.position}}>
                    <div className={styles.img}>
                        {/*<img src={require('../../../../../assets/home/bolezhifu-z.png')} alt=""/>*/}
                    </div>
                    <MyMenu
                        arr={this.props.arr}
                    />
                </div>
                <div className={[styles.contenter, this.props.classname].join(' ')}>
                    <div
                        style={{right: this.state.right}}
                        className={styles.left}
                    >
                        <div className={styles.bb}><b>联系我们</b></div>
                        <div className={styles.bb}><b>关注我们</b></div>
                        <div><b>返回顶层</b></div>
                    </div>
                    {this.props.children}
                </div>
                <div className={[styles.footer, this.props.foot].join(' ')}>footer</div>

            </div>
        )
    }

    /* bindScroll(event) {
       // 滚动的高度
       const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
       console.log("scrollTop",scrollTop);
     }*/
}


export default Layout;
