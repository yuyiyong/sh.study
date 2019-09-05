import React,{useRef,forwardRef,useImperativeHandle} from 'react';
import {Button} from "antd";


const SonCom =forwardRef((props,ref) => {
    console.log(props,"ref",ref);
    const son = () => {
        alert("son fun");
    };

    useImperativeHandle(ref,()=>({son}))
    return (
        <div>son</div>
    )
}) ;

const Parent = () => {
    const ParentRef = useRef();

    const handle = () => {
       ParentRef.current.son()
    }
    return (
        <React.Fragment>
            <div>Parent</div>
            <Button
                onClick={()=>handle()}
            >click me</Button>
            <SonCom ref={ParentRef}/>
        </React.Fragment>

    )
};


const UseSon = () => {
    return (
        <div>
            <Parent/>
        </div>
    )
};
export default UseSon;
