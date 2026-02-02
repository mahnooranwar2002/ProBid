import React, { useEffect, useState } from "react";
import AdminDasbhoard from "./adminDasbhoard";
import axios from "axios";

const Auction = () => {
  var [biiding, SetbiddingData] = useState([]);
  var fetchbidding = () => {
    axios
      .get("http://localhost/auction_website/auction/adminAuctiom.php")
      .then((resp) => {
        SetbiddingData(resp.data);
      });
  };

  useEffect(() => {
    fetchbidding();
  });
  function del_cate(id) {
    axios.delete(
      `http://localhost/auction_website/auction/deletebiding.php?id=${id}`
    );
  }

  return (
    <div>
      <AdminDasbhoard></AdminDasbhoard>
      <div class="container-fluid ">
        <div class="main-content">
          <h1>Biding Management</h1>
          <div class="card">
            <div class="card-header">Biding List</div>
            <div class="card-body table-responsive">
              <div class="d-flex justify-content-between align-items-center">
                <div class="input-group" style={{ flex: "1" }}>
                  <input
                    type="text"
                    class="form-control"
                    id="searchPassenger"
                    placeholder="Search for passengers..."
                    name="value"
                    style={{padding:0}}
                    // value={search.value}
                    // onChange={inputHandle}
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline" type="button">
                      Search
                    </button>
                  </div>
                </div>
              </div>

              <table class="table table-striped ">
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Product Name</th>
                    <th>Bidding Amount</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {biiding.length === 0 ? (
                    <tr>
                      <td className=" text-center" colSpan={7}>
                        No data found
                      </td>
                    </tr>
                  ) : (
                    biiding.map((m) => (
                      <tr>
                        <td>{m.user_name}</td>

                        <td>{m.P_name}</td>
                        <td>{m.amount}</td>

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

export default Auction;
