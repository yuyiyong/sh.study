#React 高级
##深入 JSX
```javascript
React.createElement(
    'div',
    {className:'sidebar'},
    null
)
```

##指定React元素类型
JSX的签名决定了React元素的类型.

###React 必须声明
React, 组件必须先 import 声明 

###点表示法
例子:
```javascript
import React from 'react';
const MyComponents = {
    DatePicker: function DatePicker(props) {
        return <div>Imagine a {props.color} datepicker here</div>
    }
}
function BueDatePicker() {
   return<MyComponents.DatePicker color="blue" />
}
```

###首字母必须大写
基本没问题

### 在运行时选择类型
```javascript
const components = {
    phote:PhotoStory,
    video:VideoStory
};

function Story(props) {
    const SpecificSotry = components[props.storyType];
    return <SpecificSotry story={props.story}/>
}
```

##属性
JSX中有几种不同的方式来指定属性. 

###使用JavaScript表达式
可以传递{}的javaScript表达值作为一个属性值. 
```javascript
<MyComponent foo = {1+2+3+4} />
```

### 字符串常量
```javascript
<MayComponent message={'hello word'} /> 
```
###默认为True
```javascript
<MyTextBox autocomplete />
<MyTextBox autocomplete={true} />
```
因此上面两个JSX是等价的, 但容易和es6语法混淆

###扩展属性
```javascript
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}
function App2() {
  const props = {firstName: 'Ben', lastName:"Hector"};
  return <Greeting {...props} />;
}
```
以上两个组件是等效的

##子代
props.children 有几种不同的方法来传递子代:

###字符串常量
```javascript
<MyComponent>hello word</MyComponent>
```
这是有效的JSX, 像Html一样写jsx. JSX会移除空行和开始与结尾处的空格. 标签邻近的的新行会被移除, 常量内部的换行会被压缩成一个空格
```javascript
<div>Hello World</div>

<div>
  Hello World
</div>

<div>
  Hello
  World
</div>

<div>

  Hello World
</div>
```
以上等价

###JSX
你可以通过子代嵌入更多的JSX元素, 这对于嵌套显示组件非常有用:
```javascript
<MyContainer>
    <MyFirstComponent />
    <MySecondComponent />
</MyContainer>
```

React 组件也可以通过数组的形式 返回多个元素:
```javascript
render(){
    return [
        <li>1</li>,
        <li>2</li>,
        <li>3</li>
    ];
}
```

###javaScript表达式
也可以将任何{}包裹的js表达式作为子代传递, 也可以混用
```javascript
function Hello(props) {
  return <div>hello {props.address} !</div>
}
```

###函数
```javascript
// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
```
传递给自定义组件的子代可以是任何元素, 只要该组件在React渲染前解析

###布尔, Null和Undefined 被忽略
false null undefined 和 true 都是有效的子代, 
如果想让 false, true, null 或 undefined出现在输入中, 必须先转换成字符串:
```javascript
<div>
    My JavaScript variable is {String(myVariable)}
</div>  
```
