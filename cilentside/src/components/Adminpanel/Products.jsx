import React, { useEffect, useState } from "react";
import AdminDasbhoard from "./adminDasbhoard";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const API_BASE_URL = "http://localhost/auction_website/products";
const USER_API_BASE_URL = "http://localhost/auction_website/user";

const Products = () => {
  // Use meaningful variable names (e.g., items, setItems)
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState({ value: "" });

  // 1. Function to fetch all items (used for initial load and refreshing)
  function fetchItem() {
    axios
      .get(`${API_BASE_URL}/AdminProduct.php`)
      .then((resp) => {
        // Check if data is an array before setting state
        if (Array.isArray(resp.data)) {
          setItems(resp.data);
        } else {
          setItems([]); // Handle case where API returns non-array (e.g., error message)
          console.error("API response is not an array:", resp.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        toast.error("Failed to load products.");
      });
  }

  // 2. Toggles product status and refreshes UI
  function productSatsus(id) {
    axios
      .put(`${API_BASE_URL}/productStatus.php?id=${id}`)
      .then(() => {
        toast.success("The auction status is updated!");
        // CRITICAL FIX: Refresh data AFTER successful API response
        fetchItem(); 
      })
      .catch((error) => {
        console.error("Status update error:", error);
        toast.error("Failed to update status.");
      });
  }

  // 3. Deletes product and refreshes UI
  const del_pro = (id) => {
    axios
      .delete(`${API_BASE_URL}/deleteProduct.php?id=${id}`)
      .then(() => {
        toast.error("The item is deleted!");
        // CRITICAL FIX: Refresh data AFTER successful API response
        fetchItem(); 
      })
      .catch((error) => {
        console.error("Delete error:", error);
        toast.error("Failed to delete item.");
      });
  };

  // 4. Handles search input changes
  function inputHandle(e) {
    setSearch({ ...search, [e.target.name]: e.target.value });
  }
  
  // 5. Executes search and updates item list
  const seachValue = () => {
    axios
      .post(
        `${API_BASE_URL}/productSerach.php`,
        search,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((resp) => {
        if (Array.isArray(resp.data)) {
            setItems(resp.data);
        } else {
            setItems([]);
        }
      })
      .catch((error) => {
        console.error("Search error:", error);
        toast.error("Search failed.");
      });
  };

  // 6. Finds the winner for the given item ID
  const findWinner = (id) => {
    axios
      .get(`http://localhost/auction_website/user/Winners.php?id=${id}`)
      .then((res) => {
      console.log(res);
        toast.success("The winner is Announced!");
        // CRITICAL FIX: Refresh data to update the 'Announced' button status
        fetchItem(); 
      })
      .catch((error) => {
        console.error("Find Winner error:", error);
        toast.error("Failed to announce winner.");
      });
  };

  // useEffect Hook: Replaces the wrongly placed useState hook for fetching data
  useEffect(() => {
    fetchItem();
  }, []); // [] ensures this runs only once on component mount

  return (
    <div>
      <AdminDasbhoard />
      <div className="container-fluid ">
        <div className="main-content">
          <h1>Items Management</h1>
          <div className="card">
            <div className="card-header">Items List</div>
            <div className="card-body table-responsive">
              <div className="d-flex justify-content-between align-items-center">
                <div className="input-group" style={{ flex: 1 }}>
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    id="searchPassenger"
                    placeholder="Search for items..."
                    name="value"
                    value={search.value}
                    onChange={inputHandle}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline"
                      type="button"
                      onClick={seachValue}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>

              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th> Product Name</th>
                    <th>Product Image</th>
                    <th>User Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length === 0 ? (
                    <tr>
                      <td className=" text-center" colSpan={5}>
                        No data found
                      </td>
                    </tr>
                  ) : (
                    items.map((m) => (
                      <tr key={m.id}> {/* Use a unique key for list items */}
                        <td>{m.itemTittle}</td>
                        <td>
                          <img
                            src={`/ProductImages/${m.picture}`}
                            alt={m.itemTittle}
                            width={100}
                          />
                        </td>
                        <td>{m.user_name}</td>
                        <td>
                          {/* Use strict equality (===) for comparison */}
                          {m.bid_status == 1 ? (
                            <span className="text-success">Activate</span>
                          ) : m.bid_status == 2 ? (
                            <span className="text-primary">Sold</span>
                          ) : (
                            <span className="text-danger">Deactivate</span>
                          )}
                        </td>

                        <td>
                          <Link
                            to={`/adminViewProduct/${m.id}`}
                            className="btn btn-info btn-sm text-white m-1"
                          >
                            Info
                          </Link>
                           {m.bid_status != 2 ? 
                          <button
                            className="btn btn-primary btn-sm m-1"
                            onClick={() => {
                              productSatsus(m.id);
                            }}
                          >
                            Status
                          </button>
                          :("")}
                          <button
                            className="btn btn-danger btn-sm m-1"
                            onClick={() => {
                              del_pro(m.id);
                            }}
                          >
                            Delete
                          </button>
                          {/* Find Winner Button Logic */}
                          {m.bid_status != 2 ? (
                            <button
                              className="btn btn-warning btn-sm m-1 text-white"
                              onClick={() => {
                                findWinner(m.id);
                              }}
                            >
                              Find Winner
                            </button>
                          ) : (
                            <button
                              disabled
                              className="btn btn-success btn-sm m-1" // Changed to success color for Announced
                            >
                              Announced
                            </button>
                          )}
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

export default Products;