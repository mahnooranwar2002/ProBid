import React, { useEffect, useRef, useState } from "react";
import Features from "./Features";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ReactSession } from "react-client-session";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import { toast, ToastContainer } from "react-toastify";
const Profile = () => {
  const [userData, setUserData] = useState({ name: "", email: "" });
  const navs = useNavigate();

  const username = ReactSession.get("username");

  useEffect(() => {
    if (username) {
      axios
        .get(
          `http://localhost/auction_website/user/fetchUSerdetails.php?id=${username}`
        )
        .then((res) => {
          console.log(res.data);
          setUserData(res.data[0]);
        });
    }
  }, [username]);

  const inputHandle = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  var Profileform = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost/auction_website/user/updateUser.php", userData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Ensure PHP receives POST data
        },
      })
      .then((res) => {
        toast.success("Your Profile is updated Now !", {
          position: "top-right",
        });
      });
  };
  var [UserPass, pass_update] = useState({
    password: "",
    confirm_pass: "",
    id:""
  });
var  [passewordError,Seterror]=useState("");
  var passinputHandle = (e) => {
    pass_update({ ... UserPass, [e.target.name]: e.target.value });
  };
  var updatePasswordForm = (e) => {
    e.preventDefault();
    if (UserPass.password !== UserPass.confirm_pass) {
      var error="Confirm password is incorrected!";
      Seterror(error);
    } else {
           Seterror(null);
           UserPass.id=username;
          axios
      .post("http://localhost/auction_website/user/UpdaatePassword.php", UserPass, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Ensure PHP receives POST data
        },
      })
      .then((res) => {
        toast.success("Your password is updated Now !", {
          position: "top-right",
        });
      });
    }
  };
  return (
    <div>
      <Header></Header>
      <section className="bannarSec">
        <div className="container">
          <h4>Update Profile</h4>
        </div>
      </section>
      <button>Share account with others</button>
      <div className="container" id="ProfileContainer">
        <div id="profileBox">
          <h4>Update Profile</h4>
          <form onSubmit={Profileform}>
            <input
              type="hidden"
              name="id"
              value={userData.id}
              onChange={inputHandle}
            />

            <input
              type="text"
              placeholder="Name"
              value={userData.name}
              onChange={inputHandle}
              name="name"
            />
            <input
              type="text"
              placeholder="Email"
              value={userData.email}
              onChange={inputHandle}
              name="email"
            />

            <input type="submit" value="Update Profile" className="btn" />
          </form>
        </div>
        <div className="passwordSec">
          <h4>Update Password</h4>
          <form onSubmit={updatePasswordForm}>
            <input
              type="text"
              placeholder="new Password"
              name="password"
              onChange={passinputHandle}
                value={UserPass.password}
            />
          
            <input
              type="text"
              placeholder="Confirm Password"
              name="confirm_pass"
              value={UserPass.confirm_pass}
              onChange={passinputHandle}
            />
            
<span className="text-error">{passewordError}</span>
            <input type="submit" value="Update Password" className="btn" />
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
      <Footer />
    </div>
  );
};

export default Profile;
