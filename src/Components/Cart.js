import React from 'react'
import "./Cart.css"

const Cart = ({ cartitems, cartshow}) => {


  return (
    <div>
        <div className='cart-container'>
          {cartitems.map((item)=>{
            return(
              <div className='cart-main' key={item.id}> 
                <img src={item.imageURL} className='cart-image' />
                <h3>{item.name}</h3>
                <button className='car-btn'>Buy now</button>
              </div>
            )
          })}

          <div className='products2cart-container'>
               {cartshow.map((data) =>{
                return(
                  <div className='products2cart-main'> 
                    <img src={data.imageURL} className='products2cart-image'/>
                    <h3>{data.name}</h3>
                    <button className='products2car-btn'>Buy now</button>
                     </div>
                )
               })}
          </div>
        </div>
    </div>
  )
}

export default Cart