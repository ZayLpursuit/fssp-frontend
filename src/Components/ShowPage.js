import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';





  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


const API=process.env.REACT_APP_API_URL


export default function ShowPage(){
    const [item,setItem]=useState([])
    const navigate=useNavigate()
    const {id}=useParams()


    let fiberCal=item.fiber*2
    let proteinCal=item.protein*4
    let sugarCal=item.sugar*4
    let carbsCal=item.carbs*23
    let fatCal=item.fat*9
    
  const options = {
        responsive: true,
        plugins: {
          legend: {
            // position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Calories by Unit',
          },
        },
      };
      
      const labels = ['Fiber', 'Protein', 'Sugar', 'Carbs', 'Fat'];
      
     const data = {
        labels,
        datasets: [
          {
            
            data: [fiberCal,proteinCal,sugarCal,carbsCal,fatCal] ,
            backgroundColor:  ["aqua","green","yellow","orange","red"],
          }
          
        ],
      };
      
function handleDelete(){
    axios.delete(`${API}/logs/${id}`).then(()=>navigate("/logs"))
}



useEffect(()=>{

    try {
        axios.get(`${API}/logs/${id}`).catch((res)=>console.log(res)).then((res)=>setItem(res.data))
        
    } catch (error) {
        console.log(error)
    }
},[id])


return (

  
    <div className="show-page show-grid">
  {item.name?  (
        <div className="column-2">

        <h1>{item.name}</h1>
       
        <div className="bar-chart" ><Bar options={options} data={data}/></div>
        <div className="contents">
            <h4>Contents</h4>
         <div className="show-table">
        <p>Fiber: <span className="black"><strong>{item.fiber}g</strong></span></p>
        <p>Protein: <span className="black"><strong>{item.protein}g</strong></span></p>
        <p>Sugar: <span className="black"><strong>{item.sugar}g</strong></span></p>
        <p>Carbs: <span className="black"><strong>{item.carbs}g</strong></span></p>
        <p>Fat: <span className="black"><strong>{item.fat}g</strong></span></p>
        </div>
        </div>
        <div className="show-btns">
        <button className="def-btn" onClick={()=>navigate(`/logs/${id}/edit`)}>Edit</button>
        <button  className="mr def-btn" onClick={()=>handleDelete()}>Delete</button>
        </div>
        </div>):(
            <div className="column-2">
                <h2 className="center m-top grey"> Bad Request: Log not found</h2>
                <img src="data:image/png;base64,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" alt="" className="" />

               <div> <button className="def-btn m-top" onClick={()=>navigate("/logs")}>Return to Logs</button></div>
            </div>
        )}
        
    </div>
)

}