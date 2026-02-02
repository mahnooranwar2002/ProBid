import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminDasbhoard from "./adminDasbhoard";
import { Link } from "react-router-dom";

const Category = () => {
  var [cate, ListCate] = useState([]);
  


  function del_cate(id) {
    axios.delete(`http://localhost/auction_website/DeleteCate.php?id=${id}`);

    fetchCategory();
  }

  function fetchCategory() {
    axios
      .get("http://localhost/auction_website/categoryFetch.php")
      .then((resp) => {
        ListCate(resp.data);
      });
  }

  useEffect(() => {
    fetchCategory();
  });
    var [search,SetSreach] = useState({value:""})
  function inputHandle(e) {
  SetSreach ({ ...search, [e.target.name]: e.target.value });
  }
var seachValue = ()=>{
 
axios.post("http://localhost/auction_website/searchCate.php", search, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Ensure PHP receives POST data
        },
      }).then((resp)=>{
             ListCate(resp.data);
      })
 
}


  return (
    <div>
      <AdminDasbhoard></AdminDasbhoard>

      <div class="container-fluid ">
        <div class="main-content">
          <h1>Categoeries Management</h1>
          <div class="card">
            <div class="card-header">Categoeries List</div>
            <div class="card-body table-responsive">
              <div class="d-flex justify-content-between" style={{gap:0}}>
                <div class="input-group" style={{ flex: "1" }}>
                  <input
                    type="text"
                    class="form-control"
                    id="searchPassenger"
                    placeholder="Search for passengers..."
                    name="value"
                value={search.value}
                onChange={inputHandle}
                  
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline" type="button" onClick={seachValue}>
                      Search
                    </button>
                  </div>
                </div>

                <Link class="btn btn1  " to={"/add_Cates"}>
                  {" "}
                  Add
                </Link>
              </div>

              <table class="table table-striped ">
                <thead>
                  <tr>
                    <th>Category Name</th>
                    <th>Category Description</th>
                    <th>Category Status</th>

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

                      <td>{m.description}</td>
                      <td>
                        {m.status == 1 ? (
                          <span>Activate</span>
                        ) : (
                          <span>Deactivate</span>
                        )}
                      </td>

                      <td>
                        <Link
                          to={`/edit_Cates/${m.id}`}
                          class="btn btn-success btn-sm"
                          data-toggle="modal"
                          data-target="#editPassengerModal"
                        >
                          Edit
                        </Link>
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
  );
};

export default Category;
