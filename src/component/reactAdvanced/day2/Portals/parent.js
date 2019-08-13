import React, {Component} from 'react';
import ReactDOM from 'react-dom'

const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root')

class Modal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        )
    }
}

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            clicks: prevState.clicks + 1
        }));
    }
    render() {
        return(
            <div onClick={this.handleClick}>
                <h2>Portals 冒泡</h2>
                <p>Number of clicks: {this.state.clicks}</p>
                <p>
                    Open up the browser DevTools
                    to observe that the button
                    is not a child of the div
                    with the onClick handler.
                </p>
                <Modal>
                    <Child />
                </Modal>
            </div>
        )
    }
}

function Child() {
    return(
        <div className="modal">
            <button>Click</button>
        </div>
    )
}


export default Parent;