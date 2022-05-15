import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Navbar from './Navbar'
import Yearcard from './Yearcard';
//import Attendance from '../../components/List/Attendance';
//import Internal from "../../components/List/Internal";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  NavLink,
  Outlet,
} from "react-router-dom";

function Hod() {
  return (
    <div className="hod">
      <Topbar />
      <Navbar />
      <Yearcard />
      <Outlet />
    </div>
  );
}

export default Hod