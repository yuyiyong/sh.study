/*import React, {useContext} from 'react';
import {ColorContext} from "./colorManege";

const Area = () => {
    const {value} = useContext(ColorContext);
    console.log("value", value);
    return (
        <div style={{color: value.color}}>
            hello useReducer
            <h2>{value.name}</h2>
            <h2>{value.color}</h2>
        </div>
    )
};
export default Area;*/
import React, {useContext} from 'react';
import {ColorContext} from "./colorManege";

const Area = () => {
    const {value} = useContext(ColorContext)
    return (
        <div style={{color: value.color}}>
            hello useReducer
            <h2>{value.name}</h2>
            <h2>{value.color}</h2>
        </div>
    )
};
export default Area;
