import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API=process.env.REACT_APP_API_URL
export default function NewPage(){

const [log,setLog]=useState({name:"", fiber:"",protein:"", sugar:"",carbs:"",fat:""})
const navigate=useNavigate()


function handleChange(e){
setLog({...log,[e.target.id]:e.target.value})
}

function handleSubmit(e){
    e.preventDefault()
    axios.post(`${API}/logs`,log).then(()=>navigate("/logs"))
    
}

return (
    <div className="default-grid">

        <h1 className="column-2 new-header grey ">New Log Entry</h1>

            <form className="column-2 new-form" onSubmit={(e)=>handleSubmit(e)}>

                <div className="styled new-form">
                <label htmlFor="name">Name</label>
                <input type='text' id="name" className="" value={log.name}  required  onChange={(e)=>handleChange(e)}/>

                <label htmlFor="fiber">Fiber</label>
                <input type='number' id="fiber" className="" value={log.fiber}  required onChange={(e)=>handleChange(e)}/>

                <label htmlFor="protein">Protein</label>
                <input type='number' id="protein" className="" value={log.protein} required  onChange={(e)=>handleChange(e)}/>

                <label htmlFor="sugar">Sugar</label>
                <input type='number' id="sugar" className="" value={log.sugar} required  onChange={(e)=>handleChange(e)}/>


                <label htmlFor="carbs">Carbs</label>
                <input type='number' id="carbs" className="" value={log.carbs} required  onChange={(e)=>handleChange(e)}/>

                <label htmlFor="fat">Fat</label>
                <input type='number' id="fat" className="" value={log.fat} required  onChange={(e)=>handleChange(e)}/>

                <button type="submit" className="sub def-btn">Submit</button>
                </div>

            </form>
    </div>

)



}