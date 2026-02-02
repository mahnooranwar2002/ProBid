import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ReactSession } from "react-client-session";
import axios from "axios";
const AdminDasbhoard = () => {
  var navs = useNavigate();
  const logout = () => {
    ReactSession.remove("AdminLogined");

    navs("/");
  };
  const adminData = ReactSession.get("AdminLogined");

  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (adminData) {
      axios
        .get(
          `http://localhost/auction_website/user/fetchUSerdetails.php?id=${adminData}`
        )
        .then((res) => {
          // console.log(res.data);
          setUserData(res.data[0]);
        });
    }
  }, []);

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
        crossorigin="anonymous"
      ></link>
      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div class="sidebar ">
        <div class="logo-details">
          <i class="bx-lg bx bxs-rocket bx-tada-hover"></i>
          <span class="logo_name">Admin Panel</span>
        </div>
        <ul class="nav-links">
          <li>
            <Link to={"/admin/Index"} class="sidebar-link">
              <i class="ri-dashboard-horizontal-line"></i>
              <span class="link_name">Dashboard </span>
            </Link>
          </li>
          <li>
            <Link to={"/admin/categories"} class="sidebar-link">
              <i class="ri-layout-grid-fill"></i>
              <span class="link_name">Categories </span>
            </Link>
          </li>
          <li>
            <Link to={"/admin/users"} class="sidebar-link">
              <i class="ri-user-star-fill"></i>
              <span class="link_name">User </span>
            </Link>
          </li>
          <li>
            <Link to={"/admin/products"} class="sidebar-link">
              <i class="ri-box-3-line"></i>
              <span class="link_name">Items </span>
            </Link>
          </li>
          <li>
            <Link to={"/admin/reviews"} class="sidebar-link">
              <i class="ri-chat-settings-line"></i>
              <span class="link_name">Reviews </span>
            </Link>
          </li>
     

          <li>
            <Link to={"/admin/auction"} class="sidebar-link">
              <i class="ri-exchange-dollar-line"></i>
              <span class="link_name">Bidding Details </span>
            </Link>
          </li>
                <li>
            <Link to={"/admin/Contact"} class="sidebar-link">
             <i class="ri-contacts-line"></i>
              <span class="link_name">Contact </span>
            </Link>
          </li>
                 <li>
            <Link to={"/admin/winner"} class="sidebar-link">
             <i class="ri-contacts-line"></i>
              <span class="link_name">Winners </span>
            </Link>
          </li>
                  <li>
            <Link to={"/admin/claim-data"} class="sidebar-link">
        <i class="ri-file-pdf-line"></i>
              <span class="link_name">Claim </span>
            </Link>
          </li>
       
               <li>
            <Link to={"/admin/profile"} class="sidebar-link">
              <i class="ri-user-star-fill"></i>
              <span class="link_name">Profile </span>
            </Link>
          </li>
        </ul>
        <button className="btn btn-danger w-75 " style={{marginTop:"90%"}} onClick={logout}>
          Logout
        </button>
      </div>

      <section class="home-section ">
        <div class="home-content">
          <i class="bx bx-menu"></i>
          <span class="text">Pro Bid</span>
          <div class="profile-dropdown">
            <span class="profile-name text-white">{userData.name}</span>
          </div>
        </div>
      </section>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AdminDasbhoard;
