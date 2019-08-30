import React, {createContext, useReducer} from 'react';

export const ColorContext = createContext({});

export const UPDATA_COLOR = "UPDATA_COLOR";
export const UPDATA_NAME = "UPDATA_NAME";
const reducer = (state, action) => {
    switch (action.type) {
        case UPDATA_COLOR:
            return action.color;
        case UPDATA_NAME :
            return action.name;
        default:
            return state
    }
};


const ColorManege = (props) => {
    const[color,dispatch] = useReducer(reducer,'#CCC')
    const[name,dispatch1] = useReducer(reducer,'dui')
    return (
        <ColorContext.Provider value={{color,dispatch,name,dispatch1}}>
            {props.children}
        </ColorContext.Provider>
    )
};
export default ColorManege;
