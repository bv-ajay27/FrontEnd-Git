import React, {Component} from "react";

class SubChildComp2 extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: "ram"
        }
        this.state ={
            count :0
        }
    }
    changeName = () =>{
        this.setState({
            name:"Ram Kumar"
        })
    }
    increnment = ()=>{
        this.setState({
            count : this.state.count + 1
        })
    }
    decrement = () =>{
        this.setState({
            count:this.state.count - 1
        })
    }
    render(){
        // console.log(this.name)
        let {title} = this.state
        let {count} = this.state
        return(
            <>
                <h1>This is SubChild of Comp-2</h1>
                <h2>It using class base componenets</h2>
                <p>{title} -- This is the title from the SubChildComp2 using props</p>
                <button onClick={this.changeName}>Change Name</button>
                <p style={{fontSize :"5em"}} onClick={this.increnment}>{count}</p>
                <button style={{fontSize:"20px"}} onClick={this.decrement}>Decreament</button>
                <button style={{fontSize:"20px"}} onClick={this.increnment}>increnment</button>
            </>
        )
    }
}

export default SubChildComp2