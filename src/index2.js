import React from 'react'
import ReactDOM from 'react-dom'


function Hello(props){
     return <h2>我是函数声明的组件:{props.name}</h2>
}
ReactDOM.render(
    <Hello name='itheima'></Hello>,
    document.getElementById('root')
);

