import React, {useState, useEffect} from 'react';
import ReactAdvanceLayout from "../reactAdvanced/reactAdvanceLayout";
import {Route} from 'react-router-dom'
import WebSockets from "./webSocket/WebSockets";
import OtherTechnoligyLayout from "./OtherTechnoligyLayout";
import Decorators from "./Decorators/Decorators";
import EventBus from "./eventBus/EventBus";

const OtherTechnoligy = () => {
    return (
        <OtherTechnoligyLayout
            content={content}
        >
            <Route path="/otherTechnology/websocket" component={WebSockets}/>
            <Route path={content[1].path} component={Decorators}/>
            <Route path={content[2].path} component={EventBus}/>
        </OtherTechnoligyLayout>
    )
};

const content = [
    {title: 'websocket', path: '/otherTechnology/websocket'},
    {title: 'Decorators', path: '/otherTechnology/Decorators'},
    {title: 'EventBus', path: '/otherTechnology/EventBus'},
];

export default OtherTechnoligy;
