import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(){
        super()
        this.state=({
            count:0
        })
    }
    handleClick=()=>{
            this.setState({
                count:this.state.count+1
            })
    }
    render(){
        return (
            <div>

            <button onClick={this.handleClick}>点击</button>
                <h2>{this.state.count}</h2>

            </div>
    )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
