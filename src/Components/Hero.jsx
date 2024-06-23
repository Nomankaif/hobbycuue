import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../hero.css'; // Custom styles
import hero from  "../Images/hero.png"

const SignInPage = () => {
  return (
    <div className="sign-in-container">
      <div className="info-section">
        <h1>Explore your <span className="highlight">hobby</span> or <span className="highlight">passion</span></h1>
        <p>
          Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, 
          classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or 
          performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities...
        </p>
        <p>
          If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, 
          services or events. Hop on your hobbyhorse and enjoy the ride.
        </p>
        <div className="illustrations">
          <img src={hero} alt="Illustration"/>
        </div>
      </div>
      <div className="sign-in-section">
        <h2>Sign In</h2>
        <h2>Join In</h2>
        <button className="btn social-btn mybtn">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRB4kg1jgnqD5fEaCSHKMoUdFeTBj9CH_opA&s" alt="Google Icon" className="google" /> <span className="mytext">Continue with Google</span>
        </button>
        <button className="btn social-btn mybtn">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNQrrEWZOh6sFs6_BLCHVqSBMzCFuNHijeA&s" alt="Facebook Icon"  className="google" /> <span className="mytext">Continue with Facebook</span>
        </button>
        <div className="separator">Or connect with</div>
        <form className="sign-in-form">
          <input type="email" placeholder="Email" className="form-control" />
          <div className="password-field">
            <input type="password" placeholder="Password" className="form-control" />
            <i className="bi bi-eye"></i>
          </div>
          <p className="password-strength">Password strength</p>
          <p className="terms">By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
          <button className="btn btn-primary agree-btn agree">Agree and Continue</button>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
