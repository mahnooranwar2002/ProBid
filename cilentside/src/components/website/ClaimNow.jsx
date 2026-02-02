import React, { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";
import axios from "axios";
const ClaimNow = () => {
  const username = ReactSession.get("username");
  const [userData, setUserData] = useState({ name: "", email: "" });
  var [WinAuction, SetAuction] = useState([]);

  const totalBidding = WinAuction.reduce((sum, currentItem) => {
    return sum + parseFloat(currentItem.winningBid || 0);
  }, 0);

  var fetchAuction = () => {
    axios
      .get(
        `http://localhost/auction_website/user/WiningHistory.php?id=${username}`,
      )
      .then((resp) => {
        console.log(resp.data);

        if (Array.isArray(resp.data)) {
          SetAuction(resp.data);
        } else {
          SetAuction([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching winning auctions:", error);
        SetAuction([]);
      });
  };

  useEffect(() => {
    fetchAuction();
  }, [username]);

  useEffect(() => {
    if (username) {
      axios
        .get(
          `http://localhost/auction_website/user/fetchUSerdetails.php?id=${username}`,
        )
        .then((res) => {
          console.log(res.data);
          setUserData(res.data[0]);
        });
    }
  }, [username]);

  var [claim, setclaimData] = useState({
    u_name: "",
    email: "",
    address: "",
    products_Data: "",
    totalPrice: "",
    u_id: 0,
    price:""
  });
  var inputHAndleLogin = (e) => {
    setclaimData({ ...claim, [e.target.name]: e.target.value });
  };

  var claimedProducts = (e) => {
    e.preventDefault();
    claim.totalPrice = totalBidding;
    claim.u_id = username;
    claim.u_name = userData.name;
    claim.email = userData.email;
    var productName = WinAuction.map((qua) => qua.PName).join(",");
    var price = WinAuction.map((qua) => qua.winningBid).join(",");
    claim.products_Data = productName;
    claim.price=price;
    axios.post(
      "http://localhost/auction_website/user/claimproducts.php",
      claim,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );
  };

  return (
    <div className="checkout-layout">
      {/* Left: Input Details */}
      <section className="input-section">
        <div className="stepper-header">
          <h1>Shipping & Payment</h1>
        </div>

        <form className="main-form" onSubmit={claimedProducts}>
          <div className="grid-row">
            <input
              type="text "
              name="u_name"
              onChange={inputHAndleLogin}
              placeholder="First Name"
              value={userData.name}
              readOnly
              required
            />
            <input
              type="text"
              name="email"
              onChange={inputHAndleLogin}
              placeholder="Last Name"
              value={userData.email}
              required
              readOnly
            />
          </div>

          <div className="card-input-wrapper">
            <input
              type="text"
              placeholder="0000 0000 0000 0000"
              maxLength="19"
              required
            />
            <span className="card-type">VISA</span>
          </div>

          <div className="grid-row">
            <input type="text" placeholder="MM/YY" required />
            <input type="password" placeholder="CVV" maxLength="3" required />
          </div>
          <textarea
            name="address"
            id=""
            onChange={inputHAndleLogin}
            placeholder="Enter address here !"
          ></textarea>
          <button className="btn">Claim Now</button>
        </form>
      </section>

      {/* Right: Product Summary */}
      <aside className="summary-section">
        <h2>Your Order</h2>
        <div className="product-list">
          {WinAuction.map((item) => (
            <div key={item.id} className="product-item">
              <img
                width={50}
                src={`/ProductImages/${item.pImage}`}
                alt={item.PName}
              />
              <div className="product-info">
                <p className="product-name">{item.PName}</p>
                <p className="product-qty">Qty:1</p>
              </div>
              <span className="product-price">${item.winningBid}</span>
            </div>
          ))}
        </div>

        <hr />

        <div className="total-breakdown">
          <div className="total-row">
            <span>Subtotal</span>${totalBidding.toFixed(2)}
          </div>
          <div className="total-row main-total">
            <span>Total</span>${totalBidding.toFixed(2)}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ClaimNow;
