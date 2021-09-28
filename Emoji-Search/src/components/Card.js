import React from 'react'

function Card(props) {
    const { title, symbol } = props
    return (
        <div className="p-2">
            <h6 className="title-text" style={{"font-weight":"bold","fontSize":"20px","alignItems":"center"}}>{title}</h6>
            <div className="image" style={{"fontSize":"50px","alignItems":"center"}}>{symbol}</div>
        </div>
    )
}

export default Card
