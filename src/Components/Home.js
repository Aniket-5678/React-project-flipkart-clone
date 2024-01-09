import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
import Hometemplete from "./Hometemplete.json"

const Home = () => {
    
   
  return (
    <div className="Home-container">
        <div className="banner-container">
            <img src="https://www.dealsshutter.com/blog/wp-content/uploads/2017/09/flipkart-big-billion-days-sale-1.jpg" alt='Banner' className="banner-image" />
        </div>

        <div className="product-container">
          {Hometemplete.products.map((item)=>{
            return(
                
                <div className="product-main" key={item.id}> 
            <Link to={`product/${item.id}`} className='text' ><img src= {item.imageURL}  className="product-image" alt='product' /> 
                    <h3>{item.name}</h3>
                    <p>{item.bestoffer}</p>
                    <p>{item.price}</p>
                     </Link>
                     </div> 
            )
          })}
        </div>
        <div className="prdouct2-container">
            {Hometemplete.products2.map((data)=>{
                return(
                    <div className="products2">
              <Link to={`mobiledetails/${data.id}`} className='text2' >   <img src={data.imageURL} alt='product' className="product2-images"/>
                        <h3>{data.name}</h3>
                        <p>{data.bestoffer}</p>   </Link>
                         </div>
                )
            })}
        </div>
        <div className="product3-container">
            {Hometemplete.Products3.map((product)=>{
                return(
                    <div className="product3-main" key={product.id}> 
                         <img src={product.imageURL} alt='product' className="product3-images"/>
                        <h3>{product.name}</h3>
                        <p>{product.bestoffer}</p> 
                    </div>
                )
            })}
        </div>
        <div className='Footer-container'>
            <footer className='Footer-main' >
                <p>About</p>
                <Link className='Foot'>About us</Link>
                <Link className='Foot'>contact us</Link>
                <Link className='Foot'>carrers</Link>
                <Link className='Foot'>Flipcart stories</Link>
            </footer>
            <footer className='Footer2-main'>
                <p>Help</p>
            <Link className='Foot1'>payments</Link>
                <Link className='Foot1'>contact us</Link>
                <Link className='Foot1'>carrers</Link>
                <Link className='Foot1'>Flipcart stories</Link>
            </footer>
        </div>
    </div>
  )
}

export default Home