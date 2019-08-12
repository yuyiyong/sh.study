import React from 'react';
import ReactAdvanceLayout from "./reactAdvanceLayout";
import {Route} from 'react-router-dom'
import demo1 from "./day1/demo1";

const ReactAdvance = () => {
    return (
        <ReactAdvanceLayout
            content={content}
        >
            <Route path="/reaxtAdvance/day1" component={demo1}/>
        </ReactAdvanceLayout>
    )
};
const content = [
    {title: 'day1', path: '/reaxtAdvance/day1'},
]
export default ReactAdvance;