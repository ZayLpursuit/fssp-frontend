import axios from "axios"
import { Chart as ChartJS,ArcElement,Tooltip,Legend } from "chart.js"
import { useEffect, useState } from "react"
import {Pie} from 'react-chartjs-2'
import { useNavigate } from "react-router-dom"
import Aside from "./Aside"


ChartJS.register(ArcElement,Tooltip,Legend)
const API=process.env.REACT_APP_API_URL

export default function IndexPage(){
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`${API}/logs`).then((res)=>setLogs(res.data))
    },[])

    const[logs,setLogs]=useState()
    const data={
        labels:['Fiber','Protein','Sugar','Carbs','Fat'],
        datasets:[{data:[5,5,5,5,5],
       backgroundColor:["aqua","green","yellow","orange","red"],}]
       
    }
    const options={colors:{
        forceOverride:true
    }}

   
    return (<div className="index-page default-grid">

        <div className="column-2 center">

                <h1 className="center">Your Daily Average</h1>

                <div className="chart-data " style={{padding:'20px', width:'100%',}}>
                   

                <Pie data={data} options={options}></Pie>
                    

                </div>

                <div className="tbl-sect">
                <table className="table">
                <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
                <th scope="col">Calories</th>
                
                </tr>
            </thead>
            <tbody>
                {logs?
                    

                logs.map((dat,idx)=>{
                
                    return(
                <tr onClick={()=>navigate(`/logs/${dat.id}`)}>
                    <th scope="row">{dat.id}</th>
                    <td>{dat.name} </td>
                    <td>{dat.name}</td> 
                    <td>{dat.name} </td>
                    
                    </tr>
    
                )}):"No transactions Yet"
                }

              </tbody> 

                </table>
                </div>
        </div>
        <div><Aside/></div>
    </div>)
}