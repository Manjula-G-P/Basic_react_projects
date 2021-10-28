import React from 'react'
import "./ProductCart.css"
import { useStateValue } from './StateProvider'

function ProductCart({id,title,Price,Rating,image}) {

    const[{basket},clicks]=useStateValue();
    console.log("clicks-------",clicks)

    const removeItem=()=>{
        clicks({
            type:"REMOVE_FROM_CART",
            id:id
        })
    }
    return (
        <div className="productcart">
            <img className="productcart_image" src={image} alt=""/>
            <div className="productcart_info">
                <p calssName="productcart_title">{title}</p>
                <p className="productcart_price">Rs.{Price}</p>
                <div className="Product_rating">
                    <strong>{Rating}</strong>
                </div>
            
            <button onClick={removeItem}>Remove from the cart</button>
            </div>
            
            
        </div>
    )
}

export default ProductCart
