import React, { useState } from 'react'

function Child(props) {
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")

    const handlechange=(e)=>{
        let {value,name}=e.target;
        if (name==="name"){
            setEmail(value)
        }
        else{
            setPass(value)
        }

    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        props.valueFromChild({
            email:email,
            pass:pass
        })
    }
    return (
        <form onSubmit={handlesubmit}>
            <label>Email:</label>
            <input type="text" placeholder='enter a name' name="name" onChange={handlechange}/>
            <br></br>
            <br></br>
            <label>Password:</label>
            <input type="text" placeholder="enter a password" name="pass" onChange={handlechange}/>
            <br></br>
            <button type="submit">submit</button>
        </form>
    )
}

export default Child
