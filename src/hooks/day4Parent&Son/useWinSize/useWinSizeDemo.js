import React from 'react';
import {useWinSize} from "./useWinSize";

const WinSizeDemo = () => {
    const size = useWinSize();

    return (
        <div>页面大小:{size.width} X {size.height}</div>
    )
};
export default WinSizeDemo;
