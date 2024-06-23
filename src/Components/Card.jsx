// src/Card.js

import React from 'react';
import '../card.css'; // Import the CSS file for styling

const Card = ({ title, description, buttonText, buttonLink, mylogo, cardClass }) => {
  return (
    <div className={`card ${cardClass}`}>
      <div className="card-body">
        <h5 className="card-title">
          <span className='logo'>{mylogo}</span>{title}
        </h5>
        <p className="card-text">{description}</p>
     
      </div>
    </div>
  );
};

export default Card;
