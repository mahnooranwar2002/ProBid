import React from "react";
import Header from "./components/website/Header";
import Home from "./components/website/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/website/About";
import Contact from "./components/website/Contact";
import Product from "./components/website/Product";
import Category from "./components/Adminpanel/Category";
import AdminDasbhoard from "./components/Adminpanel/adminDasbhoard";
import Add_cate from "./components/Adminpanel/Add_cate";
import EditCategory from "./components/Adminpanel/EditCategory";
import RegisterNlogiin from "./components/Auth/RegisterNlogiin";
import User from "./components/Adminpanel/User";
import Profile from "./components/website/Profile";
import ProtectedRoutes from "./components/website/ProtectedRoutes";
import Additems from "./components/website/Additems";
import Products from "./components/Adminpanel/Products";
import ViewProduct from "./components/Adminpanel/ViewProduct";
import ProductData from "./components/website/ProductData";
import FetchReviews from "./components/Adminpanel/FetchReviews";
import AdminRpoutesProtected from "./components/Adminpanel/AdminRpoutesProtected";
import AdminIndex from "./components/Adminpanel/AdminIndex";
import AdminProfile from "./components/Adminpanel/AdminProfile";
import Auction from "./components/Adminpanel/Auction";
import Wishlist from "./components/website/Wishlist";
import FetchCon from "./components/Adminpanel/FetchCon";
import Login from "./components/Auth/Login";
import Winners from "./components/Adminpanel/Winners";
import WinningProducts from "./components/website/WinningProducts";
import Forgetpassword from "./components/Auth/Forgetpassword";
import ClaimNow from "./components/website/ClaimNow";
import ClaimDetails from "./components/Adminpanel/ClaimDetails";
import Myclaim from "./components/website/Myclaim";

const App = () => {
  return (
    <div>
      <Routes>
        {/* for LOGIN AND REGISTER */}
        <Route
          element={<RegisterNlogiin></RegisterNlogiin>}
          path={"/loginRegister"}
        ></Route>
        <Route
          element={<Forgetpassword />}
          path={"/user/forgetpassword"}
        ></Route>
        <Route element={<Home></Home>} path={"/"}></Route>
        <Route element={<About></About>} path={"/about"}></Route>
        <Route element={<Contact></Contact>} path={"/contact"}></Route>
        <Route element={<Login></Login>} path={"/login"}></Route>

        <Route element={<Product></Product>} path={"/products"}></Route>
        <Route
          element={<ProductData></ProductData>}
          path={"/productData/:id"}
        ></Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/add_items" element={<Additems />} />
          <Route path="/Mywishlist" element={<Wishlist />} />
          <Route path="/myProducts" element={<WinningProducts />} />

          <Route path="/user/paymentGetway" element={<ClaimNow />} />
          <Route path="/user/claims" element={<Myclaim />} />
          
        </Route>

        {/* for admin */}
        <Route element={<AdminRpoutesProtected />}>
          <Route element={<AdminIndex />} path={"/admin/Index"}></Route>
          <Route element={<Winners />} path={"/admin/winner"}></Route>
          <Route element={<ClaimDetails />} path={"/admin/claim-data"}></Route>
          <Route element={<AdminProfile />} path={"/admin/profile"}></Route>
          <Route element={<Auction />} path={"/admin/auction"}></Route>
          <Route element={<FetchCon />} path={"/admin/Contact"}></Route>
          <Route element={<Category />} path={"/admin/categories"}></Route>
          <Route element={<Add_cate></Add_cate>} path={"/add_Cates"}></Route>
          <Route element={<User />} path={"/admin/users"}></Route>
          <Route element={<Products />} path={"/admin/products"}></Route>
          <Route element={<EditCategory />} path={"/edit_Cates/:id"}></Route>
          <Route
            element={<ViewProduct />}
            path={"/adminViewProduct/:id"}
          ></Route>
          <Route element={<FetchReviews />} path={"/admin/reviews"}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
