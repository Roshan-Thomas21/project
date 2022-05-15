import './Button.css'
import React from 'react'
function Button() {
  return (
    <div>
        <div className='buttons'>
            <div>
                <button className="button1" type="button">Students</button>
            </div>
            <div>
                <button className="button1" type="button">Bright Students</button>
            </div>
            <div>
                <button className="button1" type="button">Weak Students</button>
            </div>
            <div>
                <button className="button1" type="button">Attendance</button>
            </div>
        </div>
        <div className="list"><h1></h1></div>
    </div>
  );
}

export default Button;