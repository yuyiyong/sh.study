import React from 'react';
import ShowArea from "./showArea";
import Buttons from "./Buttons";
import {Colors} from "./colors";

const UseReducers = () => {
    return (
        <div>
            <Colors>
                <ShowArea/>
                <Buttons/>
            </Colors>
        </div>
    )
};
export default UseReducers;
