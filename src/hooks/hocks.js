import React from 'react';
import HocksLayout from "./hocksLayout";
import {Route} from 'react-router-dom'
import Day1 from "../component/css3/day1/day1";
import Demo1 from "./day1/demo1";

const Hooks = () => {
    return (
        <HocksLayout
            content={content}
        >
            <Route path="/hooks/day1" component={Demo1}/>
        </HocksLayout>
    )
};
const content = [
    {title:'day1',path:'/hooks/day1'},
]
export default Hooks;