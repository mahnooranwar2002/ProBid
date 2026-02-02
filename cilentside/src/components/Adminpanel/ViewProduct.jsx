import React, { useEffect, useState } from "react";
import AdminDasbhoard from "./adminDasbhoard";
import axios from "axios";
import { useParams } from "react-router-dom";

const ViewProduct = () => {
  var [data, SetData] = useState({});
  var { id } = useParams();
  function fetchData() {
    axios
      .get(
        `http://localhost/auction_website/products/fetchProduct.php?id=${id}`
      )
      .then((resp) => {
        console.log(resp.data[0]);
        SetData(resp.data[0]);
      });
  }
  useState(() => {
    fetchData();
  });
  
  return (
    <div>
      <AdminDasbhoard></AdminDasbhoard>

      <div class="container-fluid ">
        <div class="main-content">
          <h1>Items Info</h1>
          <div class="card">
            <div class="card-header">Items Info</div>
            <div class="card-body table-responsive" id="msss">
              <div className="con">
            
                <img src={`/ProductImages/${data.picture}`} alt="" />
              </div>
              <div className="con">
               <div className="cos">
                 <h4 >
                  <b>Product Name</b> : {data.itemTittle}
                </h4>
                <h4>{data.bid_status==0?(<span className="bg-pink text-danger">Deactivate</span>):(<span className="text-success">Activate</span>)}</h4>
               </div>
                <div className="cos">
                 <h4>
                  <b>Start Date</b> : {data.startDate}
                </h4>
            
                 <h4>
                  <b>End Date</b> : {data.endDate}
                </h4>
              
               </div>
               <div className="cos">
                <h4>
                  <b>Minimun Bid</b> : {data.minimun_bid}$
                </h4>
                  <h4>
                  <b>Increment Bid</b> : {data.Incremenent}$
                </h4>
                </div>
          <div className="cos">
                <h4>
                  <b>Category Name</b> : {data.categoryName}
                </h4>
                  <h4>
                  <b>Auctioneer </b> : {data.user_name}
                </h4>
                </div>
                    {/* <div className="cosDes"><h4><b>Summary </b>: </h4>
              <p>{data.summary}</p></div>
              </div> */}
              <div className="cosDes">
                <h4><b>Summary </b>: </h4>
              <p>{data.summary}</p>
                
                <h4><b>Description </b>: </h4>
              <p>{data.description}</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
