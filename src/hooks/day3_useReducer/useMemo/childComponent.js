import React, {useMemo} from 'react';

const ChildComponent = ({name, children}) => {
    const changeXiaohong = (name) => {
        console.log("小红的函数");
        return name + "小红改变了"
    };
    const xhString = useMemo(() => changeXiaohong(name), [name]);
    return (
        <React.Fragment>
            <div>{xhString}</div>
            <div>{children}</div>
        </React.Fragment>
    )
};
export default ChildComponent;
