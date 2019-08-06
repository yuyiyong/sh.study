import {takeEvery} from 'redux-saga/effects';//监听

//generator函数
function* mySaga() {
    //业务逻辑可以写这边
    //yield takeEvery(GET_MY_LIST,getList)
}
function* getList() {
    console.log("jspang");//测试上面的是否能执行
    //axios.get('.........').then((res)=>{
    //      const data = res.data;
    //       const action = getListAction(data)
    //      put (action)//不用dispatch了.
    // })

    //////////////////////
    //和上面一样的效果
    // const res = yield axios.get().then();
    // const action = getListAcion(res.data)
    // yield  put(action)
}
export default mySaga;