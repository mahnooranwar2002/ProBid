import React, { useEffect, useState } from "react";
import AdminDasbhoard from "./adminDasbhoard";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function Winners() {
  const [wins, setWinners] = useState([]);

var fetchWinner=()=>{
axios.get("http://localhost/auction_website/user/winnerFindout.php").then((resp)=>{
    setWinners(resp.data);
  
})
}
useEffect(()=>{
  fetchWinner()  
})

// C:\xampp\htdocs\auction_website\user\winnerDelete.php
var del_winer=(id)=>{
   axios.get(`http://localhost/auction_website/user/winnerDelete.php?id=${id}`);
   fetchWinner();
}
var Stauswinner=(id)=>{
     axios.get(`http://localhost/auction_website/user/statusWinner.php?id=${id}`).then((reso)=>{
        if(reso.data==true){
            toast.success("The winner status is updated!");   
        }
     })
      fetchWinner();
}
  return (
    <div>
        <AdminDasbhoard />
      <div className="container-fluid ">
        <div className="main-content">
          <h1>Winners Management</h1>
          <div className="card">
            <div className="card-header">Winners List</div>
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
                  
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline"
                      type="button"
                 
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
                    <th>Winner Name</th>
                    <th>amount </th>
                    <th>winning Date </th>
             
                    <th>Action</th>
                  </tr>
                </thead>
                   {wins.length === 0 ? (
                                  <tr>
                                    <td className=" text-center" colSpan={5}>
                                      No data found
                                    </td>
                                  </tr>
                                ) : (
                                  wins.map((m) => (
                                    <tr key={m.winner_id}> {/* Use a unique key for list items */}
                                      <td>{m.PName}</td>
                                      <td>{m.uName}</td>
                                      <td>{m.winningBid}</td>
                                      <td>{m.wining_Date}</td>
                                
                                     
   <td><button className="btn btn-danger bg-danger text-white btn-sm m-1" onClick={()=>del_winer(m.winner_id)}>Delete</button>
   <button className="btn btn-success bg-success text-white btn-sm m-1" onClick={()=>Stauswinner(m.winner_id)}>Status</button>
 </td>
                                     
                                    </tr>
                                  ))
                                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Winners
