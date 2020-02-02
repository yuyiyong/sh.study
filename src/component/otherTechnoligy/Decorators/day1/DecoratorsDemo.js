import React, {Component} from 'react';

class Circle {
    draw() {
        console.log("换一个圆形");
        return "换一个圆形"
    }
}

class DecoratorA {
    constructor(circle) {
        this.circle = circle;
    }

    draw() {
        this.circle.draw();
        this.circle.draw();
        return this.circle.draw() + '--' + this.circle.draw();
    }

    setRedBorder() {
        console.log("设置红色边框");
        return "设置红色边框"
    }

}

class DecoratorsDemo extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let circle = new Circle();
        let dec = new DecoratorA(circle);
        return (<>
            <div>DecoratorsDemo</div>
            <p>{dec.draw()}</p>
        </>)
    }
}

export default DecoratorsDemo;
