import React from 'react';
import Card from './Card';
import '../card.css'; 
import { IoIosPeople } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { FaBagShopping } from 'react-icons/fa6';
import { PiNotebookFill } from 'react-icons/pi';

const Facility = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Card 
            mylogo={<IoIosPeople className="people" />}
            title="People"
            description="Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator."
          
            cardClass="card-people"
          />
        </div>
        <div className="col-md-6">
          <Card
            mylogo={<FaLocationDot className="location" />}
            title="Place"
            description="Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue."
          
            cardClass="card-place"
          />
        </div>
      </div>
      <div className="row second">
        <div className="col-md-6">
          <Card
            mylogo={<FaBagShopping className="shop" />}
            title="Product"
            description="Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members."
           
            cardClass="card-product"
          />
        </div>
        <div className="col-md-6">
          <Card
            mylogo={<PiNotebookFill className="note" />}
            title="Program"
            description="Find events, meetups and workshops related to your hobby. Register or buy tickets online."
           
            cardClass="card-program"
          />
        </div>
      </div>
    </div>
  );
}

export default Facility;
