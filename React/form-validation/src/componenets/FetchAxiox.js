import React,{useState,useEffect} from "react";
import axios from "axios";

const FetchAxiox = () =>{
    const [input,setInput] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            response => setInput(response.data)
        )
    },[])
    return(
        <>
            <h2>Fetching API through AXIOS</h2>
            {input.map(item => <p key={item.id}>{item.name}</p>)}
        </>
    )
}

export default FetchAxiox