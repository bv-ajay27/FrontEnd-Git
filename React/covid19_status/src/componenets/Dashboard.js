import React,{useState,useEffect} from 'react'
// import axios from 'axios'

const Dashboard = () => {
    const[data,setData] = useState([]);
    useEffect(() =>{
        fetch('https://api.covid19india.org/data.json')
        .then(response => response.json())
        .then(jsonData => setData((jsonData.statewise)))
    },[])
  return (
    <>
        <h1>India Covid-19 Status</h1>
        <table>
            <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recoverd</th>
                <th>Active</th>
                <th>Deaths</th>
                <th>LastUpdate</th>
            </tr>
        </table>
    </>
  )
}

export default Dashboard