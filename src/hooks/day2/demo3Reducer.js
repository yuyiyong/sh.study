import React, {useReducer, useEffect} from 'react';

const initialState = {count: 0};
const reducer = (state, action) => {
    switch (action.type) {
        case 'reset':
            return {count: action.payload};
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
    }
};

const Counter = (initialCount) => {
    console.log(initialCount, initialCount);
    const [state, dispatch] = useReducer(
        reducer,
        initialState,
        //{type: 'reset',payload: initialCount}
    );
    useEffect(() => {
        console.log(`useEffect you clicked ${state.count} times`);
    });

    return (
        <div>
            Count:{state.count}<br/>
            <button
                onClick={() => dispatch({type: 'reset', payload: initialCount})}
            >Reset
            </button>
            <br/>
            <button onClick={() => dispatch({type: 'increment'})}> +</button>
            <br/>
            <button onClick={() => dispatch({type: 'decrement'})}> -</button>
        </div>
    )
};
export default Counter;