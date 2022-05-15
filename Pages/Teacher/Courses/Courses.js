import React from 'react'
import "./Courses.css"

function Courses() {
  return (
   <div className="main-container">
      
      <div className="cardcourse card-1">
        <h4 className="cardcourse_title">CS 400</h4>
        <h2 className="cardcourse__title">Principle of Information Security</h2>
      </div>

      <div className="cardcourse card-2">
        <h4 className="cardcourse_title">CS 306</h4>
        <h2 className="cardcourse__title">Software Engineering Project Management</h2>
      </div>

      <div className="cardcourse card-3">
        <h4 className="cardcourse_title">CS 405</h4>
        <h2 className="cardcourse__title">Computer System Architecture</h2>
      </div>
       </div> 
    
  );
}

export default Courses