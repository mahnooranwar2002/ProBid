import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import axios from "axios";
import { Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
import { toast, ToastContainer } from "react-toastify/unstyled";

const Product = () => {
  var [itmes, SetItem] = useState([]);
  const [category, setCate] = useState([]);
  useEffect(() => {
Categoryfetch();
itemsfunction();
   
  }, []);
var Categoryfetch=()=>{
       axios
          .get("http://localhost/auction_website/products/ActiveCategory.php")
          .then((resp) => {
            setCate(resp.data);
          });
      };

  var itemsfunction=()=>{
        axios
      .get("http://localhost/auction_website/products/productsfetch.php")
      .then((resp) => {
        //  console.log(resp.data);
        SetItem(resp.data);
      })
  }
var functionSearch=(value)=>{
axios.post("http://localhost/auction_website/products/SearchproductWesbsite.php", value, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Ensure PHP receives POST data
        },
      }).then((resp)=>{
             SetItem(resp.data);
      })
}
  const [userData, setUserData] = useState({});
  const username = ReactSession.get("username");
  useEffect(()=>{
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
  }, []); 


function addToWishlist(p_name, picture) {
  const data = {
    p_name: p_name,
    user_id: userData.id,
    img: picture,
  };

  axios
    .post("http://localhost/auction_website/Wishlist/insertwishlist.php", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        }})
    .then((response) => {
      console.log(response.data);
      if (response.data.success) {
        toast.success(response.data.success);
      } else {
        toast.error(response.data.success);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}




  return (
    <>
      <Header></Header>
      <section className="bannarSec">
        <div className="container">
          <h4>Products</h4>
        </div>
      </section>
      <section className="container productSec">
{/* {userData.id} */}

        <div className="left-wrapper">
          {itmes.map((i) => (
            <div className="card">
              <div className="imgDiv">
                <img src={`/ProductImages/${i.picture}`} alt="" />
              </div>

              <div className="card-body">
                <p className="Tittle">{i.itemTittle}</p>
                <p>{i.summary}</p>
                <div className="btns">
                  <ul>
                    <li onClick={()=>addToWishlist(i.itemTittle,i.picture)}>
                      <i class="ri-heart-3-line"></i>
                    </li>
                    <li>
                        <Link to={`/productData/${i.id}`}>
                       <i class="ri-shopping-cart-2-line"></i>
                      </Link>
                      
                    </li>
                    <li>
                      <Link to={`/productData/${i.id}`}>
                        <i class="ri-eye-line"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ToastContainer/>
      <Footer></Footer>
    </>
  );
};

export default Product;
