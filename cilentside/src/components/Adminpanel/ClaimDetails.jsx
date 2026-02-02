import React, { useEffect, useState } from "react";
import AdminDasbhoard from "./adminDasbhoard";
import { Link } from "react-router-dom";
import axios from "axios";


const ClaimDetails = () => {
    var [cate, ListCate] = useState([]);
    function fetchCategory() {
    axios
      .get("http://localhost/auction_website/user/claimsdetails.php")
      .then((resp) => {
        ListCate(resp.data);
      });
  }
  function del_cate(id) {
    axios.delete(`http://localhost/auction_website/user/deleteClaim.php?id=${id}`);

    fetchCategory();
  }
  useEffect(() => {
    fetchCategory();
  });
  var [statusData,SetStatusData]=useState({
    id:"",
    status:""
  })
  var inputHandler=(e)=>{
SetStatusData({...statusData, [e.target.name]: e.target.value})
  }
  var statusUpdate=(e,claimId)=>{
e.preventDefault()
statusData.id=claimId;
axios.post("http://localhost/auction_website/user/claimStatus.php",statusData,{
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((resp)=>{
      console.log(resp.data)
      console.log(statusData)

})
  }
  return (
    <div>
       <AdminDasbhoard></AdminDasbhoard>
         <div class="container-fluid ">
              <div class="main-content">
                <h1>Claim Management</h1>
                <div class="card">
                  <div class="card-header">Claim List</div>
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
      
                <div className="card-grid">
  {cate.length === 0 ? (
    <div className="no-data">No data found</div>
  ) : (
    cate.map((m,index) => (
      <div className="user-card" key={m.id}>
        <div className="card-header">
          <h3 style={{color:"white"}}>{m.u_name}</h3>

        </div>
        
        <div className="card-body">
          <p><strong>Email:</strong> {m.email}</p>
          <p><strong>Address:</strong> {m.address}</p>
            <p><strong>products name:</strong> {m.products_Data}</p>
              <p><strong>product price:</strong> {m.price}</p>
              <p className="abcccc">TOTAL <strong>${m.totalPrice}</strong></p>
        </div>

        <div className="card-actions">
          <form action="" onSubmit={(e) => statusUpdate(e, m.id)}>
            <input type="text" value={m.id}  name="id" onChange={inputHandler}/>
            <select name="status" id="" className="select" onChange={inputHandler}>
              <option value={m.status}>{m.status}</option>
              <option value="delevered">Dileivered </option>

            </select>
              <button
            className="btn-status"
           
          >
            Status Update 
          </button>
          </form>
        
          <button
            className="btn-delete"
            onClick={() => del_cate(m.id)}
          >
            Delete 
          </button>
        </div>
      </div>
    ))
  )}
</div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default ClaimDetails
