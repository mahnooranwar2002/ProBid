import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
       <div className="container row">
         <div className="footerBox" id='logo'>
            <img src="/image/footer-logo-white.svg" alt="" />
            <h3>Social Just You Connected Us!</h3>
            <p>All of update in social</p>
               <ul className='socialLinks'>
        <li><i class="ri-facebook-box-line"></i></li>
         <li><i class="ri-twitter-x-line"></i></li>
          <li><i class="ri-instagram-line"></i></li>
  
  <li><i class="ri-pinterest-fill"></i></li>
        </ul>
        </div>
        <div className="footerBox">
            <h3>Categories</h3>
            <ul>
                <li><a href="">Books</a></li>
                   <li><a href="">Electronice</a></li>
                      <li><a href="">Furnitures</a></li>
                         <li><a href="">Furnitures</a></li>
    </ul>
            </div>
        <div className="footerBox">
            <h3>Company</h3>
                   <ul>
                <li><a href="">Home</a></li>
                   <li><a href="">About us</a></li>
                      <li><a href="">Contact Us</a></li>
                      <li><a href="">F.A.Q</a></li>
                      
    </ul>
        </div>
       
        <div className="footerBox">
            <h3>Join Our Newsletter & More information.</h3>
            <input type="text" placeholder='Enter Email'/>
            <p className='p'>Secured Payment Gateways</p>

        </div>
       </div>
       <div className="container infoBox">
      <div className="col1"><i class="ri-copyright-line"></i>  Copyright 2024 Probid | Design By Egens Lab </div>
      <div className="col1">
        <ul>
            <li><a href="">Support Center</a></li>
            <li><a href="">Terms & Conditions</a></li>
     <li><a href="">Privacy Policy</a></li>
        </ul>
      </div>
       </div>
      </footer>
    </div>
  )
}

export default Footer
