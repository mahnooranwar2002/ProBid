import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import { ReactSession } from "react-client-session";


const Myclaim = () => {
    var [data, SetData] = useState([]);
    const username = ReactSession.get("username");

    useEffect(() => {
        axios.get(`http://localhost/auction_website/user/fetchclaimByuser.php?u_id=${username}`)
        .then((resp) => {
            // Check karein ki data array hai ya nahi
            SetData(resp.data); 
        }).catch(err => console.log("Error fetching claims:", err));
    }, [username]); // Dependency added to prevent infinite loop

    return (
        <div className="page-wrapper">
            <Header />
            
            <section className="bannarSec">
                <div className="container">
                    <h4>My Claims</h4>
                </div>
            </section>

            <div className="container claim-grid-container">
                {data.length === 0 ? (
                    <div className="no-data-card">
                        <p>there is no claim yet !.</p>
                    </div>
                ) : (
                    <div className="claim-grid">
                        {data.map((item, index) => (
                            <div className="claim-card" key={index}>
                               
                                <div className="claim-info">
                                    <h3>Claims Products</h3>
                                    <p className="claim-status">Status: <span>{item.status || 'Pending'}</span></p>
                                    <hr />
                                    <div className="details">
                                        <p><strong>Product Name:</strong> {item.products_Data}</p>
                                         <p><strong>Product Price:</strong> {item.price}</p>
                                        <p className='abcccc'>Total:<strong> $ {item.totalPrice}</strong> </p>
                                    </div>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    )
}

export default Myclaim;