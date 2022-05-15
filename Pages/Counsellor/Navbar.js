import React from 'react'
import '../Navbar.css'
import DashboardIcon from "@mui/icons-material/Dashboard";
function Navbar() {
  return (
    <div className="Sidebar">
      <ul className="sidebarList">
        <li className="row">
          <div id="icon">
            <DashboardIcon />
          </div>
          <div id="title">Dashboard</div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar