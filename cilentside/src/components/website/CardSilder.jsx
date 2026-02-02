import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import { Link } from 'react-router-dom';
const CardSilder = () => {
var [itmes,SetItem]=useState([]);
useEffect(()=>{
    axios.get('http://localhost/auction_website/products/ProductWebsite.php').then((resp)=>{
     
        SetItem(resp.data);
    })
},[])

  return (
    <div>
    <div className="container" id='cardSilder'>

{
    itmes.map((i)=>(
     <div className="card">
               
                <div className="imgDiv"> 
                    
                    <img src={`/ProductImages/${i.picture}`} alt="" />
                   </div>
                    
              <div className="card-body">
                 <p className="Tittle">{i.itemTittle}</p>
                 <p>{i.summary}</p>
                 <div className="btns">
                    <ul>
                        
                        <li><Link to={'/products'}><i class="ri-heart-3-line"></i></Link></li>
                        <li><Link to={'/products'}><i class="ri-shopping-cart-2-line"></i></Link></li>
                        <li><Link to={'/products'}><i class="ri-eye-line"></i></Link></li>
                    </ul>
                 </div>
              </div>
            </div>
    ))
}
        
    </div>
    
    </div>
  )
}

export default CardSilder
