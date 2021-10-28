import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider'
import ProdutCart from "./ProductCart"

function Checkout() {
    const [{ basket }] = useStateValue();
    console.log("our basket", basket)
    return (
        <div className="checkout">
            <div className="checkout_left">
                {basket.length === 0 ?
                    <div>
                        <h2 className="checkout_title">Your shopping Cart is Empty</h2>
                        <p>You have no products in your Cart</p>
                    </div> :
                    <div>
                        <h2 className="shoppingbaskettitle">Items in the shopping Cart</h2>
                        {
                            basket.map(item => (<div key={item.id}>
                                < ProdutCart
                                    id={item.id}
                                    title={item.title}
                                    Price={item.price}
                                    Rating={item.rating}
                                    image={item.image}
                                />
                            </div>

                            ))
                        }
                    </div>

                }
            </div>
            

        </div>
    )
}

export default Checkout
