import React from 'react'
import Internal1 from '../../components/Graphs/Internal1/Internal1'
import "./Dashboard.css";
import Uniexam from '../../components/Graphs/Uniexam/Uniexam'
import Studentoverall from '../../components/List/Studentoverall'
function Performance() {
  return (
    <>
      
        <Studentoverall />
      
      <div className="dash_int">
        <Internal1 />
      </div>
      <div className="dash_uni">
        <Uniexam />
  </div> 
    </>
  );
}

export default Performance