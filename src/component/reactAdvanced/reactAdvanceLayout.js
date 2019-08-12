import React from 'react';
import LayoutLeft from "../layout/layoutLeft";



const ReactAdvanceLayout = (props) => {
    return (
        <LayoutLeft
            title='react高级学习..'
            content={props.content}
        >
            {props.children}
        </LayoutLeft>
    );
};
export default ReactAdvanceLayout;