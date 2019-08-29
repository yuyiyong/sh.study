import React, {useContext} from 'react';
import {ColorContext} from "./colorManege";
const Area = () => {
    const {color,name} = useContext(ColorContext)
    return (
        <div style={{color:color}}>
            hello useReducer
            <h2>{name}</h2>
            <h2>{color}</h2>
        </div>
    )
};
export default Area;
