import React from 'react';
import HocksLayout from "./hocksLayout";
import {Route} from 'react-router-dom'
import Day1 from "../component/css3/day1/day1";
import Demo1 from "./day1/demo1";
import Day2 from "./day2/day2";
import Day3 from "./day3_useReducer/day3";

const Hooks = () => {
    return (
        <HocksLayout
            content={content}
        >
            <Route path="/hooks/day1" component={Demo1}/>
            <Route path="/hooks/day2" component={Day2}/>
            <Route path="/hooks/day3" component={Day3}/>
        </HocksLayout>
    )
};
const content = [
    {title:'day1',path:'/hooks/day1'},
    {title:'day2',path:'/hooks/day2'},
    {title:'day3',path:'/hooks/day3'},
]
export default Hooks;
