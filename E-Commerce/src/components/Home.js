import React from 'react'
import "./Home.css"
import Product from "./Product"
import Footer from "./Footer"
import products from "./products.json"


function Home(props) {
    // console.log("dataaaaa",data)
    // const listItems=props.data.map((product, index) =>
    //     <Product
    //         title={product.title}
    //         image={product.image}
    //         id={product.id}
    //         rating={product.rating}
    //         price={product.price}
    //     />

    //     );
    const data=props.data
    console.log("DATA*****",data)
    return (
        <div>
            <div className="home">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/revisedT2/Header_PC_Teaser-2_English.jpg" alt="Image" />
                  <div className="home_row">
                    <Product
                        id=" 0"
                        title="Women Paisley Rayon Gown Kurta (Pink)"
                        Price={700}
                        Rating="*****"
                        image="https://rukminim1.flixcart.com/image/800/960/kc9eufk0/kurta/8/d/k/xxl-m381-myaza-original-imaftf8ggewzz4bj.jpeg?q=50"
                    />
                    <Product
                        id="1"
                        title="Women Embellished Rayon Flared Kurta  (Yellow)"
                        Price={7000}
                        Rating="*****"
                        image="https://rukminim1.flixcart.com/image/800/960/jx502vk0/kurti/q/r/s/m-yellowminner-buy24r-original-imafhg84bjzcxksd.jpeg?q=50"
                    />
                    <Product
                        id="2"
                        title="A-line Gown  (Dark Blue)"
                        Price={7000}
                        Rating="*****"
                        image="https://rukminim1.flixcart.com/image/800/960/k6xxua80/dress/w/z/r/free-gota-blue-lexma-fashion-original-imafp9zzzv9ptafh.jpeg?q=50"
                    />
                </div>  
                <div className="home_row">
                    <Product
                        id="3"
                        title="Women Paisley Rayon Gown Kurta (Pink)"
                        Price={8000}
                        Rating="*****"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZxjGZZT-kQyTzeq5tw8s-KzQlaCPPGIuHxA&usqp=CAU"
                    />
                    <Product
                        id="4"
                        title="Women Embellished Rayon Flared Kurta  (Yellow)"
                        Price={7000}
                        Rating="*****"
                        image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1595870666-16693373_fpx.jpg"
                    />
                    <Product
                        id="5"
                        title="A-line Gown  (Dark Blue)"
                        Price={10000}
                        Rating="*****"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtNstBhUrxuWEw21psbwxdZst5vZ30PrRw-Q&usqp=CAU"
                    />
                </div> 
                 {/* {data.map((item)=>{
                     <Product
                        title={item.title}
                        Price={item.price}
                        Rating={item.rating}
                        image={item.image}
                     />
                 })} */}
            </div>
            <Footer />
        </div>
    )
}

export default Home
// https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/revisedT2/Header_PC_Teaser-2_English.jpg
// https://images-eu.ssl-images-amazon.com/images/G/31/prime/Jupiter21/Teaser3/Eng/joinnow_pc_2709_24hours.jpg