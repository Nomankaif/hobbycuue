import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "../App.css"
import logo from "../Images/img_header_logo.png"
import { IoSearchOutline } from "react-icons/io5";
import { IoMdBookmark } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid  navclass">
  <img src={logo} alt="hobbycue" className="logo" />
  <div className="check">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <form className="search-form d-flex searchmy">
      <input className="form-control search-input" type="search" placeholder="Search here..." aria-label="Search" />
      <button className="btn search-btn" type="submit">
      <IoSearchOutline/>
      </button>
    </form>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto mb-2 mb-lg-0 navbar">
        <li class="nav-item">
        
          <a class="nav-link active " aria-current="page" href="#">
          <IoSearchOutline className="colors"/>
          <span className="hobies"> Explore</span>
          </a>
        </li>
     
        <li class="nav-item dropdown">
        <a class="nav-link active " aria-current="page" href="#">
          <IoStar className="colors"/>
            <span className="hobies"> Hobbies</span>
          </a>
         
        </li>
        <li class="nav-item">
          <a class="nav-link color" href="#" tabindex="-1" aria-disabled="true">
            <IoMdBookmark/>
          </a>
        </li><li class="nav-item">
          <a class="nav-link color" href="#" tabindex="-1" aria-disabled="true">
            <FaBell/>
          </a>
        </li><li class="nav-item">
          <a class="nav-link color" href="#" tabindex="-1" aria-disabled="true">
            <FaCartShopping/>
          </a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link active " aria-current="page" href="#">
         
          <button>Sign In</button>
          </a>
         
        </li>
        
        
      </ul>
     
    </div>
  </div>
</nav>
  );
}

export default Navbar;