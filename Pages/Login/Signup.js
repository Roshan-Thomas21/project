import React from 'react'
import './Signup.css'
import {useState} from 'react'
function Signup() {
  const[fullname,setFullname]=useState('');
  const[username,setUsername]=useState('');
  const[email,setEmail]=useState('');

  
  
  return (
    <div>
      <div className="container">
        <div className="title">Sign Up</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  value={fullname}
                  onChange={(e)=>setFullname(e.target.value)}
                  placeholder="Enter your name"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input
                  type="text"
                  value={fullname}
                  onChange={(e)=>setUsername(e.target.value)}
                  placeholder="Enter a username"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="text"
                  placeholder="Enter your password"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="text"
                  placeholder="Confirm your password"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Sem</span>
                <input
                  type="text"
                  placeholder="Enter the sem"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Class</span>
                <input
                  type="text"
                  placeholder="Enter your class"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">DOB</span>
                <input type="text" placeholder="dd-mm-yyyy" required></input>
              </div>
              <div className="input-box">
                <span className="details">Admission no.</span>
                <input
                  type="text"
                  placeholder="Enter your admission no"
                  required
                ></input>
              </div>
              <div className="input-box">
                <input type="radio" name="gender" id="dot-1" />
                <input type="radio" name="gender" id="dot-2" />
                <input type="radio" name="gender" id="dot-3" />
                <input type="radio" name="gender" id="dot-4" />
                <span className="details">Role</span>
                <div className="category">
                  <label for="dot-1">
                    <span className="dot one"></span>
                    <span className="gender">Counsellor</span>
                  </label>
                  <label for="dot-2">
                    <span className="dot two"></span>
                    <span className="gender">HoD</span>
                  </label>
                  <label for="dot-3">
                    <span className="dot three"></span>
                    <span className="gender">Student</span>
                  </label>
                  <label for="dot-4">
                    <span className="dot four"></span>
                    <span className="gender">Teacher</span>
                  </label>
                </div>
              </div>
            </div>
            <form action="/action_page.php">
              <div className="input-box button">
                <input type="submit" value="Register"></input>
              </div>
            </form>
          </form>
          <div />
        </div>
      </div>
    </div>
  );
}
export default Signup