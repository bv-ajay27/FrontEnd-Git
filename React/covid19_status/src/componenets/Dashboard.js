import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './dashboard.css'

const Dashboard = () => {
    const[data,setData] = useState([]);
    useEffect(() =>{
        axios.get('https://api.covid19india.org/data.json')
        .then(response => response.json())
        .then(jsonData => setData((jsonData.statewise)))
    },[])
  return (
    <>
        <h1>India Covid-19 Status</h1>
        <table className='dashboard'>
            <tr className='dashboard_col'>
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