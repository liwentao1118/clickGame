import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    handleClick=(e)=>{
        console.log(e.toLocaleString())

    }
    render(){
        return (
            <div>
           <button onClick={()=>this.handleClick(new Date())}>按钮</button>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
