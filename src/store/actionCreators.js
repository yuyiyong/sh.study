import {ADD_ITEM, CHANGE_INPUT, DEL_ITEM} from './actionType';

export const changeInputAction = (value) => {
    return {
        type: CHANGE_INPUT,
        value
    }
};
export const addItemAction = () => {
    return {
        type: ADD_ITEM,
    }
};
export const delItemAction = (index) => {
    return {
        type: DEL_ITEM,
        payload: index,
    }
};

//中间件thunk的action  返回的是一个方法
export const getTodoList = () => {
    return (dispatch) => {
       /* axios.get('..........').then(()=>{
            const data = res.data;
            console.log(data);
            const action = getListAction(data)
            dispatch(action);

        })*/
    }
};

//中间件sage\别的步骤都一样.
/*
export const getMyListAction = () => ({
    type: GET_MY_LIST,

});*/
