import React from 'react';
import LayoutLeft from "../layout/layoutLeft";


const OtherTechnoligyLayout = (props) => {
    return (
        <LayoutLeft
            title='其它技术'
            content={props.content}
        >
            {props.children}
        </LayoutLeft>
    );
};
export default OtherTechnoligyLayout;
