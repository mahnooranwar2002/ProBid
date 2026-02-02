import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { ReactSession } from "react-client-session";
import axios from 'axios';
import { Link } from 'react-router-dom';

const WinningProducts = () => {
    const username = ReactSession.get("username");
    
    var [WinAuction, SetAuction] = useState([]);
    
    // Total winning bid calculate karne ke liye
    // Initial value 0 set ki gayi hai
    const totalBidding = WinAuction.reduce((sum, currentItem) => {
        // currentItem.winningBid string ho sakta hai, isliye parseFloat use karen
        return sum + parseFloat(currentItem.winningBid || 0);
    }, 0); 

    var fetchAuction = () => {
        axios.get(`http://localhost/auction_website/user/WiningHistory.php?id=${username}`).then((resp) => {
            console.log(resp.data);
            // Ensure resp.data is an array before setting the state
            if (Array.isArray(resp.data)) {
                SetAuction(resp.data);
            } else {
                SetAuction([]); // Agar data array nahi hai toh empty array set karein
            }
        }).catch(error => {
            console.error("Error fetching winning auctions:", error);
            SetAuction([]);
        });
    }

    useEffect(() => {
        fetchAuction();
    
    }, [username]); 
    return (
        <div>
            <Header></Header>

            <section className="bannarSec">
                <div className="container">
                    <h4>Won Auctions</h4>
                </div>
            </section>

            {WinAuction.length === 0 ? (
                <div className="container" style={{ textAlign: 'center', padding: '20px' }}>
                    <h3>No winning auctions found.</h3>
                </div>
            ) : (
                <div className="container">
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Img</th>
                                <th>Winning Bidding</th>
                                <th>Winning Date</th>
                                <th>Status</th>
                               
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                WinAuction.map((m, index) => (
                                    <tr key={index}> 
                                        <td>{m.PName}</td>
                                        <td><img src={`/ProductImages/${m.pImage}`} alt={m.PName} width={100} /></td>
                                        <td>{m.winningBid}</td>
                                        <td>{m.wining_Date}</td>
                                        <td>{m.status === "0" ? ("Pending") : ("Released by Admin")}</td>
                                    
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    
                    {/* Total ko display karne wala div */}
                    <div className="container total-display">
                        <h3>Total Winning Bidding: ${totalBidding.toFixed(2)}</h3> 
                       <Link className='btn' to={"/user/paymentGetway"}>Claim Now</Link>
                    
                    </div>
                </div>
            )}
            
            <Footer></Footer>
        </div>
    );
}

export default WinningProducts;