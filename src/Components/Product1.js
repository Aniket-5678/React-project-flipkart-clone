import React, { useState } from 'react'
import "./Product1.css"
import { useParams } from 'react-router-dom'
 
const Product1 = ({products, Addtocart}) => {

  const HandlecaddToCart = () =>{
    Addtocart(product);
    console.log(HandlecaddToCart);
  }

  const {productID} = useParams()
  const product = products.find(item => item.id === parseInt(productID,10))

  return (
    <div className='details-container'>
    <div className='details-main'>
    
    <img src={product.imageURL} className='details' />
    <h3>{product.name}</h3>
    <p>{product.price}</p>
    <p>{product.bestoffer}</p>
    <button className='details-btn' onClick={ HandlecaddToCart} > ADD to cart</button>
    <button className='details-btn1'>Buy now</button>
    </div>

    <div className='description'>
    <h4 className='descprition-details'>{product.description}</h4>
    <h3 className='wrranty'>{product.warranty}</h3>
    <p className='content'>Highlights</p>
     <p className='highlights'>{product.highligts}</p>
     <p></p>
    </div>

    </div>
  )
}

export default Product1