import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const API=process.env.REACT_APP_API_URL
export default function EditPage(){

    const {id}=useParams()

    const [log,setLog]=useState([])
    const navigate=useNavigate()

useEffect(()=>{
    axios.get(`${API}/logs/${id}`).then((res)=>setLog(res.data))

},[id])


function handleChange(e){
    setLog({...log,[e.target.id]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        axios.put(`${API}/logs/${id}`,log).then(()=>navigate("/logs"))
        
    }

    return (
        <div className="default-grid">

            <h1 className="new-header column-2 grey">Edit your log entry <span className="lblue">#{id}</span></h1>
    
                <form className="column-2 new-form styled"  onSubmit={(e)=>handleSubmit(e)}>
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
    
                    <button type="submit" className="sub def-btn">Submit</button>
    
                </form>
        </div>
    
    )
    
}