import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; // Don't forget to import CSS

const Contact = () => {
  // State for form data
  var [data, SetData] = useState({
    name: "",
    email: "",
    msg: "",
  })

  // State for validation errors
  var [errors, SetError] = useState({
    name: "",
    email: "",
    msg: "",
  })

  // Input Change Handler
  var InputHandle = (e) => {
    SetData({ ...data, [e.target.name]: e.target.value })
    // Clear the error for the currently typing field
    SetError({ ...errors, [e.target.name]: "" });
  }

  // Validation function
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 1. Name Validation
    if (!data.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    } else if (data.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
      isValid = false;
    }

    // 2. Email Validation
    if (!data.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(data.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // 3. Message Validation
    if (!data.msg.trim()) {
      newErrors.msg = "Message is required.";
      isValid = false;
    } else if (data.msg.trim().length < 10) {
      newErrors.msg = "Message must be at least 10 characters long.";
      isValid = false;
    }

    SetError(newErrors);
    return isValid;
  }

  // Form Submission Handler
  function add_data(e) {
    e.preventDefault();

    if (!validateForm()) {
      // If validation fails, stop the submission and show errors
    
      return;
    }

    // If validation passes, proceed with API call
    axios.post(
      "http://localhost/auction_website/contact/add_contact.php",
      data,
      {
        headers: {
          // Note: "multipart/form-data" is typically used for file uploads. 
          // For simple form data (text), "application/x-www-form-urlencoded" 
          // or omitting the header and letting Axios/PHP default is often better, 
          // but I kept your original header.
          "Content-Type": "multipart/form-data",
        },
      }
    ).then(() => {
      // Success toast
      toast.success("Thank you for messaging us! We'll get back to you shortly.");
      
      // Clear the form and errors
      SetData({
        name: "",
        email: "",
        msg: "",
      });
      SetError({
        name: "",
        email: "",
        msg: "",
      });
    }).catch(error => {
        // Handle API errors
        console.error("Submission error:", error);
        toast.error("Failed to send message. Please try again.");
    });
  }

  return (
    <div>
      <Header />
      <section className="bannarSec">
        <div className="container">
          <h4>Contact us</h4>
        </div>
      </section>
      <div className="contactSec container">
        <div className="right-wrapper">
          <h2>Get touch in us</h2>
          <form onSubmit={add_data}>
            {/* Name Input */}
            <input 
              type="text" 
              placeholder='Name' 
              name='name' 
              onChange={InputHandle} 
              value={data.name} 
            />
            {errors.name && <p style={{ color: 'red', margin: '5px 0' }}>{errors.name}</p>}

            {/* Email Input */}
            <input 
              type="text" 
              placeholder='Email' 
              name='email' 
              onChange={InputHandle} 
              value={data.email} 
            />
            {errors.email && <p style={{ color: 'red', margin: '5px 0' }}>{errors.email}</p>}

            {/* Message Input */}
            <textarea 
              name="msg" 
              placeholder='Enter a message' 
              onChange={InputHandle} 
              value={data.msg} 
            ></textarea> 
            {errors.msg && <p style={{ color: 'red', margin: '5px 0' }}>{errors.msg}</p>}
            
            <input type="submit" value="Send" className='btn' />
          </form>
        </div>
           <div className="left-wrapper">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28954.505644095556!2d67.16784639999999!3d24.887296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339c72ec76665%3A0xec5d1d821453c988!2sJinnah%20International%20Airport!5e0!3m2!1sen!2s!4v1754385127239!5m2!1sen!2s"  style={{"border":0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Footer />
    </div>
  )
}

export default Contact