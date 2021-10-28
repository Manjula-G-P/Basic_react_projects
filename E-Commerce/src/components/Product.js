import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({id,title,Price,Rating,image}) {
    const [{basket},clicks]=useStateValue();
    const addToBasket=()=>{
        clicks({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                Price:Price,
                Rating:Rating

            }
        })
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <small>Rs.</small>
                <strong>{Price}</strong>
                <div className="Product_rating">
                    <strong>{Rating}</strong>
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
