import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(){
        super()
        this.state=({
            count:0,
            lastTime:10
        })
    }
    timeOut(){
        this.setState({
            lastTime:this.state.lastTime-1
        })
    }
    componentDidMount(){

    }
    handleClick=()=>{
        this.timerId=setInterval(()=>{
            if (this.isTimeUp()) {
                clearInterval(this.timerId)
                return
            }
            this.timeOut()
        },1000)
        if (this.isTimeUp()) {
            return
        }
        this.setState({
            count:this.state.count+1
        })
    }
    isTimeUp(){
        return this.state.lastTime <=0
    }
    render(){
        let tip = null

        if (this.isTimeUp()){
            tip = <h2> 总共按了{this.state.count}</h2>
        }else{
            tip=<h2>剩余时间:{this.state.lastTime}</h2>
        }
        const style={
            width:300,
            height:200,
            backgroundColor:(this.state.lastTime%2===0)? "red":"green",
            fontSize:50
        }
        return (
            <div>
                <h2>试试自己的手速吧</h2>
                {tip}
                <button style={style} onClick={this.handleClick}>{this.state.count}</button>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
