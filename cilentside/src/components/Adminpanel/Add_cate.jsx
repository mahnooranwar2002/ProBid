import axios from "axios";
import React, { useState } from "react";
import AdminDasbhoard from "./adminDasbhoard";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

const Add_cate = () => {
  var [data, Data_details] = useState({
    name: "",
    description: "",
    status: "",
  });
  function inputHandle(e) {
    Data_details({ ...data, [e.target.name]: e.target.value });
  }
    var [error, Errorsdetails] = useState({
    name: "",
    description: "",
    status: "",
  });
  function submitForm(e) {
    e.preventDefault();
    var NewErr={
       name: "",
    description: "",
    status: "",  
    }
if(!data.name.trim()){
    NewErr.name="the name is required !";
}
if(!data.description.trim()){
    NewErr.description="the description is required !";
}
if(!data.status){
    NewErr.status="the Status is required !";
}

if(NewErr.name||NewErr.description || NewErr.status){
    Errorsdetails(NewErr);
}else{
 axios
      .post("http://localhost/auction_website/insert_category.php", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Ensure PHP receives POST data
        },
      })
      .then((res) => {
        if (res.data.success === "true") {
          toast.success("the category is added !", { position: "top-right" });
          Data_details({
            name: "",
            description: "",
            status: "",
          });
          Errorsdetails({
                name: "",
            description: "",
            status: "",
          });
        } else {
          toast.error("The category's name  is  already added !", {
            position: "top-right",
          });
        }
        // console.log(res.data);
        console.log(res);
      });
}

   
  }

  return (
    <div>
      <AdminDasbhoard></AdminDasbhoard>
      <div class="container-fluid ">
        <div class="main-content">
          <h1>Add New Categoery </h1>
          <div class="card p-5">
            <form onSubmit={submitForm}>
              <div className="row">
                <div class="mb-3 col-6">
                  <label for="exampleFormControlInput1" class="form-label">
                    Category Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="name"
                    value={data.name}
                    placeholder="Enter name"
                    onChange={inputHandle}
                  />
                  {error.name && (
                      <span className="text-danger">
                        {error.name}
                      </span>
                    )}
                </div>
                <div class="mb-3 col-6">
                  <label for="exampleFormControlInput1" class="form-label">
                    Category Status
                  </label>
                  <select
                    class="form-select form-select-sm p-2"
                    aria-label="Small select example"
                    name="status"
                    value={data.status}
                    onChange={inputHandle}
                  >
                    <option hidden>Open this select menu</option>
                    <option value={1}>Activate</option>
                    <option value={0}>Deactivate</option>
                  </select>
                     {error.status && (
                      <span className="text-danger">
                        {error.status}
                      </span>
                    )}
                </div>
                 
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Description
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="description"
                  rows="3"
                  value={data.description}
                  onChange={inputHandle}
                ></textarea>
              </div>
  {error.description && (
                      <span className="text-danger">
                        {error.description}
                      </span>
                    )}
              <input type="submit" className="w-100 p-2 rounded btn btn1" />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Add_cate;
