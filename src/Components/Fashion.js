import React from 'react'
import data from "./Fashion.json"
import "./Fashion.css"
const Fashion = () => {

    const Fashions = data.Fashions;
  return (
    <div>
       <div className="Fashion-input">
        <input type='text' name='name' id='name' placeholder='Search here for Fashion brands' className="Mobile-product"  />
        <button className='Fashion-btn'><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div className="Fashion-container">
        {Fashions.map((fashion)=>{
          return(
            <div className="Fashion-main"> 
              <img src={fashion.imageURL}  className="Fashion-images"/>
              <h3>{fashion.name}</h3>
              <p>{fashion.bestoffer}</p>
              <p>{fashion.price}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Fashion