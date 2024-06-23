import React from 'react';
import "../add.css"
import { IoMdAddCircle } from "react-icons/io";

const Addown = () => {
  return (
    <div className='total'>
    <div className="containers">
    <div className='all'>
    <div className="header">
   
      <IoMdAddCircle className='addlogo'/>
      <h5 className='head'>Add your own</h5>
      
    </div>
    <div className="content">
      <p>Are you a teacher or expert?bbycue? Do you sell or rent out equipment ,venue or tickets? or you are someone workshops
      should be on hobbcue?Go ahead Add your Own page </p>
      <button>Add New</button>
    </div>
    </div>
  </div>
  </div>
  );
};

export default Addown;