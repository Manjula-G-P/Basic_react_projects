import React,{useState}from 'react'
import "./Login.css"
import { Link } from "react-router-dom"

function Login() {
    const [useremail,setUserEmail]=useState("")
    const [userpassword,setUserPassword]=useState("")

    const loginuser=event=>{
        event.preventDefault()
        alert("succesfully signed up")
    }

    const signupuser=event=>{
        event.preventDefault()
           
        alert("succfully created")
    }
    return (
        <div className="login">
            <Link>
                <img className="login_logo"  alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h6>E-mail</h6>
                    <input type='email' value={useremail} onChange={e=>setUserEmail(e.target.value)}/>
                    <h6>Password</h6>
                    <input type="password" value={userpassword} onChange={e=>setUserPassword(e.target.value)}/>
                    <button onClick={loginuser} className="login_signInButton">SignIn</button>
                </form>
                <p>By Login, you should agree Amazon Term & Condition's</p>
                <button onClick={signupuser} className="login_registration">Create your Amazon Account</button>
            </div>
            
        </div>
    )
}

export default Login
