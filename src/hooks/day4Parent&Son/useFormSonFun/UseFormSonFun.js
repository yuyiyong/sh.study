import React, {useRef}from 'react';
import {Button} from "antd";
import FormList from "./FormList";

const UseFormSonFun = (props) => {
    const submitRef = useRef();
    const handle = () => {
        console.log("dianle ",props);
        console.log("submitRef.current",submitRef.current);
        submitRef.current.submits();
    }
    return (
        <React.Fragment>
            <FormList ref={submitRef}/>
            <Button
                onClick={handle}
            >父组件提交</Button>
        </React.Fragment>
    )
};
export default UseFormSonFun;
