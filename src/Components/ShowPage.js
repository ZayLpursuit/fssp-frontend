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
    axios.get(`${API}/logs/${id}`).then((res)=>setItem(res.data)).then((res)=>console.log(res))
},[id])

return (
    <div className="show-page show-grid">

        <div className="column-2">

        <h1>{item.name}</h1>
        {/* <p>Name:{item.name}</p> */}
        <div className="bar-chart" ><Bar options={options} data={data}/></div>
        <div className="contents">
            <h4>Contents</h4>
         <div className="show-table">
        <p>Fiber: <span className="black"><bold>{item.fiber}g</bold></span></p>
        <p>Protein: <span className="black"><bold>{item.protein}g</bold></span></p>
        <p>Sugar: <span className="black"><bold>{item.sugar}g</bold></span></p>
        <p>Carbs: <span className="black"><bold>{item.carbs}g</bold></span></p>
        <p>Fat: <span className="black"><bold>{item.fat}g</bold></span></p>
        </div>
        </div>
        <div className="show-btns">
        <button className="def-btn" onClick={()=>navigate(`/logs/${id}/edit`)}>Edit</button>
        <button  className="mr def-btn" onClick={()=>handleDelete()}>Delete</button>
        </div>
        </div>
        
    </div>
)

}