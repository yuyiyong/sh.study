import React, {Component} from 'react';
import store from "../../store";
import {addItemAction, changeInputAction, delItemAction} from "../../store/actionCreators";
import TodoListUI from './TodoListUI';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.storeChange = this.storeChange.bind(this);//转变this指向
        store.subscribe(this.storeChange);//订阅Redux的状态
    }


    render() {
        console.log(store.getState());
        return (
            <div>
                <div>
                    <TodoListUI
                        value={this.state.inputValue}
                        changeInputValue={this.changeInputValue}
                        inputValue={this.state.inputValue}
                        btnAdd={this.btnAdd}
                        list={this.state.list}
                        delItem={this.delItem}
                    />
                </div>
            </div>
        );
    }

    changeInputValue = (e) => {
        const action = changeInputAction(e.target.value);
        store.dispatch(action)
    };

    storeChange() {
        console.log('store changed');
        this.setState(store.getState())
    }

    btnAdd = () => {
        console.log("add");
        const action = addItemAction();
        store.dispatch(action)
    };
    delItem = (index) => {
        console.log("index", index);
        const action = delItemAction(index);
        store.dispatch(action)
    }

}


export default TodoList;