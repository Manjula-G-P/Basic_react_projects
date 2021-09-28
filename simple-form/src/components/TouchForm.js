import React, { useState } from "react"
import "./TouchForm.css"

function TouchForm() {
    const [email, setEmail]=useState("")
    const [business,setBusiness]=useState("")
    const [contact, setContact]=useState("")
    const [desg, setDesg]=useState("")
    const [msg, setMsg]=useState("")
    return (
        <div className="container">
            <form action="">
                <div className="info">
                    <label className="Email">Email</label>
                    <br></br>
                    <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className="info">
                    <label className="Business">Buiness Email</label>
                    <br></br>
                    <input type="text" className="email" id="email" value={business} onChange={(e)=>setBusiness(e.target.avlue)}/>
                </div>

                <div className="info">
                    <label className="contact">Contact No.</label>
                    <br></br>
                    <select className="country">
                        <option>+91</option>
                        <option>+23</option>
                    </select>
                    <input type="text" className="number" id="email" value={contact} onChane={(e)=>setContact(e.target.value)}/>
                </div>

                <div className="info">
                    <label className="desg">Designation</label>
                    <br></br>
                    <input type="Designation" name="email" id="email" value={desg} onChange={(e)=>setDesg(e.target.value)}/>
                </div>

                <div className="info">
                    <label className="msg">Message</label>
                    <br></br>
                    <textarea type="text" className="message" id="email" value={msg} onChange={(e)=>setMsg(e.target.value)}/>
                </div>

                <button className="button">Submit</button>
            </form>
        </div>
    )
}
export default TouchForm









{/* <form>
                    <div class="form-g">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form> */}