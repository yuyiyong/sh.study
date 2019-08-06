import React, { Component } from 'react';
import ServiceItem from '../ServiceItem.js';
import './setting/xiaojiejie.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
class Xiaojiejie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['推背', '足浴'],
            item: ``,
        }
    }
    addItem = () => {
        const { item, data } = this.state;
        this.setState({
            data: [...data, item]
        })
    }
    onchangeHandle = (e) => {
        //console.log('res', e.target.value);
        this.setState({
            item: e.target.value
        });
    }
    removeItem = (key) => {
        console.log('key', key);
        const { data } = this.state;
        data.splice(key, 1);
        this.setState({
            data,
        });
    }
    render() {
        console.log('xdata', this.state.data);
        return (<div>
            <label htmlFor='xInp'>小姐姐服务项目: </label>
            <input className='xInp' id='xInp' value={this.state.item} onChange={this.onchangeHandle} />
            <button onClick={this.addItem}>提交</button>
            <ul>
                <TransitionGroup>
                    {
                        this.state.data.map((item, index) => {
                            return (
                                <CSSTransition
                                    timeout={1000}
                                    classNames='test-box'
                                    unmountOnExit
                                    appear={true}
                                    key={item + index}
                                >
                                    <ServiceItem item={item} index={index} removeItem={this.removeItem} />
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
            </ul>
        </div>);
    }
}

export default Xiaojiejie;