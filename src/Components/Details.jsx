import React from 'react';
import '../details.css';
import main from "../Images/remove.png"

function Details() {
  return (
    <div className="container-details">
      <div className='heading-detailsjsx'>
        <h1>Your <span className='hobby'>Hobby</span> your <span className='community'> Community...</span></h1>
        <button className='btn-details'>Get Started</button>
      </div>
      <div>
        <img className='detail-image' src={main}/>
      </div>
    </div>
  );
}

export default Details;