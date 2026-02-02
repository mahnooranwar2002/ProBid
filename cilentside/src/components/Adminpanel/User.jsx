import React, { useEffect, useState } from "react";
import AdminDasbhoard from "./adminDasbhoard";
import axios from "axios";
import { toast } from "react-toastify";

const User = () => {
  var [users, DataUser] = useState([]);
  function fetchUser() {
    axios
      .get("http://localhost/auction_website/user/Fetchuser.php")
      .then((resp) => {
        //   console.log(resp.data);
        DataUser(resp.data);
      });
  }


  function del_user(id) {
    axios.delete(
      `http://localhost/auction_website/user/Deleteuser.php?id=${id}`
    );
  }
 
  var [search, SetSreach] = useState({ value: "" });
  function inputHandle(e) {
    SetSreach({ ...search, [e.target.name]: e.target.value });
  }
  var seachValue = () => {
    axios
      .post("http://localhost/auction_website/user/SearchUser.php", search, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Ensure PHP receives POST data
        },
      })
      .then((resp) => {
 
        DataUser(resp.data);
      });
  };
      useState(() => {

   
        fetchUser();
        return;
    
  });
  function userSatsus(id){
axios.put(`http://localhost/auction_website/user/userStatus.php?id=${id}`)
  toast.success("The user status is updated !")

  }

  return (
    <div>
      <AdminDasbhoard></AdminDasbhoard>

      <div class="container-fluid ">
        <div class="main-content">
          <h1>Users Management</h1>
          <div class="card">
            <div class="card-header">User List</div>
            <div class="card-body table-responsive">
              <div class="d-flex justify-content-between align-items-center">
                <div class="input-group" style={{ flex: 1 }}>
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
                    <button
                      class="btn btn-outline"
                      type="button"
                      onClick={seachValue}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>

              <table class="table table-striped ">
                <thead>
                  <tr>
                    <th> Name</th>
                    <th>Email</th>
                    <th>Status</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr>
                      <td className=" text-center" colSpan={7}>
                        No data found
                      </td>
                    </tr>
                  ) : (
                    users.map((m) => (
                      <tr>
                        <td>{m.name}</td>

                        <td>{m.email}</td>
                        <td>
                          {m.status == 1 ? (
                            <span className="text-success">Activate</span>
                          ) : (
                            <span className="text-danger">Deactivate</span>
                          )}
                        </td>

                        <td>
                             <button
                            class="btn btn-primary btn-sm"
                            onClick={() => {
                            userSatsus  (m.id);
                            }}
                          >
                            Status
                          </button>
                          <button
                            class="btn btn-danger btn-sm"
                            onClick={() => {
                              del_user(m.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
