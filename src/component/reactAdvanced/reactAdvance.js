import React from 'react';
import ReactAdvanceLayout from "./reactAdvanceLayout";
import {Route} from 'react-router-dom'
import demo1 from "./day1/demo1";
import Day2 from "./day2/day2";

const ReactAdvance = () => {
    return (
        <ReactAdvanceLayout
            content={content}
        >
            <Route path="/reaxtAdvance/day1" component={demo1}/>
            <Route path="/reaxtAdvance/day2" component={Day2}/>
        </ReactAdvanceLayout>
    )
};
const content = [
    {title: 'day1', path: '/reaxtAdvance/day1'},
    {title: 'day2', path: '/reaxtAdvance/day2'},
]
export default ReactAdvance;