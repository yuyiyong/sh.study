/*
DOM元素的获取(控制,属性的赋值, 一般用状态)
保存变量

* */
import React, {useRef, useState, useEffect} from 'react';

const UseRefs = () => {
    const [s_input, setS_input] = useState('state')
    const inputEl = useRef(null);

    const onButtonClick = () => {
        inputEl.current.value = "hello, dui";
        console.log(inputEl);
    };

    const textRef = useRef();
    useEffect(() => {
        //保存变量
        textRef.current = s_input;
        console.log("textRef.current:",textRef.current);
    });

    return (
        <React.Fragment>
            <h3>UseRefs</h3>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>
                在input上展示文字
            </button>
            <h3>useState</h3>
            <input value={s_input} onChange={(e) => {
                setS_input(e.target.value)
            }}/>
            <h4>{s_input}</h4>
        </React.Fragment>
    )
};
export default UseRefs;
