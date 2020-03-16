/*
import React from 'react';
import Area from "./area";
import ColorManege from "./colorManege";
import Butonss from "./buttons";

const UseReducerss = () => {
    return (
        <div>
            <ColorManege>
                <Area/>
                <Butonss/>
            </ColorManege>
        </div>
    )
};
export default UseReducerss;
*/
import React from 'react';
import ColorManege from "./colorManege";
import Area from "./area";
import Butonss from "./buttons";

const UseReducerss = () => {
    return (
        <ColorManege>
            <Area/>
            <Butonss/>
        </ColorManege>
    )
}
export default UseReducerss;
