import React, { useEffect, useState } from "react";
import Header from "../website/Header";
import Footer from "../website/Footer";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
const RegisterNlogiin = () => {
  var Navigate = useNavigate();
  const username = ReactSession.get("username");
  var [register, SetuserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  var inputHAndleRegist = (e) => {
    SetuserData({ ...register, [e.target.name]: e.target.value });
  };

  var registerform = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost/auction_website/user/register.php", register, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Ensure PHP receives POST data
        },
      })
      .then((res) => {
        if (res.data.success === "true") {
          toast.success("Your account is Created Now !", {
            position: "top-right",
          });
          SetuserData({
            name: "",
            email: "",
            password: "",
          });
        } else {
          toast.error("The Email  is  already Register !", {
            position: "top-right",
          });
        }
        // console.log(res.data);
        console.log(res);
      });
  };
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
      .post("http://localhost/auction_website/user/login.php",loginData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        if(res.data.Userdata){
        if (res.data.Userdata.is_admin == 0) {
          if (res.data.Userdata.status == 1) {
            var user_id = res.data.Userdata.id;

            // Cookies.set("userData", user_id);
            ReactSession.set("username", user_id);
            // ReactSession.setStoreType("localStorage");

            Navigate("/");
          } else {
            toast.error("Your account is deactivated by Admin ");
          }
        } else {
          var user_id = res.data.Userdata.id;
          Navigate("/admin/Index");
          ReactSession.set("AdminLogined", user_id);
        }}else{
            toast.error("An email or password is wrong.");
        }
      })
      .catch((error) => {
      
        toast.error("Server error");
      });
  };
  useEffect(() => {
    if (username==true) {
      Navigate("/");
    }
  });
  useEffect(() => {
  if (ReactSession.get("username")) {
    Navigate("/");
  }
}, []);
  return (
    <div>
      <Header></Header>
      <section className="bannarSec">
        <div className="container">
          <h4> Register</h4>
        </div>
      </section>
      <div className="container" id="authBox">
     
        <div className="Registerbox">
          <form action="" onSubmit={registerform}>
            <h2>REGISTER HERE</h2>
            <input
              type="text"
              name="name"
              value={register.name}
              onChange={inputHAndleRegist}
              placeholder="Enter Name"
            />
            <input
              type="text"
              name="email"
              value={register.email}
              placeholder="Enter Email"
              onChange={inputHAndleRegist}
            />

            <input
              type="password"
              name="password"
              value={register.password}
              placeholder="Enter password"
              onChange={inputHAndleRegist}
            />
            <input type="submit" className="btn1" value={"Login"} />
              <div className="loginCred">
                       <p>old user? please <Link className="Link" to={"/login"}>login here</Link></p>
                       
                          <p>New user? please <Link className="Link" to={"/loginRegister"}>create account  here</Link></p>
                               
                          <p>forgot your passwrod? please <Link className="Link" to={"/user/forgetpassword"}>update   here</Link></p>
                          </div>
                
          </form>
           
        </div>
      </div>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
};

export default RegisterNlogiin;
