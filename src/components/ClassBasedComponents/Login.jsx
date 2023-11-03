import React, { Component } from "react";

class Login extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
       
    }
    handleIncChange=()=>{
        return this.setState({
            count:this.state.count+1
        } )
    }
    handleDecChange=()=>{
        return this.setState({
            count: this.state.count-1
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleIncChange}>inc</button>
                <button onClick={this.handleDecChange}>dec</button>
            </div>
        )
    }
}
export default Login;