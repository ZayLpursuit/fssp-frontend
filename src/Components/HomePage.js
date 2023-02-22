import { useNavigate } from "react-router-dom"


export default function HomePage(){

    const navigate=useNavigate()

    return (
        <div className="homepage">
            <h1 className="mt">Welcome to Zay's Calorie Tracker App!</h1>
            <button className="show-btns def-btn" onClick={()=>navigate("/logs")}>Continue</button>
        </div>
    )
}