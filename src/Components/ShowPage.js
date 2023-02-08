import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API=process.env.REACT_APP_API_URL
export default function ShowPage(){
const [item,setItem]=useState()

const {id}=useParams()

useEffect(()=>{
    axios.get(`${API}/logs/${id}`).then((res)=>setItem(res.data))
},[])

return (
    <div>
        <p>Name:{item.name}</p>
        <p>Fiber:{item.fiber}</p>
        <p>Protein:{item.protein}</p>
        <p>Sugar:{item.sugar}</p>
        <p>Carbs:{item.carbs}</p>
        <p>Fat:{item.fat}</p>

    </div>
)

}