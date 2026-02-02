import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Features from "./Features";
import Testimonial from "./Testimonial";
import Product from "./Product";
import CardSilder from "./CardSilder";
const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="container bannar">
        <ul className="socialLinks">
          <li>
            <i class="ri-facebook-box-line"></i>
          </li>
          <li>
            <i class="ri-twitter-x-line"></i>
          </li>
          <li>
            <i class="ri-instagram-line"></i>
          </li>

          <li>
            <i class="ri-pinterest-fill"></i>
          </li>
        </ul>
        <div className="bannar-content">
          <h1>
            Select <span>Our Product</span> At our Auction.
          </h1>
          <p>
            Join us as we carve a path to success, driven by passion, powered by
            innovation, and we're here to turn them into reality.
          </p>
          <a href="" className="btn btn1">
            start bid
          </a>
          <a href="" className="btn btn2">
            View All Auctions
          </a>
        </div>
        <div className="imgSec">
          <img src="image/banner-left-img.jpg" alt="" className="img" />
          <div className="img-box">
            <img src="image/banner-right-top-img.jpg" alt="" />
            <img src="image/banner-right-bottom-img.jpg" alt="" />
          </div>
        </div>
      </div>
    <div className="knowSec container">
        <div className="right-wrapper">
          <img src="image/home1-about-img1.jpg" alt="" />
        </div>
        <div className="left-wrapper">
          <h2>
            Get In <span> Know</span>
          </h2>
          <p>
         
            Welcome to Zenfy, where digital innovation meets strategic
            excellence. As a dynamic force in the realm of digital marketing, we
            are dedicated to propelling businesses into the spotlight of online
            success with us for this example .
            
          </p>
              <p>
            Welcome to Zenfy, where digital innovation meets strategic
            excellence. As a dynamic force in the realm of digital marketing, we
            are dedicated to propelling businesses into the spotlight of online
            success with us for this example .
            
          </p>
              <p>
            Welcome to Zenfy, where digital innovation meets strategic
            excellence. As a dynamic force in the realm of digital marketing, we
            are dedicated to propelling businesses into the spotlight of online
            success with us for this example .
            
          </p>
          <ul>
            <li>
              <span>
                <i class="ri-checkbox-circle-fill"></i>
              </span>{" "}
              Ready to boost your online presence
            </li>
            <li>
              <span>
                <i class="ri-checkbox-circle-fill"></i>
              </span>
              Ready to boost your online presence
            </li>
            <li>
              <span>
                <i class="ri-checkbox-circle-fill"></i>
              </span>
              Ready to boost your online presence
            </li>
            <li>
              <span>
                <i class="ri-checkbox-circle-fill"></i>
              </span>
              Ready to boost your online presence
            </li>
            <li>
              <span>
                <i class="ri-checkbox-circle-fill"></i>
              </span>
              Ready to boost your online presence
            </li>
          </ul>
          <a href="" className="btn">More About us</a>
        </div>
      </div>
      <Testimonial></Testimonial>
    <CardSilder></CardSilder>
      <Features></Features>
      <Footer></Footer>
    </>
  );
};

export default Home;
