import React, { useEffect, useState } from 'react'
import AdminDasbhoard from './adminDasbhoard'
import axios from 'axios';

const AdminIndex = () => {

    var [items,SetItem]=useState([]);
    function fetchItem(){
        axios.get('http://localhost/auction_website/products/AdminProduct.php').then((resp)=>{
            SetItem(resp.data);
        })
    }
      var [cate, ListCate] = useState([]);
      function fetchCategory() {
    axios
      .get("http://localhost/auction_website/categoryFetch.php")
      .then((resp) => {
        ListCate(resp.data);
      });
  }
    var [users, DataUser] = useState([]);
  function fetchUser() {
    axios
      .get("http://localhost/auction_website/user/Fetchuser.php")
      .then((resp) => {
        //   console.log(resp.data);
        DataUser(resp.data);
      });
  }
   var [review, Setview] = useState([]);
  var fetch_reviews = () => {
    axios
      .get("http://localhost/auction_website/Reviews/adminReviews.php")
      .then((resp) => {
        Setview(resp.data);
      });
  };
 var [con, ListCon] = useState([]);
  function ContactFetch() {
    axios
      .get("http://localhost/auction_website/contact/FetchCont.php")
      .then((resp) => {
        ListCon(resp.data);
      });
  }
    useEffect(()=>{
      fetchItem();
      fetchCategory()
      fetchUser();
      fetch_reviews()
      ContactFetch()
    },[])
  return (
    <>
      <AdminDasbhoard></AdminDasbhoard>
        <div class="container-fluid ">
        <div class="main-content">
          <h3 className='mb-3'>Dashboard </h3>
      <div className="row g-4">
          <div className="col-6">
          <div className="card h-100 border-0 shadow-lg rounded-4 p-4 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-semibold text-muted mb-0">Categories</h6>
             <i class="ri-layout-grid-fill fs-3"></i>
            
            </div>
            <h2 className="fw-bold mb-0" style={{color:"#005f59"}}>{cate.length}</h2>
          </div>
        </div>
             <div className="col-6">
          <div className="card h-100 border-0 shadow-lg rounded-4 p-4 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-semibold text-muted mb-0">User</h6>
             <i class="ri-user-star-fill fs-3"></i>
            
            </div>
            <h2 className="fw-bold mb-0" style={{color:"#005f59"}}>{users.length}</h2>
          </div>
        </div>
    <div className="col-6">
          <div className="card h-100 border-0 shadow-lg rounded-4 p-4 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-semibold text-muted mb-0">Products</h6>
           <i class="ri-box-3-line fs-3"></i>
            </div>
            <h2 className="fw-bold mb-0" style={{color:"#005f59"}}>{review.length}</h2>
          </div>
        </div>
     
          <div className="col-6">
          <div className="card h-100 border-0 shadow-lg rounded-4 p-4 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-semibold text-muted mb-0">Reviews</h6>
           <i class="ri-chat-settings-line fs-3"></i>
            </div>
            <h2 className="fw-bold mb-0" style={{color:"#005f59"}}>{items.length}</h2>
          </div>
        </div>
         <div className="col-6">
          <div className="card h-100 border-0 shadow-lg rounded-4 p-4 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-semibold text-muted mb-0">Contact</h6>
           <i class="ri-contacts-line fs-3"></i>
            </div>
            <h2 className="fw-bold mb-0" style={{color:"#005f59"}}>{con.length}</h2>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default AdminIndex
