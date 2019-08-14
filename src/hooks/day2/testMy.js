import React, {useState} from 'react';

const TestMy = () => {
    const [count, setCount] = useState(0);
    return (
        <React.Fragment>
            <p>count:{count}</p>
            <button onClick={() => setCount(count + 1)}>++</button>
        </React.Fragment>
    )
};
export default TestMy;