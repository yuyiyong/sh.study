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
                        color: 'red',
                    })
                }}
            >红色
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: UPDATA_COLOR,
                        color: 'yellow'
                    })
                }}
            >黄色
            </button>
            <button
                onClick={() => {
                    dispatch1({
                        type: UPDATA_NAME,
                        name: 'fjj',
                    })
                }}
            >
                显示名字
            </button>
        </div>
    )
};
export default Butonss;
