
import React, { useEffect, useState } from "react";
import Header from "../website/Header";
import Footer from "../website/Footer";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
const Login = () => {
    var Navigate = useNavigate();
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
  return (
    <div>
        <Header></Header>
      <section className="bannarSec">
        <div className="container">
          <h4>Login </h4>
        </div>
      </section>
        <div className="container" id="authBox">
        <div className="loginbox">
          <form action="" onSubmit={Loginform}>
            <h2>LOGIN HERE</h2>
            <input
              type="text"
              name="email"
              onChange={inputHAndleLogin}
              placeholder="Enter Email"
            />

            <input
              type="password"
              name="password"
              onChange={inputHAndleLogin}
              placeholder="Enter password"
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
  )
}

export default Login
