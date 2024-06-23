// src/Footer.js

import React from "react";
import "../footer.css";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { BsCcCircle } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footer-section">
        <h4>Hobbycue</h4>
        <ul>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Work with Us</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>How Do I</h4>
        <ul>
          <li>Sign Up</li>
          <li>Add a Listing</li>
          <li>Claim Listing</li>
          <li>Post a Query</li>
          <li>Add a Blog Post</li>
          <li>Other Queries</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li>Listings</li>
          <li>Blog Posts</li>
          <li>Shop / Store</li>
          <li>Community</li>
        </ul>
      </div>
      <div className="footer-section social-media">
        <h4>Social Media</h4>
        <div className="social-icons">
          <BsFacebook className="icon-logo-social" />
          <FaTwitter className="icon-logo-social" />
          <FaInstagram className="icon-logo-social" />
          <FaGoogle className="icon-logo-social" />
          <FaTelegramPlane className="icon-logo-social" />
          <FaEnvelope className="icon-logo-social" />
        </div>
        <div className="invite-friends"> 
          <h4>Invite Friends</h4>
          <div className="invite-form">
            <input type="email" placeholder="Email ID" />
            <button>Invite</button>
          </div>
        </div>
      </div>
    </div>
    <div className="last-footer">

<h5><span><BsCcCircle/></span> Purple Cues Private Limited</h5>
    </div>
    
    </>
  
  );
};

export default Footer;
