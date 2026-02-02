import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import Features from "./Features";
import Cookies from 'js-cookie';

const About = () => {


  return (
    <>
      <Header></Header>
      <section className="bannarSec">
        <div className="container">
          <h4>About us</h4>
        </div>
      </section>
      <div className="container aboutSec">
        <div className="right-wrapper">
          <h2>
            Who We <span>Are</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            natus mollitia quos praesentium eveniet? Adipisci magnam quisquam
            repudiandae? Perferendis laboriosam minus exercitationem deserunt!
            Laborum dolore rerum aut ducimus impedit voluptate soluta
            blanditiis, minus, autem cum omnis placeat molestiae necessitatibus
            facilis doloremque hic animi ullam voluptatibus architecto totam
            praesentium! In, et?
          </p>
          <ul>
            <li>
              <div className="icon">
                <i class="ri-bar-chart-box-fill"></i>
              </div>
              <div className="content">
                <h3>Our Expert Solutions</h3>
                <p>
                  Praesent gravida nunc at tortor cursus, molestie dapibus purus
                  posuere. Vestibulum commodo, massa eget rutrum feugiat
                </p>
              </div>
            </li>
            <li>
              <div className="icon">
                <i class="ri-bar-chart-box-fill"></i>
              </div>
              <div className="content">
                <h3>Our Expert Solutions</h3>
                <p>
                  Praesent gravida nunc at tortor cursus, molestie dapibus purus
                  posuere. Vestibulum commodo, massa eget rutrum feugiat
                </p>
              </div>
            </li>
            <li>
              <div className="icon">
                <i class="ri-bar-chart-box-fill"></i>
              </div>
              <div className="content">
                <h3>Our Expert Solutions</h3>
                <p>
                  Praesent gravida nunc at tortor cursus, molestie dapibus purus
                  posuere. Vestibulum commodo, massa eget rutrum feugiat
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="left-wrapper">
          <img src="image/home5-about-img.png" alt="" />
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
      <Features></Features>
      <Footer></Footer>
    </>
  );
};

export default About;
