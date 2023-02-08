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
    e.peventDefault()
    axios.post(`${API}/logs`,log).then(()=>navigate("/logs"))
    navigate("/logs")
}

return (
    <div className="default-grid">

            <form className="column-2 new-form" onSubmit={(e)=>handleSubmit(e)}>
                <label htmlFor="name">Name</label>
                <input type='text' id="name" className="" value={log.name} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="fiber">Fiber</label>
                <input type='number' id="fiber" className="" value={log.fiber} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="protein">Protein</label>
                <input type='number' id="protein" className="" value={log.protein} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="sugar">Sugar</label>
                <input type='number' id="sugar" className="" value={log.sugar} onChange={(e)=>handleChange(e)}/>


                <label htmlFor="carbs">Carbs</label>
                <input type='number' id="carbs" className="" value={log.carbs} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="fat">Fat</label>
                <input type='number' id="fat" className="" value={log.fat} onChange={(e)=>handleChange(e)}/>

                <button type="submit">Submit</button>

            </form>
    </div>

)



}