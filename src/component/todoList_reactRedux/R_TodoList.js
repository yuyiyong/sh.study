import React from 'react';
import store from "../../store";
import {
    addItemAction,
    changeInputDispatchAcion,
    delItemAction,
    textInputChangeAction
} from "../../store/actionCreators";
import R_TodoListUI from './R_TodoListUI';
import {connect} from 'react-redux';


const R_TodoList = (props) => {
    const {inputValue, changeInputValue1, btnAdd, list, delItem, textInputChange, textValue} = props;
    return (
        <div>
            <div>
                <R_TodoListUI
                    value={inputValue}
                    // changeInputValue={this.changeInputValue}
                    changeInputValue={changeInputValue1}
                    inputValue={inputValue}
                    btnAdd={btnAdd}
                    list={list}
                    delItem={delItem}
                />
                <input
                    onChange={textInputChange}
                />
                <h2>{textValue}</h2>
            </div>
        </div>
    );
};


const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list,
        textValue: state.textValue,
    }
};

const dispatchToProps = (dispatch) => {
    return {
        changeInputValue1(e) {
            let action = changeInputDispatchAcion(e.target.value);
            store.dispatch(action);
        },
        textInputChange(e) {
            let action = textInputChangeAction(e.target.value);
            store.dispatch(action);
        },
        btnAdd() {
            const action = addItemAction();
            store.dispatch(action)
        },
        delItem(index) {
            console.log("index", index);
            const action = delItemAction(index);
            store.dispatch(action)
        }
    }
};

export default connect(stateToProps, dispatchToProps)(R_TodoList);