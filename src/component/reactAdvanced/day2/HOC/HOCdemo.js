import React, {Component} from 'react';
import YuanZujian from "./yuanZujian";
import withHocWarapped from "./withHocWarapped";

class HOCdemo extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h2>原组件</h2>
                <YuanZujian/> <br/>
                <h2>高阶组件的结果</h2>
                <Result/>
            </div>
        )
    }
}

const Result = withHocWarapped(YuanZujian);

export default HOCdemo;