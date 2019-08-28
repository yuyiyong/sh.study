import React,{useContext} from 'react';
import {ColorContext} from "./colors";

const ShowArea = () => {
    const {color} = useContext(ColorContext)
    return (
        <div style={{color:color}}>
            字体颜色
        </div>
    )
};
export default ShowArea;
