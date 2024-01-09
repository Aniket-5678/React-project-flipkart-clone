import React from 'react'
import { useParams } from 'react-router-dom'
import "./Mobiledetails.css"

const Mobilesdetails = ({products2, ADDcart}) => {

    const {mobileID} = useParams(); 

   const product = products2.find(  data => data.id === parseInt(mobileID, 10))


   const handlecart = () =>{
    ADDcart(product);
   }
    
  return (
    <div className='Mobiledetails-container'>
<div  className='Mobiledetails-main'>
        <img src={product.imageURL} className='Mobiledetails-image' />
       <h3>{product.name}</h3>
       <button className='Mobiledetails-btn ' onClick={handlecart}>ADD to cart</button>
       <button className='Mobiledetails-btn1'>Buy now</button>
       
</div>
        
    
    </div>
  )
}

export default Mobilesdetails