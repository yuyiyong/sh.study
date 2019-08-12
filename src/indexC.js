/*
import React, { Component } from 'react';
import Xunlei from "./component/xunlei/xunlei";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (  <div>
        {/!*<Xunlei/>*!/}12131231
        </div> );
    }
}

export default Index;*/
import React from 'react';
import Banner from "./component/xunlei/banner";
import QuicklyConnect from "./component/xunlei/quicklyConnect";
import Advantage from "./component/xunlei/advantage";
import AppSeciona from "./component/xunlei/appSeciona";
import ServerLian from "./component/xunlei/serverLian";
import AboutUs from "./component/xunlei/aboutUs";
import News from "./component/xunlei/news";

const Index = () => {
    return (
        <div>
            <Banner key="aa1"/>
            <QuicklyConnect key="aa2"/>
            <Advantage key="aa3"/>
            <AppSeciona key="aa4"/>
            <ServerLian key="aa5"/>
            <AboutUs key="aa6"/>
            <News key="aa7"/>
        </div>
    )
};
export default Index;