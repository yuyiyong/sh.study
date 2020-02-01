import React from 'react';
import Css3Layout from "./css3Layout";
import {Route} from 'react-router-dom'
import Day1 from "./day1/day1";
import Day2 from "./day2/Day2";
import ArrOpreate from "./arrOpreate/ArrOpreate";

const Css3 = () => {
    return (
        <div>
            <Css3Layout
                content={arr}
            >
                <Route path="/css3/day1" component={Day1}/>
                <Route path="/css3/day2" component={Day2}/>
                <Route path="/css3/arr" component={ArrOpreate}/>
            </Css3Layout>
        </div>
    )
};
const arr = [
    {title: 'day1', path: '/css3/day1'},
    {title: 'day2', path: '/css3/day2'},
    {title: 'arr', path: '/css3/arr'},
];
export default Css3;
