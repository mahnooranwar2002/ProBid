import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
import axios from "axios";

const Header = () => {
  const [userData, setUserData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navs = useNavigate();

  const username = ReactSession.get("username");

  // --- Data Fetching Logic ---
  useEffect(() => {
    if (username) {
      axios
        .get(
          `http://localhost/auction_website/user/fetchUSerdetails.php?id=${username}`
        )
        .then((res) => {
          setUserData(res.data);
        });
    }
  }, [username]);

  const logout = () => {
    ReactSession.remove("username");
    setUserData(null);
    navs("/");
  };

  // --- Desktop Dropdown Logic ---
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const desktopDropdownRef = useRef(null);

  const toggleDesktopDropdown = () => {
    setIsDesktopDropdownOpen((prevState) => !prevState);
  };
  
  // --- Sidebar Dropdown Logic (CORRECTED) ---
  const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false);
  const sidebarDropdownRef = useRef(null);

  const toggleSidebarDropdown = () => {
    setIsSidebarDropdownOpen((prevState) => !prevState);
  };

  // --- Click Outside Logic for BOTH dropdowns ---
  const closeDropdowns = (event) => {
    // Close Desktop Dropdown
    if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
      setIsDesktopDropdownOpen(false);
    }
    // Close Sidebar Dropdown
    if (sidebarDropdownRef.current && !sidebarDropdownRef.current.contains(event.target)) {
        setIsSidebarDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdowns);
    return () => {
      document.removeEventListener("click", closeDropdowns);
    };
  }, []);

  // --- Sidebar Toggle Logic ---
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
    // Jab sidebar band ho toh sidebar ka dropdown bhi band kar dein
    if(isSidebarOpen) {
        setIsSidebarDropdownOpen(false);
    }
  };

  return (
    <>
      <div className="container">
        <header>
          {/* ... existing top-area content ... */}
          <div className="nav">
            <img src="/image/logo.svg" alt="Auction Logo" />
            <nav className="desktop-nav"> {/* Added class for targeting */}
              <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/products"}>products</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
              </ul>
            </nav>
            <div className="formdiv">
              <input
                type="search"
                name=""
                placeholder="search the product"
                id=""
              />
              <button>
                <i className="ri-search-line"></i>
              </button>
            </div>

            {/* --- Desktop User Dropdown --- */}
            {username ? (
              userData.map((r) => (
                <div className="desktop-dropdown" ref={desktopDropdownRef} key={r.id}>
                  <button onClick={toggleDesktopDropdown} className="dropbtn">
                    {r.name}
                  </button>
                  {isDesktopDropdownOpen && (
                    <div className="desktop-dropdown-content">
                      <Link to={"/profile"}>Profile</Link>
                      <Link to={"/add_items"}>Add items</Link>
                      <Link to={"/Mywishlist"}>Wishlist</Link>
                      <Link to={"/myProducts"}>Winning Products</Link>
                      <Link to={"/user/claims"}>My orders</Link>
                      <a onClick={logout}>Logout</a>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="link-content desktop-login-link">
                <Link to={"/loginRegister"}>
                  <i className="ri-user-line"></i> Join us
                </Link>
              </div>
            )}
            
            {/* Hamburger Menu Icon */}
            <i id="menu" className="ri-menu-fold-line menu-icon" onClick={toggleSidebar}></i>
          </div>
        </header>

        {/* --- Sidebar (Mobile Menu) --- */}
        {/* Changed classname for clarity and applied ActiveMenu conditionally */}
        <div className={`website-sidebar ${isSidebarOpen ? "ActiveMenu" : ""}`} id="websiteSidebar">
            <div className="sidebar-header">
                <img src="/image/logo.svg" alt="Auction Logo" />
                <i className="ri-close-large-line close-icon" onClick={toggleSidebar}></i>
            </div>
            <div className="links">
                <ul>
                    <li><Link to={"/"} onClick={toggleSidebar}>Home</Link></li>
                    <li><Link to={"/about"} onClick={toggleSidebar}>About</Link></li>
                    <li><Link to={"/products"} onClick={toggleSidebar}>Products</Link></li>
                    <li><Link to={"/contact"} onClick={toggleSidebar}>Contact</Link></li>
                </ul>
                
                {/* --- Sidebar User Dropdown (CORRECTED CLASS NAME AND STATE) --- */}
                {username ? (
                    userData.map((r) => (
                        <div className="sidebar-dropdown" ref={sidebarDropdownRef} key={r.id}>
                            {/* Class name changed to sidebar-dropbtn */}
                            <button onClick={toggleSidebarDropdown} className="sidebar-dropbtn">
                                {r.name}
                            </button>
                            {/* State changed to isSidebarDropdownOpen */}
                            {isSidebarDropdownOpen && (
                                <div className="sidebar-dropdown-content">
                                    <Link to={"/profile"} className="a" onClick={toggleSidebar}>Profile</Link>
                                    <Link to={"/add_items"} className="a" onClick={toggleSidebar}>Add items</Link>
                                    <Link to={"/Mywishlist"}className="a" onClick={toggleSidebar}>Wishlist</Link>
                                    <Link to={"/myProducts"} className="a" onClick={toggleSidebar}>Winning Products</Link>
                                    <a className="a" onClick={() => { logout(); toggleSidebar(); }}>Logout</a>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="link-content sidebar-login-link">
                        <Link className="Links" to={"/loginRegister"} onClick={toggleSidebar}>
                            <i className="ri-user-line"></i> Join us
                        </Link>
                    </div>
                )}
            </div>
        </div>
   </div>
    </>
  );
};

export default Header;