import React, {useEffect, useState, useCallback} from 'react';

export function useWinSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    });
    //缓冲一个方法,避免问题
    const onReset = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        })
    }, []);
    /*   const onReset = () => {
           setSize({
               width: document.documentElement.clientWidth,
               height: document.documentElement.clientHeight,
           })
       };*/

    useEffect(() => {
        window.addEventListener('resize', onReset);
        return () => {
            window.removeEventListener('resize', onReset);
        }
    }, []);
    return size;
}


