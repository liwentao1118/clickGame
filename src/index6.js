import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component{
    constructor(){
        super()
        this.state=({
            date:new Date()
        })
    }

    componentDidMount(){
        setInterval(()=>{
            this.tick()
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
                <h1>{this.props.title}</h1>
                <h3>{this.state.date.toLocaleString()}</h3>
            </div>
        )
    }

}

class App  extends React.Component{
    render(){
       return (
           <div>
               <Clock title='时钟1'></Clock>
               <Clock title='时钟2'></Clock>
               <Clock title='时钟3'></Clock>

           </div>
       )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

