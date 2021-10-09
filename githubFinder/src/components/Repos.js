import React from 'react'
import { VscRepoForked } from "react-icons/vsc"
import { ImStarEmpty } from "react-icons/im"
import { GiPlainCircle } from "react-icons/gi"
import "./Repos.css"

function Repos(props) {

    return (
        <div>


            <div className="card " style={{ "width": "700px" }}>
                <div className="card-body">
                    <h5 className="card-title"><a href={props.url}>{props.name}</a></h5>
                    <p className="card-text">{props.description}</p>
                    <div className="bottom">
                        
                        <small className="text-muted"><VscRepoForked />{props.forks_count}&emsp;</small>
                        <small className="text-muted"><ImStarEmpty />{props.forks_count}&emsp;</small>
                        <p className="text-muted">{props.language}&emsp;  </p>
                    </div>




                </div>
            </div>


        </div>

    )
}

export default Repos
