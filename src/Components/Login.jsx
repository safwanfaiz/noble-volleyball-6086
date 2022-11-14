import { useState } from "react"


export const Login=()=>{

    const [mob,setMob]=useState("")
return(
    <div>
        <input type="text" value={mob}
         placeholder="Enter Mobile Number"   
         onChange={(e)=>setMob(e.target.value)}/>
       
        <button onClick={hanleSubmit}></button> 
        </div>
)
}