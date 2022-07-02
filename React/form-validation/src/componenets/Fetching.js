import React,{useState,useEffect} from "react";


const Fetching = () =>{
    const [data,setData] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(
            response => response.json()
            )
        .then(
            json => setData(json)
        )
    })
    return(
        <>
            <h3>Fetching API call</h3>
            {data.map(item =><p key={item.id}>{item.title}</p>)}
        </>
    )
}

export default Fetching