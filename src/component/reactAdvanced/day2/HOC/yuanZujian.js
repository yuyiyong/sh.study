import React, {Component} from 'react';

/*import {connect} from 'dva';
@connect(({})=>({
loading:loading.effects[''],
}))*/
class YuanZujian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 0,
        }
    }

    render() {
        return (
            <div>
                <h2>this.state.data:{this.state.data}</h2>
                <h2>this.props.data:{this.props.data}</h2>
            </div>
        )
    }
}

export default YuanZujian;