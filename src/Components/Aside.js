import axios from "axios"
import { useEffect, useState } from "react"

const API=process.env.REACT_APP_API_URL

export default function Aside(){
    const[logs,setLogs]=useState([])
    const [weeklyData,setWeeklyData]=useState([])
    const[monthlyData,setMonthlyData]=useState([])

    
    useEffect(()=>{
        axios.get(`${API}/logs`).then((res)=>setLogs(res.data))
    },[])

    useEffect(()=>{
        axios.get(`${API}/logs/weekly-log`).then((res)=>setWeeklyData(res.data))
    },[])

    useEffect(()=>{
        axios.get(`${API}/logs/monthly-log`).then((res)=>setMonthlyData(res.data))
    },[])



const [moreLess,setMoreLess]=useState("Show More")
const [moreLess1,setMoreLess1]=useState("Show More")
const [moreLess2,setMoreLess2]=useState("Show More")

useEffect(()=>{
    
},[])
console.log(logs)

let carbsTotal=logs.reduce((acc,el)=>acc+=el.carbs,0)
let fatTotal=logs.reduce((acc,el)=>acc+=el.fat,0)
let proteinTotal=logs.reduce((acc,el)=>acc+=el.protein,0)
let fiberTotal=logs.reduce((acc,el)=>acc+=el.fiber,0)
let sugarTotal=logs.reduce((acc,el)=>acc+=el.sugar,0)



 let carbsWeeklyTotal=weeklyData.reduce((acc,el)=>acc+=el.carbs,0)
 let fatWeeklyTotal=weeklyData.reduce((acc,el)=>acc+=el.fat,0)
 let proteinWeeklyTotal=weeklyData.reduce((acc,el)=>acc+=el.protein,0)
 let fiberWeeklyTotal=weeklyData.reduce((acc,el)=>acc+=el.fiber,0)
 let sugarWeeklyTotal=weeklyData.reduce((acc,el)=>acc+=el.sugar,0)



 let carbsMonthlyTotal=monthlyData.reduce((acc,el)=>acc+=el.carbs,0)||0
 let fatMonthlyTotal=monthlyData.reduce((acc,el)=>acc+=el.fat,0)||0
 let proteinMonthlyTotal=monthlyData.reduce((acc,el)=>acc+=el.protein,0)||0
 let fiberMonthlyTotal=monthlyData.reduce((acc,el)=>acc+=el.fiber,0)||0
 let sugarMonthlyTotal=monthlyData.reduce((acc,el)=>acc+=el.sugar,0)||0





    return( 
    <div className="m-top aside">
        <div className="center-2">
            
            <h3 className="grey ten-px">Averages by Unit</h3>
       <div className="flex"> <p><strong>Daily Average:</strong></p> <div> <button onClick={()=>{if(moreLess==="Show More"){setMoreLess("Show Less")}else{setMoreLess("Show More")}}}>{moreLess}</button></div></div>
        {moreLess==="Show Less"? (
        <div className="aside-style">
            <p>Carbs:{Math.floor(carbsTotal/logs.length)||0}g</p>
            <p>Fiber:{Math.floor(fiberTotal/logs.length)||0}g</p>
            <p>Protein:{Math.floor(proteinTotal/logs.length)||0}g</p>
            <p>Sugar:{Math.floor(sugarTotal/logs.length)||0}g</p>
            <p>Fat:{Math.floor(fatTotal/logs.length)||0}g</p>
        </div>
        ): null}

        <div className="flex"><p><strong>Weekly Average:</strong></p> <div> <button onClick={()=>{if(moreLess1==="Show More"){setMoreLess1("Show Less")}else{setMoreLess1("Show More")}}}>{moreLess1}</button></div></div>
        {moreLess1==="Show Less"? (
        <div>
            <p>Carbs:{Math.floor(carbsWeeklyTotal/weeklyData.length)||0}g</p>
            <p>Fiber:{Math.floor(fiberWeeklyTotal/weeklyData.length)||0}g</p>
            <p>Protein:{Math.floor(proteinWeeklyTotal/weeklyData.length)||0}g</p>
            <p>Sugar:{Math.floor(sugarWeeklyTotal/weeklyData.length)||0}g</p>
            <p>Fat:{Math.floor(fatWeeklyTotal/weeklyData.length)||0}g</p>
        </div>
        ): null}


        <div className="flex"><p><strong>One Month Average:</strong></p> <div> <button onClick={()=>{if(moreLess2==="Show More"){setMoreLess2("Show Less")}else{setMoreLess2("Show More")}}}>{moreLess2}</button></div></div>

        {moreLess2==="Show Less"? (
        <div>
            <p>Carbs:{Math.floor(carbsMonthlyTotal/monthlyData.length)||0}g</p>
            <p>Fiber:{Math.floor(fiberMonthlyTotal/monthlyData.length)||0}g</p>
            <p>Protein:{Math.floor(proteinMonthlyTotal/monthlyData.length)||0}g</p>
            <p>Sugar:{Math.floor(sugarMonthlyTotal/monthlyData.length)||0}g</p>
            <p>Fat:{Math.floor(fatMonthlyTotal/monthlyData.length)||0}g</p>
        </div>
        ): null}

        


    </div>
    
    </div>
    )
}