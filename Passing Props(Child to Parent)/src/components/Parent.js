import React,{useState} from 'react'
import Child from "./Child"


function Parent() {
    const [data,setData]=useState("");

    const FromChild=(childdata)=>{
        setData(childdata)
    }
    return (
        <>
            <h3>Email:{data.email}</h3>
            <h3>Password:{data.pass}</h3>
            <Child valueFromChild={FromChild}/>
    
            
        </>
    )
}

export default Parent
