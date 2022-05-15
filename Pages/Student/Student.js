import React from 'react'
import Navbar from './Navbar'
import Topbar from '../../components/Topbar/Topbar'
import { Outlet } from 'react-router-dom';
//import Attendance from "../../components/Graphs/Attendance/Attendance1";
//import Internal1 from '../../components/Graphs/Internal1/Internal1';
//import Internal2 from "../../components/Graphs/Internal2/Internal2";
//import Performance from '../../components/Graphs/Uniexam/Uniexam';

function Student() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
       <Outlet/>
      
    </div>
  );
}

export default Student