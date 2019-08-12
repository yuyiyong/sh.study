import React, {Component} from 'react';
function CustomTextInput(props) {
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    );
}

class Ref extends Component {
    constructor(props) {
        super(props);
        // 创建 ref 存储 textInput DOM 元素
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }



    focusTextInput() {
        // 直接使用原生 API 使 text 输入框获得焦点
        // 注意：通过 "current" 取得 DOM 节点
        this.textInput.current.focus();
        console.log(this.textInput);
    }

    render() {
        // 告诉 React 我们想把 <input> ref 关联到构造器里创建的 `textInput` 上
        return (
            <div>
                <CustomTextInput
                    inputRef={el => this.inputElement = el}
                />

                <input
                    type="text"
                    ref={this.textInput} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

export default Ref;