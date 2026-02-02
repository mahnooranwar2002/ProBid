import React, { useEffect, useState } from "react";
import AdminDasbhoard from "./adminDasbhoard";
import { Link } from "react-router-dom";
import axios from "axios";

const FetchCon = () => {
      var [cate, ListCate] = useState([]);
  


  function del_cate(id) {
    axios.delete(`http://localhost/auction_website/contact/DeleteCon.php?id=${id}`);

    fetchCategory();
  }

  function fetchCategory() {
    axios
      .get("http://localhost/auction_website/contact/FetchCont.php")
      .then((resp) => {
        ListCate(resp.data);
      });
  }

  useEffect(() => {
    fetchCategory();
  });
  return (
    <div>
          <AdminDasbhoard></AdminDasbhoard>
        <div class="container-fluid ">
              <div class="main-content">
                <h1>Contact Management</h1>
                <div class="card">
                  <div class="card-header">Contact List</div>
                  <div class="card-body table-responsive">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="input-group" style={{ flex: "1" }}>
                        <input
                          type="text"
                          class="form-control"
                          id="searchPassenger"
                          placeholder="Search for passengers..."
                          name="value"
             
                        
                        />
                        <div class="input-group-append">
                          <button class="btn btn-outline" type="button" onClick={""}>
                            Search
                          </button>
                        </div>
                      </div>
      
                    
                    </div>
      
                    <table class="table table-striped ">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          
                          <th>Message</th>
                         
      
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cate.length===0?(<tr>
                          <td className=" text-center" colSpan={7}>No data found</td>
                        </tr>):(
                        cate.map((m) => (
                          <tr>
                            <td>{m.name}</td>
      
                            <td>{m.email}</td>
                             <td>{m.msg}</td>
      
                            <td>
                           
                              <button
                                class="btn btn-danger btn-sm"
                                onClick={() => {
                                  del_cate(m.id);
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        )))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default FetchCon
