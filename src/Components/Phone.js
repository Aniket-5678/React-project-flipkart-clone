import React, {  useState } from 'react'
import "./Phone.css"
import data from "./Mobile.json"
const Phone = () => {
  
const phones = data.phones

const [searchTerm, setSearchTerm] = useState("")

const filterProducts = phones.filter(phone => phone.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <div className="mobile-input">
        <input type='text' name='name' id='name' placeholder='Search here for Mobile brands' className="Mobile-product"  onChange={(e)=> setSearchTerm(e.target.value)} />
        <button className='Mobile-btn'><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div className="phones-container">
        
        {filterProducts.map((phone)=>{
          return(
            <div className="phone-main" key={phone.id}> 
            <img src={phone.imageURL} className="phone-image" alt='phone' />
              <h3>{phone.name}</h3>
              <p>{phone.bestoffer}</p>
              <p>RS{phone.price}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Phone