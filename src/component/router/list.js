import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/*import {connect} from 'dva';
@connect(({})=>({
loading:loading.effects[''],
}))*/
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            params:'',
            list: [
                {title: '博客1', uid: 11},
                {title: '博客3', uid: 13},
                {title: '博客4', uid: 14},
                {title: '博客2', uid: 12},
            ]
        }
    }
    componentDidMount() {
        console.log("________",this.props.match.params.id);
        this.setState({
            params:this.props.match.params.id,
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>传入的值为:{this.state.params}</h1>
                </div>
                <ul>
                    {this.state.list.map((item, key) => {
                        return (
                            <li key={'a' + key}><Link to={'/router/' + item.uid+'/list'}>{item.title}</Link></li>
                        )
                    })}
                </ul>
                <a onClick={this.handleA}>返回首页</a>
            </div>
        )
    }
    handleA = () => {
        this.props.history.push('/')
    }
}

export default List;