import React from 'react'
import Attendance1 from '../../components/Graphs/Attendance/Attendance1'
import Attendance2 from '../../components/Graphs/Attendance/Attendance2'
import Attendance3 from '../../components/Graphs/Attendance/Attendance3'
import Attendance4 from '../../components/Graphs/Attendance/Attendance4'
import Attendance5 from '../../components/Graphs/Attendance/Attendance5'
import Attendance6 from '../../components/Graphs/Attendance/Attendance6'
import Studentattendance from '../../components/List/Studentattendance'
function Attendmain() {
  return (
    <div>
       <Studentattendance/>
        <Attendance1/>
        <Attendance2/>
        <Attendance3/>
        <Attendance4/>
        <Attendance5/>
        <Attendance6/>



    </div>
  )
}

export default Attendmain