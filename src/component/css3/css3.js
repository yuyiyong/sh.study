import React from 'react';
import Css3Layout from "./css3Layout";
import {Route} from 'react-router-dom'
import Day1 from "./day1/day1";

const Css3 = () => {
    return (
        <div>
            <Css3Layout>
                <Route path="/css3/day1" component={Day1}/>
            </Css3Layout>
        </div>
    )
};
export default Css3;