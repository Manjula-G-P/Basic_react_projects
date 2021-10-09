import React, { useState } from "react";
import history from "./history";
import { BsGithub } from "react-icons/bs"
import { SiGithub } from "react-icons/si"
import axios from "axios"
import "./SearchBar.css"
import "./MyApp.css"

function SearchBar() {

    const [username, setUsername] = useState("")
    const [data, setData] = useState()
    const [error, setError] = useState("")
    const [dispaly, setDisplay] = useState(true)

    const handleChange = (e) => {
        setUsername(e.target.value)
        { e.target.value ? setDisplay(false) : setDisplay(true) }

    }


    const clickHandler = () => {
        axios.get(`https://api.github.com/users/${username}`)
            .then(res => {
                setData(res.data)
                console.log("data----", res.data)
                history.push({ pathname: "/your", userData: res.data })
            })
            .catch(err => {
                console.log('err', err)
            })


    };

    return (
        <>
            <div className="header">

                <h1><SiGithub />GitHub Finder</h1>
                {/* <div className="search_bar"> */}
                    <div className="input-group">
                        <div className="form-outline">
                            <input type="search" id="form1" className="form-control" placeholder="search user name here..." onChange={handleChange} />
                        </div>
                        <button type="button" className="btn btn-primary" disabled={dispaly} onClick={clickHandler} ><BsGithub />search</button>
                    </div>
                {/* </div> */}
            </div>
        </>

    );
}

export default SearchBar;