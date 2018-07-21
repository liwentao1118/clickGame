import React from 'react'
import ReactDOM from 'react-dom'


class HelloClass extends React.Component{
    render(){
        return <h2>我是类声明的组件{this.props.name}</h2>
    }
}
ReactDOM.render(
    <HelloClass name='hadskjfh'/>,
    document.getElementById('root')
);

