/*
useMemo 缓存状态,属性
useCallback 缓存方法
*/
import React, {useState, useEffect, useCallback} from 'react';


const useWinSize = () => {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    });
    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        })
    }, []);
    useEffect(() => {
        window.addEventListener('resize', onResize); //三个值, 类型resize, 函数, fa.. 默认可以不写
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);
    return size;
};
const CustomHockes = () => {
    const size = useWinSize();
    return (

        <React.Fragment>
            <h3>CustomHockes</h3>
            <div>页面Size : {size.width} X {size.height}</div>
        </React.Fragment>

    )
};
export default CustomHockes;
