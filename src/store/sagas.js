import {takeEvery,put} from 'redux-saga/effects';//takeEvery监听
import {LOGIN_SAGA} from "./actionType";
import {require} from "../utils/commentUtils";
import {loginAcion} from './actionCreators'
//generator函数
function* mySaga() {        //入口函数
    //业务逻辑可以写这边
    yield takeEvery(LOGIN_SAGA,getLogin);
}
function *getLogin(action1) {
    //console.log("values",values);
    const res = yield require("/thirdpay/customeradmin/login",{
        method:"POST",
        body:action1.payload
    });
    const action =loginAcion(res);
    yield put(action)
}

export default mySaga;