/*
import React, {useContext} from 'react';
import {ColorContext, UPDATA_COLOR, UPDATA_NAME} from './colorManege';

const Butonss = () => {
    const {dispatch, dispatch1} = useContext(ColorContext)
    console.log("dispatch");
    return (
        <div>
            <button
                onClick={() => {
                    dispatch({
                        type: UPDATA_COLOR,
                        value: {color: 'red'},
                    })
                }}
            >红色
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: UPDATA_COLOR,
                        value: {color: 'yellow'}
                    })
                }}
            >黄色
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: UPDATA_NAME,
                        value: {name: 'fjj'},
                    })
                }}
                    >
                    显示名字
                    </button>
                    </div>
                    )
                    };
                    export default Butonss;
*/
import React,{useContext} from 'react';
import {ColorContext, UPDATA_COLOR, UPDATA_NAME} from "./colorManege";

const Butonss = () => {

    const {value,dispatch} = useContext(ColorContext);
    return (
        <>
        <button onClick={()=> {
            dispatch({
                type:UPDATA_COLOR,
                value:{
                    color:'red'
                }
            })
        }}>红色</button>
        <button onClick={()=> {
            dispatch({
                type: UPDATA_COLOR,
                value:{
                    color:'yellow'
                }
            })
        }}>黄色</button>
        <button onClick={()=> {
            dispatch({
                type:UPDATA_NAME,
                value:{
                    name:'gaizi'
                }
            })
        }}>名字</button>
        </>
    )
};
export default Butonss;
