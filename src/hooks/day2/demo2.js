import React, {useEffect, useState} from 'react';

function Demo2() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(35);
    const [fruit, setFruit] = useState('apple');
    const [todos2, setTodos] = useState([{text: 'Learn Hoocks'}]);

    useEffect(() => {
        //此组件在React更新DOM后设置文档标题
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}> Click me</button>
            <p><b>js age:{age}</b></p>
            <p><b>fruit:{fruit}</b></p>
            <p><b>todos:{todos2[0].text}</b></p>
        </div>
    )
}

export default Demo2;