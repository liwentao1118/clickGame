import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(){
        super()
        this.state=({
            date:new Date()
        })
    }

    tick(){
        this.setState({
            date:new Date()
        })
    }
    componentDidMount(){
        console.log('组件已经被挂载')
        setInterval(()=>{
            this.tick()
        },1000)
    }
    componentWillMount(){
        console.log('组件将要被挂载')
    }
    componentWillUnmount(){
        console.log('组件将要被卸载')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('组件是否需要被更新')
        return true;
    }
    componentWillUpdate(){
        console.log('组件将要被更新')
    }
    componentDidUpdate(){

        console.log('组件已经被更新')
    }

    render(){
        console.log('rander')
        return(
            <div>
                <h2>{this.state.date.toLocaleString()}</h2>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
