import React from 'react';
import LayoutLeft from "../component/layout/layoutLeft";


const HocksLayout = (props) => {
    return (
        <LayoutLeft
            title='Hooks学习..'
            content={props.content}
        >
            {props.children}
        </LayoutLeft>
    );
};
export default HocksLayout;