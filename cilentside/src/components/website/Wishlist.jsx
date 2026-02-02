import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { ReactSession } from "react-client-session";

const Wishlist = () => {
  const [wish, setWishData] = useState([]);
  const [userData, setUserData] = useState({});
  const username = ReactSession.get("username");

  useEffect(() => {
    if (username) {
      axios
        .get(
          `http://localhost/auction_website/user/fetchUSerdetails.php?id=${username}`
        )
        .then((res) => {
          console.log(res.data);
          setUserData(res.data[0]);
        });
    }
  }, [username]);

  function getWishlistdat(){
        if (userData.id) {
      axios
        .get(
          `http://localhost/auction_website/Wishlist/UserWishlist.php?user_id=${userData.id}`
        )
        .then((res) => {
          console.log(res.data);
          setWishData(res.data);
        });
    }
  }
  useEffect(() => {
getWishlistdat()
  });

  const del_item = (id) => {
    axios.delete(
      `http://localhost/auction_website/Wishlist/DeleteWishlistItem.php?id=${id}`
    ).then(() => {
      // Refresh the wishlist after deletion
    getWishlistdat()
    });
  };

  return (
    <div>
      <Header />
      <section className="bannarSec">
        <div className="container">
          <h4>My Wishlist</h4>
        </div>
      </section>
      <div className="container">
        {wish.length===0?(
           <div className="container" id="errorBox"><h2>You did not have any item in wishlist</h2></div>
        ):(
        <table className="wishlist-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wish.map((w) => (
              <tr key={w.id}>
                <td>{w.p_name}</td>
                <td>
                  <img
                    src={`/ProductImages/${w.img}`}
                    alt={w.p_name}
                    width={80}
                    height={80}
                  />
                </td>
                <td>
                  <button
                    onClick={() => del_item(w.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
