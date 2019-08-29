import React,{useState,useMemo} from 'react';
import ChildComponent from "./childComponent";
const UseMemos = () => {
    const[xiaohong, setXiaohong] = useState('小红在待客状态');
    const[zhiling, setZhiling] = useState('志玲在待客状态');
    return (
        <React.Fragment>
            <h2>useMomo</h2>
            <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
            <button onClick={() => {setZhiling(new Date().getTime()+"志玲向我们走来")}}>志玲</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </React.Fragment>
    )
};
export default UseMemos;
