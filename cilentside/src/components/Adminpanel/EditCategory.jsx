import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminDasbhoard from "./adminDasbhoard";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const EditCategory = () => {
  const { id } = useParams();
  const [datas, setData] = useState({
    id:"",
    name: "",
    description: "",
    status: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    name: "",
    description: "",
    status: "",
  });

  function inputHandle(e) {
    setData({ ...datas, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error[e.target.name]) {
      setError({ ...error, [e.target.name]: "" });
    }
  }

  function validateForm() {
    let isValid = true;
    const newErrors = { name: "", description: "", status: "" };

    if (!datas.name.trim()) {
      newErrors.name = "Category name is required";
      isValid = false;
    }

    if (!datas.description.trim()) {
      newErrors.description = "Description is required";
      isValid = false;
    }

    if (datas.status === "") {
      newErrors.status = "Please select a status";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  }

  function submitForm(e) {
    e.preventDefault();
    axios.post(`http://localhost/auction_website/UpdateCate.php`, datas, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
     
  }

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost/auction_website/GetCategory.php?id=${id}`)
      .then((resp) => {
        if (resp.data && resp.data.length > 0) {
          setData(resp.data[0]);
        } else {
          toast.error("Category not found", { position: "top-right" });
        }
      })
      .catch((err) => {
        toast.error("Failed to load category data", { position: "top-right" });
        console.error("Fetch error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]); // Added id as dependency

  if (loading) {
    return (
      <div>
        <AdminDasbhoard />
        <div className="container-fluid">
          <div className="main-content text-center p-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Loading category data...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <AdminDasbhoard />
      <div className="container-fluid">
        <div className="main-content">
          <h1>Update Category</h1>
          <div className="card p-5">
            <form onSubmit={submitForm} method="post">
              <div className="row">
                <div className="mb-3 col-6">
                  <label htmlFor="categoryName" className="form-label">
                    Category Name 
                  </label>
                 <input type="hidden" name="id" value={datas.id} />
                  <input
                    type="text"
                    className={`form-control ${error.name ? "is-invalid" : ""}`}
                    id="categoryName"
                    name="name"
                    value={datas.name}
                    placeholder="Enter name"
                    onChange={inputHandle}
                  />
                  {error.name && (
                    <div className="invalid-feedback">{error.name}</div>
                  )}
                </div>
                <div className="mb-3 col-6">
                  <label htmlFor="categoryStatus" className="form-label">
                    Category Status 
                  </label>
                  <select
                    className={`form-select form-select-sm p-2 ${error.status ? "is-invalid" : ""}`}
                    id="categoryStatus"
                    name="status"
                    value={datas.status}
                    onChange={inputHandle}
                  >
                    <option value="" hidden>Open this select menu</option>
                    <option value={1}>Activate</option>
                    <option value={0}>Deactivate</option>
                  </select>
                  {error.status && (
                    <div className="invalid-feedback">{error.status}</div>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="categoryDescription" className="form-label">
                  Description 
                </label>
                <textarea
                  className={`form-control ${error.description ? "is-invalid" : ""}`}
                  id="categoryDescription"
                  name="description"
                  rows="3"
                  value={datas.description}
                  onChange={inputHandle}
                ></textarea>
                {error.description && (
                  <div className="invalid-feedback">{error.description}</div>
                )}
              </div>
              <button 
                type="submit" 
                className="w-100 p-2 rounded btn btn1"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Category"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditCategory;