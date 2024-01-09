import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import Phone from './Components/Phone';
import Fashion from './Components/Fashion';
import Product1 from './Components/Product1';
import Cart from './Components/Cart';
import { useState } from 'react';
import Mobilesdetails from './Components/Mobilesdetails';



function App() {

const [cartitems, setCartitems] = useState([]);

const Addtocart = (products) => {
   setCartitems([...cartitems, products])

}

const [cartshow, setCartshow] = useState([]);

const ADDcart = (products2) =>{
setCartshow([...cartshow , products2]);
} 

  const products = [
    {
        id: 1,
        imageURL: "https://cdn.cs.1worldsync.com/43/c9/43c94caf-7279-49cc-bbaa-75153531114b.jpg",
        name: "iphone 14pro",
        bestoffer: "80% off",
        description: "APPLE iPhone 14 Pro (Space Black, 256 GB)",
        warranty: "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
        highligts: "256 GB ROM15.49 cm (6.1 inch) Super Retina XDR Display48MP + 12MP + 12MP | 12MP Front CameraA16 Bionic Chip, 6 Core Processor Processor",
    },
    {
        id: 2,
        imageURL: "https://media.mobex.in/media/catalog/product/a/p/apple-12-smartphones-491901536-i-1-1200wx1200h.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
        name: "iphone 12",
        bestoffer: "80% off",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
    },
   
    {
        id: 3,
        imageURL: "https://vasanthandco.in/images/productimages/716dd03-dbuntitled-1.png",
        name: "iphone 13,pro",
        bestoffer: "80% off",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
    },
    {
        id: 4,
        imageURL: "https://m.media-amazon.com/images/I/81c50PU+lpL.jpg",
        name: "iphone 15,pro",
        bestoffer: "80% off",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
    },
]

   const products2 = [
  {
      
          id: 1,
          imageURL: "https://media-assets.grailed.com/prd/listing/37075096/dffd68a00e6f445397bef100020209ba",
          name: "H&M shirt",
          bestoffer: "50% off"
      
  },
  {
      
      id: 2,
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5DGhB2ZZ8cG6xIf6Poeu4xdfqAyOwDXVSfA&usqp=CAU",
      name: "Black tshirt",
      bestoffer: "50% off"
  
},
{
      
  id: 3,
  imageURL: "https://blackberrys.com/cdn/shop/products/Westley_Casual_Check_Shirt_In_Maroon-USBU0403R2NS22FN-image1.jpg?v=1687858822",
  name: "over size shirt",
  bestoffer: "50% off"

},
{
      
id: 4,
imageURL: "https://media.vogue.in/wp-content/uploads/2020/01/white-shirt-hm.jpg",
name: " H&M tshirt",
bestoffer: "50% off"

}
]
  return (
    <div  className="ecommerce">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path="/product/:productID"  element={ <Product1 products={products}  Addtocart = { Addtocart} />} />
        <Route path="/mobiledetails/:mobileID"  element={<Mobilesdetails products2={products2} ADDcart ={ADDcart } /> } />
        <Route path="/phones" element={<Phone/>} />
        <Route path="/fashions" element={<Fashion/>} />
        <Route path="/cart" element={<Cart  cartitems={cartitems}  cartshow= {cartshow} />} />
        
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
