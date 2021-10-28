import React, { useEffect, useState } from 'react'
import SearchIcon from "@material-ui/icons/Search"
import "./Header.css"
import { Link } from "react-router-dom"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider'
import products from "./products.json"
import Home from "./Home"

function Header() {
    const [search,setSearch]=useState("")
    const [data,setData]=useState([])
    const  [{basket}]=useStateValue()
    console.log("intial basket****",basket)
    useEffect(() => {
        const NewData = products.filter(product => (product.title.toLowerCase().includes(search.toLowerCase())))
        setData(NewData)
    }, [search])

    return (
        <div className="header">
            <img className="header_logo" src="" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            <div className="header_search">
                <input type="text" className="header_searchInput"  value={search} onChange={(e) => setSearch(e.target.value)} />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionOne">Hello,User</span>
                        <span className="header_optionTwo">Sign</span>
                    </div>
                </Link>
                <Link to="/returns" className="header_link">
                    <div className="header_option">
                        <span className="header_optionOne">Returns</span>
                        <span className="header_optionTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionOne">You</span>
                        <span className="header_optionTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header-link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
                {/* {data.map((product, index) =>
                <Product
                    title={product.title}
                    image={product.image}
                    id={product.id}
                    rating={product.rating}
                    price={product.price}
                />

                )} */}
                {/* <Home data={data}/> */}

            </div>

    
        </div>
    )
}

export default Header
