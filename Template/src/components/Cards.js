import React from 'react'
import "./Card.css"

function Cards({ pics,title }) {
    return (
            <div className="card-group">
                <div className="card">
                    {pics.map((pic,index) =>
                        <div>
                            {index==2?<img src={pic} className="card-img-top" alt="..." style={{"height":"295px","width":"315px"}} />:<img src={pic} className="card-img-top" alt="..." style={{"padding-right":"20px"}} />}
                            <div className="card-body">
                                <h4 className="card-title">{title[index]}</h4>
                            </div>
                        </div>)}
                </div>
            </div>
        )
}
export default Cards
