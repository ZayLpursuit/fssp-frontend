import { useState } from "react"

export default function Aside(){
const [moreLess,setMoreLess]=useState("Show More")
const [moreLess1,setMoreLess1]=useState("Show More")
const [moreLess2,setMoreLess2]=useState("Show More")



    return( 
    <div className="m-top">
       <div className="flex"> <p>Daily Average:</p> <div> <button onClick={()=>{if(moreLess==="Show More"){setMoreLess("Show Less")}else{setMoreLess("Show More")}}}>{moreLess}</button></div></div>
        {moreLess==="Show Less"? (
        <div>
            <p>Carbs:</p>
            <p>Fiber:</p>
            <p>Protein:</p>
            <p>Sugar:</p>
        </div>
        ): null}

        <div className="flex"><p>Weekly Average:</p> <div> <button>{moreLess1}</button></div></div>
        <div className="flex"><p>One Month Average:</p> <div> <button>{moreLess2}</button></div></div>


    </div>)
}