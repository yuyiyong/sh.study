/* //最早一版
import reducer from './reducer'
import {createStore} from 'redux';
const store = createStore(reducer);
export default store;*/
/*//添加了redux dev tool的版本
import {createStore} from 'redux';
import reducer from "./reducer"
const store =createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default store;*/
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from "./reducer";
//使用saga时, 不用thunk
// import thunk from 'redux-thunk';
import  creatSagaMiddleware from 'redux-saga';
import mySages from './sagas'
const sageMiddleware = creatSagaMiddleware();

//增强函数, 链式函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk))
//sage的增强函数
const enhancer = composeEnhancers(applyMiddleware(sageMiddleware))
const store = createStore(
    reducer,
    enhancer
);
sageMiddleware.run(mySages);
export default store;