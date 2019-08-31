import React from 'react';
import UseReducerss from "./userReducers/useReducers";
import UseMemos from "./useMemo/useMemos";
import {Row, Col} from "antd"
import UseRefs from "./useRef/useRefs";
import CustomHockes from "./customHokes/customHokes";


const Day3 = () => {
    return (
        <div>
            <Row>
                <Col span={8}> <UseReducerss/></Col>
                <Col span={8}> <UseMemos/></Col>
                <Col span={8}> <UseRefs/></Col>
            </Row>
            <Row>
                <Col span={8}><CustomHockes/></Col>
                <Col span={8}></Col>
                <Col span={8}></Col>
            </Row>

        </div>
    )
};
export default Day3;
