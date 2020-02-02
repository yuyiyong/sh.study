import React, {useState, useEffect} from 'react';
import Page1 from "./subPage/Page1";
import Page2 from "./subPage/Page2";
import Publisher from "./subPage/Publisher";

const EventBus = () => {
    return (
        <>
            <div>EventBus</div>
            <Publisher/>
            <Page1/>
            <Page2/>
        </>
    )
};
export default EventBus;
