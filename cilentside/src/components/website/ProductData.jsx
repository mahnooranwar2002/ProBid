import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { ReactSession } from "react-client-session";

const ProductData = () => {
  var { id } = useParams();
  var [data, SetData] = useState({});
  const [userData, setUserData] = useState({});
  const username = ReactSession.get("username");
  function fetchData() {
    axios
      .get(
        `http://localhost/auction_website/products/fetchProduct.php?id=${id}`
      )
      .then((resp) => {
        // console.log(resp.data);
        SetData(resp.data[0]);
      });
  }
  function userDeatils() {
    if (username) {
      axios
        .get(
          `http://localhost/auction_website/user/fetchUSerdetails.php?id=${username}`
        )
        .then((res) => {
          console.log(res.data[0]);
          setUserData(res.data[0]);
        });
    }
  }

  useEffect(() => {
    fetchData();
    userDeatils();
    fetchreview();
    fetchhistoryData();
  }, []);

  var [reviews, SetreView] = useState({
    user_name: "",
    product_name: "",
    product_id: "",
    message: "",
  });

  function inputHandle(e) {
    SetreView({ ...reviews, [e.target.name]: e.target.value });
  }
  function addReview(e) {
    e.preventDefault();
    if (username == null) {
      toast.error("first to login please");
    } else {
      reviews.product_id = data.id;
      var name = data.itemTittle;
      reviews.product_name = name;
      console.log((reviews.product_name = name));
      reviews.user_name = userData.name;
      axios
        .post(
          "http://localhost/auction_website/Reviews/insertReviews.php",
          reviews,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded", // Ensure PHP receives POST data
            },
          }
        )
        .then(() => {
          toast.success("The Review is submited successfully");
        });
    }
  }
  var [fetchReview, SetfetchReview] = useState([]);
  function fetchreview() {
    axios
      .get(
        `http://localhost/auction_website/Reviews/fetchreview.php?product_id=${id}`
      )
      .then((resp) => {
        SetfetchReview(resp.data);
      });
  }
var [fetchhistory, Sethistory] = useState([]);
  function fetchhistoryData() {
    axios
      .get(
        `http://localhost/auction_website/auction/webauctionHistory.php?P_id=${id}`
      )
      .then((resp) => {
        Sethistory(resp.data);
      });
  }
  // for the bid
  var [bid, SetBid] = useState({
    user_name: "",
    P_id: "",
    P_name: "",
    user_id: "",
    amount: "",
  });
  var inputHandleAmount = (e) => {
    SetBid({ ...bid, [e.target.name]: e.target.value });
  };
  var add_Bid = (e) => {
    e.preventDefault();
     if (username == null) {
      toast.error("first to login please");
    }else{
    bid.P_id = data.id;
    bid.P_name = data.itemTittle;
    bid.user_name = userData.name;
    bid.user_id = userData.id;
  axios.post(
          "http://localhost/auction_website/auction/Insert_aucAmount.php",
          bid,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded", // Ensure PHP receives POST data
            },
          }
        )
        .then((resp) => {
        if(resp.data.success=="true"){
          toast.success("Bid is added successfully");
                fetchData();
          fetchhistory();
  
        }else{
          toast.error(`Bid must be greater then ${data.minimun_bid}`);
        }
        });
  
    }
  };
  const [showDescription, setShowDescription] = useState(true);
const [showReviews, setShowReviews] = useState(false);
const [showAuction, setShowAuction] = useState(false);

const openDes = () => {
  setShowDescription(true);
  setShowReviews(false);
  setShowAuction(false);
};

const openReviews = () => {
  setShowDescription(false);
  setShowReviews(true);
  setShowAuction(false);
};

const openAuction = () => {
  setShowDescription(false);
  setShowReviews(false);
  setShowAuction(true);
};
  return (
    <div>
      <Header></Header>
      <section className="bannarSec">
        <div className="container">
          <h4>Auction Details</h4>
        </div>
      </section>

      <section className="container" id="auctionContainer">
        <div className="right-wrapper">
          <img
            src={`/ProductImages/${data.picture}`}
            style={{ width: 450 }}
          ></img>
        </div>
        <div className="left-wrapper">
          <div className="div">
            <h2>{data.itemTittle}</h2>
            <p>{data.summary}</p>
            <div className="CurrentBid">
              <h3>Current Bid : </h3>
              <p>$ {data.minimun_bid}</p>
            </div>
            <div className="date">
              <p>
                <b>Ending On:</b> {data.endDate}
              </p>
            </div>
            <div className="bidPlace">
              <form onSubmit={add_Bid}>
                <button >-</button>
                <input
                  type="text"
                  className="value"
                  onChange={(e) => {
                    inputHandleAmount(e);
                  }}
                  name="amount"
                  placeholder="enter a Bid"
                  value={bid.amount}
                />
                <button onClick={()=>bid.amount+1}>+</button>
                <input className="btn" type="submit" value="Place Bid" />
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="commentNdes container">
      
 <div className="btnsSection">
  <button onClick={openDes}>Description</button>
  <button onClick={openReviews}>Reviews</button>
  <button onClick={openAuction}>History</button>
</div>
        
    {showDescription ? (
  <div className="des">
    <>
      {" "}
      <h2>{data.itemTittle}</h2> 
      <p>{data.description}</p>
    </>
  </div>
) : showReviews ? (
 <div className="reviewSec">
            <h3>Reviews</h3>
            <form onSubmit={addReview}>
              <textarea
                name="message"
                id=""
                onChange={inputHandle}
                value={reviews.message}
                placeholder="Write a reviews"
              ></textarea>
              <input className="btn" type="submit" value="submit" />
            </form>
            {fetchReview.length === 0 ? (
              <div className="noreview">
                <h3>there is no comments yet</h3>
              </div>
            ) : (
              <div className="reviewBox">
                <ul>
                  {fetchReview.map((r) => (
                    <li>
                      <div className="userName">{r.user_name}</div>
                      <div className="msaggae">{r.message}</div>
                      <div className="timeNDate">3 hours ago</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
) : openAuction ? (
<div className="container" id="Historytable">
<table>
  <thead>
    <tr>
      <th>Id</th>
      <th>User Name</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
  {fetchhistory.length===0?   <div className="noreview">
                <h3>there is no History yet</h3>
              </div>:
     fetchhistory.map((m,index)=>(
     <tr >
        <td>{index+1}</td>
        <td>{m.user_name}</td>
        <td>{m.amount}</td>
      </tr>
))
}
  </tbody>
</table>


</div>
) : null}

      </div>

      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
};

export default ProductData;
