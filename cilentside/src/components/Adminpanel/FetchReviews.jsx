import React, { useEffect, useState } from "react";
import AdminDasbhoard from "./adminDasbhoard";
import axios from "axios";

const FetchReviews = () => {
  var [review, Setview] = useState([]);
  var fetch_reviews = () => {
    axios
      .get("http://localhost/auction_website/Reviews/adminReviews.php")
      .then((resp) => {
        Setview(resp.data);
      });
  };

  function del_review(id) {
    axios.get(
      `http://localhost/auction_website/Reviews/DeleteReview.php?id=${id}`
    );
    fetch_reviews();
  }
  var [search, SetSreach] = useState({ value: "" });
  function inputHandle(e) {
    SetSreach({ ...search, [e.target.name]: e.target.value });
  }
  var seachValue = () => {
    axios
      .post(
        "http://localhost/auction_website/Reviews/searchReviews.php",
        search,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Ensure PHP receives POST data
          },
        }
      )
      .then((resp) => {
        Setview(resp.data);
        console.log(resp.data);
      });
  };
  useState(() => {
    fetch_reviews();
  });
  return (
    <div>
      <AdminDasbhoard></AdminDasbhoard>
      <div class="container-fluid ">
        <div class="main-content">
          <h1>Reviews Management</h1>
          <div class="card">
            <div class="card-header">Reviews List</div>
            <div class="card-body table-responsive">
              <div class="d-flex justify-content-between align-items-center">
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
                    <th>Product Name</th>
                    <th>User Name</th>
                    <th>Message</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {review.length === 0 ? (
                    <tr>
                      <td className=" text-center" colSpan={7}>
                        No data found
                      </td>
                    </tr>
                  ) : (
                    review.map((m) => (
                      <tr>
                        <td>{m.product_name}</td>

                        <td>{m.user_name}</td>

                        <td>{m.message}</td>
                        <td>
                          <button
                            class="btn btn-danger btn-sm"
                            onClick={() => {
                              del_review(m.id);
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

export default FetchReviews;
