import React from 'react'
import ReactDOM from 'react-dom'


function Hello(props){
    return <h2>Hello:{props.name}</h2>
}
class App extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>成员数量:{this.props.count}</p>
                    <p>成立时间:{this.props.date.toLocaleString()}</p>
                </div>
                <Hello name='haha'></Hello>
                <Hello name='xixi'></Hello>
                <Hello name='heihei'></Hello>
                <Hello name='ee'></Hello>
                <Hello name='enen'></Hello>
            </div>
        )
    }
}
ReactDOM.render(
    <App name='搞笑呢' count={5} date={new Date()}></App>,
    document.getElementById('root')
);

