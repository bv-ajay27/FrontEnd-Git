import React,{Component} from "react";

class SubChildComp1 extends Component{
    constructor(props){
        super(props)

        this.state = {
            count:0
        }
    }
    increment = () =>{
        this.setState ((prevState) =>({
            count:prevState.count + 1
        }))
    }
    decrement = () =>{
        this.setState ((prevState) =>({
            count : prevState.count - 1
        }))
    }
    incrementBy5 = () =>{
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    decrementBy9 = () =>{
        this.decrement();
        this.decrement();
        this.decrement();
        this.decrement();
        this.decrement();
        this.decrement();
        this.decrement();
        // actual the decerement is 7 because we called only for 7times
    }
    render(){
        let {count} = this.state
        return(
            <div>
                <h1>{count}</h1>
                <button onClick={this.increment}>CountIncrement</button>
                <button onClick={this.incrementBy5}>CountIncrement5</button>
                <br></br>
                <h1>{count}</h1>
                <button onClick={this.decrement}>CountDecrement</button>
                <button onClick={this.decrementBy9}>CountDecrement9</button>
            </div>
        )
    }
}

export default SubChildComp1