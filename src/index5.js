import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(){
        super();
        this.state={
            title:'时钟应用',
            date:new Date()
        }
        setInterval(()=>{
            this.tick();
        },1000)
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }
    render(){
        return (
            <div>
                <div>{this.state.title}</div>
            <div>{this.state.date.toLocaleString()}</div>
            </div>
        )
    }

}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

