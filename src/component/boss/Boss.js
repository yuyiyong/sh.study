import React, { Component } from 'react';
import '../xiaojiejie/setting/xiaojiejie.css';
import { CSSTransition } from 'react-transition-group';
import "./boss.css";
//import { Icon, Menu } from 'antd';

//const { SubMenu } = Menu;

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
            handleValue: false,
        }
        this.showHandle = this.showHandle.bind(this);
    }

    showHandle() {
        this.setState({
            handleValue: this.state.handleValue ? false : true
        })
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        console.log('this.state.handleValue', this.state.handleValue);
        return (<div>
            {/* <div className="box">
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <Icon type="setting" />
                                Navigation Three - Submenu
            </span>
                        }
                    >
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>

                </Menu>
            </div> */}

            {/*  <div className={this.state.handleValue ? 'show' : 'hide'}>boss级人物 - 孙悟空</div> */}
            <CSSTransition
                in={this.state.handleValue}
                timeout={2000}
                classNames='boss-text'
                unmountOnExit
            >
                <div>boss级人物 - 孙悟空</div>
            </CSSTransition>
            <div>
                <button onClick={this.showHandle}>召唤boss</button>
            </div>
        </div>);
    }
}

export default Boss;