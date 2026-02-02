import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { ReactSession } from "react-client-session";

const Additems = () => {
  const today = new Date().toISOString().slice(0, 10);
  const [item, setItem] = useState({
    itemTittle: "",
    picture: null, // Store the file object
    description: "",
    startDate: "",
    endDate: "",
    Incremenent: "1", // Set default value for Increment
    minimun_bid: "",
    categoryName: "",
    user_name: "",
    summary: "",
  });
  const username = ReactSession.get("username");
  const [category, setCate] = useState([]);

  const inputHandle = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setItem({ ...item, [name]: files[0] }); // Store the file object
    } else {
      setItem({ ...item, [name]: value });
    }
  };

  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost/auction_website/products/ActiveCategory.php")
      .then((resp) => {
        setCate(resp.data);
      });
    
    if (username) {
      axios
        .get(
          `http://localhost/auction_website/user/fetchUSerdetails.php?id=${username}`
        )
        .then((res) => {
          setUserData(res.data[0]);
        });
    }
    // Set default increment value on mount
    setItem(prevItem => ({ ...prevItem, Incremenent: "1" }));
  }, [username]); // Added username dependency

  var [error, SetError] = useState({
    itemTittle: "",
    picture: null,
    description: "",
    startDate: "",
    endDate: "",
    Incremenent: "",
    minimun_bid: "",
    categoryName: "",
    summary: "",
  });

  const formAdded = (e) => {
    e.preventDefault();
    
    // Reset errors
    var Errors = {
      itemTittle: "",
      picture: null,
      description: "",
      startDate: "",
      endDate: "",
      Incremenent: "",
      minimun_bid: "",
      categoryName: "",
      summary: "",
    };

    let hasError = false;

    // --- Validation Logic ---
    if (!item.itemTittle.trim()) {
      Errors.itemTittle = "the item name is required ! ";
      hasError = true;
    }
    if (!item.description.trim()) {
      Errors.description = "the description is required ! ";
      hasError = true;
    }
    if (!item.summary.trim()) {
      Errors.summary = "the summary is required ! ";
      hasError = true;
    }
    if (!item.categoryName.trim()) {
      Errors.categoryName = "the category is required ! ";
      hasError = true;
    }
    if (!item.startDate.trim()) {
      Errors.startDate = "the start Date is required ! ";
      hasError = true;
    }
    if (!item.endDate.trim()) {
      Errors.endDate = "the End Date is required ! ";
      hasError = true;
    }
    if (item.startDate && item.endDate) {
        if (item.startDate === item.endDate) {
            Errors.endDate = "The End Date and Start Date cannot be the same! ";
            hasError = true;
        } else if (item.startDate > item.endDate) {
            Errors.endDate = "The End Date cannot be earlier than the Start Date";
            hasError = true;
        }
    }
    if (!item.minimun_bid || item.minimun_bid.toString().trim() === "") {
      Errors.minimun_bid = "the minimun bid is required !"
      hasError = true;
    }
    // (Optional: You might want to validate if a picture is selected)
    // if (!item.picture) {
    //     Errors.picture = "An image is required!";
    //     hasError = true;
    // }

    SetError(Errors);

    if (!hasError) {
      // --- Core Fix: Use FormData for file upload ---
      const formData = new FormData();
      
      formData.append("itemTittle", item.itemTittle);
      formData.append("picture", item.picture); // The file object
      formData.append("description", item.description);
      formData.append("startDate", item.startDate);
      formData.append("endDate", item.endDate);
      formData.append("Incremenent", item.Incremenent || "1"); // Ensure increment is sent
      formData.append("minimun_bid", item.minimun_bid);
      formData.append("categoryName", item.categoryName);
      formData.append("user_name", userData.name); // Using the fetched user name
      formData.append("summary", item.summary);

      axios.post(
          "http://localhost/auction_website/products/insertProduct.php",
          formData, // Send the FormData object
          {
            // Do NOT explicitly set 'Content-Type': 'multipart/form-data'. 
            // Axios and the browser handle it correctly when sending FormData.
          }
        )
        .then((response) => {
          toast.success("The item is added Now");
          // Reset state after successful submission
          setItem({
            itemTittle: "",
            picture: null,
            description: "",
            startDate: "",
            endDate: "",
            Incremenent: "1",
            minimun_bid: "",
            categoryName: "",
            user_name: "",
            summary: "",
          });
          SetError({ // Also reset error state
              itemTittle: "",
              picture: null,
              description: "",
              startDate: "",
              endDate: "",
              Incremenent: "",
              minimun_bid: "",
              categoryName: "",
              summary: "",
          });
        })
        .catch((error) => {
          console.error("Error submitting product:", error);
          toast.error("Failed to add item. Check console for details.");
        });
    }
  };

  return (
    <div>
      <Header />
      <section className="bannarSec">
        <div className="container">
          <h4>Add Items</h4>
        </div>
      </section>
      <div className="container" id="Bidform">
        <h3>Add Items</h3>
        <form onSubmit={formAdded}> {/* removed encType here as it's handled by axios/FormData */}
          <div className="row">
            <div className="col">
              <label htmlFor="">Product Name</label>
              <input
                type="text"
                name="itemTittle"
                value={item.itemTittle}
                onChange={inputHandle}
              />
              <span className="text-danger">{error.itemTittle}</span>
            </div>
            <div className="col">
              <label htmlFor="">Category</label>
              <select
                name="categoryName"
                onChange={inputHandle}
                value={item.categoryName}
              >
                <option value="" hidden>
                  Select Category
                </option>
                {category.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
              <span className="text-danger">{error.categoryName}</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="">Summary</label>
              <input 
                type="text"
                name="summary"
                value={item.summary}
                onChange={inputHandle} 
              />
              <span className="text-danger">{error.summary}</span>
            </div>
            <div className="col">
              <label htmlFor="">Image</label>
              <input type="file" name="picture" onChange={inputHandle} />
              {/* Optional: Add error display for picture */}
              {/* <span className="text-danger">{error.picture}</span> */}
            </div>
          </div>
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            value={item.description}
            onChange={inputHandle}
          ></textarea>
          <span className="text-danger">{error.description}</span>
          <div className="row">
            <div className="col">
              <label htmlFor="">Start Date</label>
              <input
                type="date"
                min={today}
                value={item.startDate}
                onChange={inputHandle}
                name="startDate"
              />
              <span className="text-danger">{error.startDate}</span>
            </div>
            <div className="col">
              <label htmlFor="">End Date</label>
              <input
                type="date"
                min={today}
                value={item.endDate}
                name="endDate"
                onChange={inputHandle}
              />
              <span className="text-danger">{error.endDate}</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="">Minimum Bid</label>
              <input
                type="number"
                value={item.minimun_bid}
                name="minimun_bid"
                onChange={inputHandle}
              />
              <span className="text-danger">{error.minimun_bid}</span>
            </div>
            <div className="col">
              <label htmlFor="">Bid Increment</label>
              <input
                type="number"
                value={item.Incremenent} // Use item.Incremenent
                readOnly
                name="Incremenent"
                onChange={inputHandle}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input type="submit" className="btn1" value={"Save"} />
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default Additems;