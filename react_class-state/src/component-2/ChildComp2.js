import React,{Component} from "react";

class ChildComp2 extends Component{

    constructor(props){
        super(props)

        this.state = {
            name : "Ram",
            color : "red"
        }
    }
    changename = () =>{
        this.setState({
            name:"Ram Kumar"
        })
    }
    backToPrev=()=>{
        this.setState({
            name:"Ram"
        })
    }

    render(){
        let {name,color} = this.state
        // let{color} = this.state
        return(
            <>
                <h1>Hello this is class based component {name}</h1>
                <p style={{color}}>React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach.</p>
                <button onClick={this.changename}>ChangeName</button>
                <button onClick={this.backToPrev}>PrevName</button>
            </>
        )
    }

}
// const ChildComp2 = (props) =>{
//     return(
//         <div className="ChildComp2">
//             <h2>This is ChildComp2</h2>
//         </div>
//     )
// }

export default ChildComp2