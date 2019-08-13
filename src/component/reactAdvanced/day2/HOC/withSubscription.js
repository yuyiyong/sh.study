/*
import React from 'react';

// 函数接受一个组件参数……
function withSubscription(WrappedComponent, selectData) {
    // ……返回另一个新组件……
    return class extends React.Component{
        constructor(props) {
            super(props);
            this.state={
                data: selectData(DataSource,props)
            };
        }
        componentDidMount() {
            DataSource.addChangeListenner(this.handleChange)
        }
        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange = () => {
            this.setState({
                data:selectData(DataSource, this.props)
            });
        }

        render() {
            // ……使用最新的数据渲染组件
            // 注意此处将已有的props属性传递给原组件
            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    };
}*/
