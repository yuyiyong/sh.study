import React from 'react';
import {require} from "../../../../utils/commentUtils";
import styles from "./setting/renderProps.less";
export class Cat extends React.Component {
    render() {
        //const mouse = {x:0,y:0};
         const mouse = this.props.mouse;

        return (
            <div className={styles.img} style={{ left: mouse.x, top: mouse.y }}>
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        console.log(this.state.x);
        return (
            <div className={styles.gloDiv} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}
export default MouseTracker;