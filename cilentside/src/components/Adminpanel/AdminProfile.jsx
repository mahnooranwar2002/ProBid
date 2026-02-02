import AdminDasbhoard from "./adminDasbhoard";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const AdminProfile = () => {
  const [userData, setUserData] = useState({ name: "", email: "" });
  const navs = useNavigate();

  const username = ReactSession.get("AdminLogined");

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
    id: "",
  });
  var [passewordError, Seterror] = useState("");
  var passinputHandle = (e) => {
    pass_update({ ...UserPass, [e.target.name]: e.target.value });
  };
  var updatePasswordForm = (e) => {
    e.preventDefault();
    if (UserPass.password !== UserPass.confirm_pass) {
      var error = "Confirm password is incorrected!";
      Seterror(error);
    } else {
      Seterror(null);
      UserPass.id = username;
      axios
        .post(
          "http://localhost/auction_website/user/UpdaatePassword.php",
          UserPass,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded", // Ensure PHP receives POST data
            },
          }
        )
        .then((res) => {
          toast.success("Your password is updated Now !", {
            position: "top-right",
          });
        });
    }
  };
  return (
    <div>
      <AdminDasbhoard></AdminDasbhoard>
      <div class="container-fluid ">
        <div class="main-content">
          <h1>Update Profile </h1>
          <div class="card p-5">
            <div className="row " id="Admin_profile">
              <div class="mb-3 col-4">
                <form onSubmit={Profileform}>
                  <h3>Profile</h3>
                  <label for="exampleFormControlInput1" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="name"
                    value={userData.name}
                    onChange={inputHandle}
                  />

                  <label for="exampleFormControlInput1" class="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    disabled
                    value={userData.email}
                    onChange={inputHandle}
                  />

                  <input type="submit" className="w-25 p-2 rounded btn btn1" />
                </form>
              </div>

              <div class="mb-3 col-4">
                <form onSubmit={updatePasswordForm}>
                  <h3>Update password</h3>
                  <label for="exampleFormControlInput1" class="form-label">
                    password
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="password"
                    onChange={passinputHandle}
                    value={UserPass.password}
                  />

                  <label for="exampleFormControlInput1" class="form-label">
                    Confirm password
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="confirm_pass"
                    onChange={passinputHandle}
                    value={UserPass.confirm_pass}
                  />
                  <div>
                    <span className="text-danger">{passewordError}</span>
                  </div>
                  <input type="submit" className="w-25 p-2 rounded btn btn1" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
