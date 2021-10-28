import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'

function Subtotal() {
    const [{ basket }] = useStateValue()

    const getCartTotal = (basket) =>
        basket?.reduce((amount, item) => item.price + amount, 0);
    return (
        <div className="subtotal">
        <CurrencyFormat 
            renderText={(value)=>(
                    <p>Subtotal({basket.length} items):<storng>{`${value}`}</storng></p>
                )
            }
            decimalScale={2}
            value={getCartTotal(basket)}
            thousandSeparator={true}
            prefix={"Rs."}
        />
        
        <button className="checkout_button">Proceed to Checkout</button>
    </div>
    )
}

export default Subtotal
