import { Link, useNavigate } from "react-router-dom"


export default function Navbar(){
const navigate=useNavigate()

    return (
        <nav>
            <h1 onClick={()=>navigate("/")}>Calorie Tracker</h1>

            <div className="nav-div">

            <div className="nav-div2">
            <Link to="/logs" className="nav-link column-2">Tracker</Link>
            <button  onClick={()=>navigate("/new-log")} className="nav-btn def-btn">New Log</button>
            </div>

            </div>
            
            
        </nav>
    )
}