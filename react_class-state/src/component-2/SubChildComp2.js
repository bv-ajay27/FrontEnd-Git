import React,{Component} from "react";

class SubChildComp2 extends Component{
    constructor(props){
        super(props)

        this.state = {
            Bikes : [
                {
                    name : "Pulsar-150",
                    cc : 150,
                    make : "Bajaj",
                },
                {
                    name : "SZX",
                    cc : 150,
                    make : "Yamaha",
                },
                {
                    name : "GT-650",
                    cc : 650,
                    make : "RE",
                },
                {
                    name : "Apache",
                    cc : 160,
                    make : "TVS",
                },
                {
                    name : "Apache",
                    cc : 160,
                    make : "TVS",
                }
            ],
        };
    }
    render(){
        let{ Bikes } = this.state
        return(
            // <> this is one way to print array of objects
            //     <div style={{display: "flex",justifyContent:"space-around",color:"orange",border:"2px solid black",padding:"8px"}}>
            //         <h2>{Bikes[0].name}</h2>
            //         <h2>{Bikes[0].cc}</h2>
            //         <h2>{Bikes[0].make}</h2>
            //     </div>
            // </>
            <>
            {Bikes.map((Bike,index) =>(
                <div 
                style={{display: "flex",justifyContent:"space-around",color:"orange",border:"2px solid black",padding:"8px"}} key={index}>
                    <h2>{Bike.name}</h2>
                    <h2>{Bike.cc}</h2>
                    <h2>{Bike.make}</h2>
                </div>
            ))}
            <h1>Here the key is to make unique entries in map if key is not given all the entries must be unique if not keep key in DIV/H1/P.... any tag as INDEX</h1>
            </>
        );
    }
}

export default SubChildComp2