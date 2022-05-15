import React from 'react'
import Navbar from './Navbar'
import Topbar from '../../components/Topbar/Topbar'
import CardStudent from '../../components/Card/CardStudent';

function Counsellor() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <CardStudent />
    </div>
  );
}

export default Counsellor