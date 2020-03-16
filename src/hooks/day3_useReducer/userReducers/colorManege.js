/*
import React, {createContext, useReducer} from 'react';

export const ColorContext = createContext({});

export const UPDATA_COLOR = "UPDATA_COLOR";
export const UPDATA_NAME = "UPDATA_NAME";
const reducer = (state, action) => {
    console.log("action", action);
    switch (action.type) {
        case UPDATA_COLOR:
            return {...state, color: action.value.color};
        case UPDATA_NAME :
            return {...state, color: action.value.name};
        default:
            return state
    }
};


/!*const ColorManege = (props) => {
    const[color,dispatch] = useReducer(reducer,'#CCC')
    const[name,dispatch1] = useReducer(reducer,'dui')
    return (
        <ColorContext.Provider value={{color,dispatch,name,dispatch1}}>
            {props.children}
        </ColorContext.Provider>
    )
};*!/
const ColorManege = (props) => {
    const [value, dispatch] = useReducer(reducer, {color: '#ccc', name: 'dui'});
    return (
        <ColorContext.Provider value={{value, dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
};
export default ColorManege;
*/

import React, {createContext, useReducer} from 'react';

export const ColorContext = createContext({});
export const UPDATA_COLOR = "UPDATA_COLOR";
export const UPDATA_NAME = "UPDATA_NAME";
const reducers = (state, action) => {
    switch (action.type) {
        case UPDATA_COLOR:
            return {
                ...state,
                color: action.value.color
            }
        case UPDATA_NAME:
            return {
                ...state,
                color: action.value.name
            }
        default:
            return state;
    }
}

const ColorManege = ({children}) => {
    const [value, dispatch] = useReducer(reducers, {color: '#ccc', name: 'dui'});
    return <ColorContext.Provider value={{value, dispatch}}>
        {children}
    </ColorContext.Provider>
};
export default ColorManege;
