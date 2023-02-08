import { Link, useNavigate } from "react-router-dom"


export default function Navbar(){
const navigate=useNavigate()

    return (
        <nav>
            <h1 onClick={()=>navigate("/")}>Zay's Calorie Tracker</h1>

            <div className="nav-div">
            <Link to="/logs">Tracker</Link>
            <button onClick={()=>navigate("/new-log")}>New Log</button>
            </div>
            
            
        </nav>
    )
}