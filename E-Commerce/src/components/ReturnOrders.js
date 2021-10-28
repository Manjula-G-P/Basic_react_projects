import React from 'react'
import "./ReturnOrders.css"
import { Link } from "react-router-dom"

function ReturnOrders() {
    return (
        <div className="signIn">
            <Link>
                <img className="login_logo"  alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
            </Link>
            <div className="signIn_container">
                <h1>Sign In</h1>
                <form>
                    <h6>E-mail</h6>
                    <input type='email'  />
                    
                    <button  className="signIn_continue">continue</button>
                </form>
                <p>By continuing, you should agree Amazon Term & Condition's</p>
                {/* <button  className="login_registration">Create your Amazon Account</button> */}
                <button  className="signIn_registration">Create your Amazon Account</button>
            </div>
            {/* <button  className="signIn_registration">Create your Amazon Account</button> */}
            
        </div>
    )
}

export default ReturnOrders
