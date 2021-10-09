import React from 'react'
import "./MyProfile.css"

function MyProfile(props) {
    return (
        <div className="profile">
            <h1>Profile</h1>
            <img src={props.Data.avatar_url} className="rounded-circle" alt="Cinque Terre" width="300" height="300" />
            <div className="info">
                <h1>{props.Data.login}</h1>
                <button type="button" className="btn btn-primary btn-lg">Follow button</button>
                <p>Full stack web developer and online instructor, specializiing in mostly JS, but also write Python, PHP and some other stuff.</p>
            </div>
        </div>
    )
}

export default MyProfile
