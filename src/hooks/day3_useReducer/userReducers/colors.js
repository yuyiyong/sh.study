import React ,{createContext} from 'react';

export const ColorContext = createContext({

});



export const Colors = (props) => {
    return (
       <ColorContext.Provider value={{color:"red"}} >
           {props.children}
       </ColorContext.Provider>
    )
};

