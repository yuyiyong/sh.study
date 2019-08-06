import React, { Component } from 'react';
class ServiceItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    shouldComponentUpdate(nextProps, nextState) {
        const { data, removeItem } = this.props;
        if (
            nextProps.data !== data
            || nextProps.removeItem !== removeItem
        ) {
            return true;
        } else {

            return false;
        }
        // return true;
    }
    render() {
        const { index, item, removeItem } = this.props;
        return (<li onClick= { ()=>{removeItem(index)} } key={index+item}>
            石原里美为你服务{item}
        </li>);
    }
}

export default ServiceItem;