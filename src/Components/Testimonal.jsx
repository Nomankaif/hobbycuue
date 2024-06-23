import React from "react";
import "../test.css";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import Avatar from "../Images/bharat.jpg"
import { MdMessage } from "react-icons/md";

const Testimonal = () => {
  return (
    <>
      <div className="testimonial-container">
        <div className="testimonial-content">
        <div className="logo-heading">
        <MdMessage className="mymssg"/>
        <h5>Testimonal</h5>
        </div>
          <div className="testimonial-quote">
            <p>
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city roof, is an excellent idea and I highly
              recommend it.
            </p>
          </div>
          <div className="testimonial-audio-player">
            <div className="real-audio">
            <div>
              <MdOutlinePlayCircleFilled className="btn-audio"/>
              </div>
              <div className="slider">
              <input type="range" className="audio-slider" />
              <span className="audio-time">0:00</span>
              </div>
              <div>
              <img
                  src={Avatar}
                  
                  className="user-avatar"
                />
                </div>

              </div>
              <div className="testimonial-user">
                <img
                  src={Avatar}
                  alt="Shubha Nagarajan"
                  className="user-avatar"
                />
              
              <div className="user-info">
                <span className="user-name">Shubha Nagarajan</span>
                <span className="user-title">Classical Dancer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonal;
