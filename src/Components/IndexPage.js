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
    const[logs,setLogs]=useState([])

    useEffect(()=>{
        axios.get(`${API}/logs`).then((res)=>setLogs(res.data))
    },[])
    
    
    let carbsAvg=(logs.reduce((acc,el)=>acc+=el.carbs,0)*23)/logs.length
    let fatAvg=(logs.reduce((acc,el)=>acc+=el.fat,0)*9)/logs.length
    let proteinAvg=(logs.reduce((acc,el)=>acc+=el.protein,0)*4)/logs.length
    let fiberAvg=(logs.reduce((acc,el)=>acc+=el.fiber,0)*2)/logs.length
    let sugarAvg=(logs.reduce((acc,el)=>acc+=el.sugar,0)*4)/logs.length
    
    let calTot=carbsAvg+fatAvg+proteinAvg+fiberAvg+sugarAvg
    let total

    if(calTot<1700||calTot>3100){
       total= <span className="red">{calTot.toFixed(0)} calories</span>
    }
    else if(calTot>=2700){
        total= <span className="green">{calTot.toFixed(0)} calories</span>
    }
    else{
        total= <span className="yellow">{calTot.toFixed(0)} calories</span>
    }


    const data={
        
        
        datasets:[{data:[fiberAvg,proteinAvg,sugarAvg,carbsAvg,fatAvg],
            backgroundColor:["aqua","green","yellow","orange","red"], labels:['Fiber','Protein','Sugar','Carbs','Fat']}]
            
        }
        const options={colors:{
            forceOverride:true
        }, 
            legend: {
                display: false
            },
     
 
    }
   
    return (<div className="index-page default-grid2">

        <div className="column-2 center bot">

                <h1 className="center grey top">Your Daily Average</h1>
                <h3>{total}</h3>

                <div className="chart-data " style={{padding:'20px', width:'80%',}}>
                   

                <Pie data={data} options={options}></Pie>
                    

                </div>

        </div>
        <div>
            <Aside logs={logs}/>
            <div className="tbl-sect">
                <h3 className="grey">Logs</h3>
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
                <tr  className="tab-row" onClick={()=>navigate(`/logs/${dat.id}`)}>
                    <th scope="row">{idx+1}</th>
                    <td>{dat.dte.slice(0,10)} </td>
                    <td>{dat.name}</td> 
                    <td>{dat.calories} </td>
                    
                    </tr>
    
                )}):"No transactions Yet"
                }

              </tbody> 

                </table>
                </div>
        </div>
    </div>)
}