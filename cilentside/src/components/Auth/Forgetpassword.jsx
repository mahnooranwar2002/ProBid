import React, { useEffect, useState } from "react";
import Header from "../website/Header";
import Footer from "../website/Footer";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Forgetpassword = () => {
  var [loginData, SetLogindata] = useState({
    email: "",
    password: "",
  });
  var inputHAndleLogin = (e) => {
    SetLogindata({ ...loginData, [e.target.name]: e.target.value });
  };
  var Loginform = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost/auction_website/user/forgetpassword.php",
        loginData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      )
      .then((res) => {
        if (res.data.success == 'true') {
       
          toast.success("The password is update !");
          SetLogindata({
            email: "",
            password: "",
          });
        } else {
        
          toast.error("This email  is not registered !");
                SetLogindata({
            email: "",
            password: "",
          });
        }
      })
    
  };

  return (
    <>
      <Header></Header>
      <section className="bannarSec">
        <div className="container">
          <h4>Forget Password</h4>
        </div>
      </section>

      <div className="container" id="authBox">
        <div className="loginbox">
          <form action="" onSubmit={Loginform}>
            <h2>Update Password</h2>
            <input
              type="text"
              name="email"
              value={loginData.email}
              onChange={inputHAndleLogin}
              placeholder="Enter Email"
            />

            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={inputHAndleLogin}
              placeholder="Enter password"
            />
            <input type="submit" className="btn1" value={"Update Password"} />
            <div className="loginCred">
              <p>
                old user? please{" "}
                <Link className="Link" to={"/login"}>
                  login here
                </Link>
              </p>

              <p>
                New user? please{" "}
                <Link className="Link" to={"/loginRegister"}>
                  create account here
                </Link>
              </p>
               <p>forgot your passwrod? please <Link className="Link" to={"/user/forgetpassword"}>update   here</Link></p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  );
};

export default Forgetpassword;
