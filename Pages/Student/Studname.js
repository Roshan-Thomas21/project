import React from 'react'
import "./Dashboard.css"
function Studname() {
  return (
    <div className="stud_details">
      <table
        cellpadding="20"
        width="60%"
        style={{
          fontSize: 20,
          borderWidth: "1px",
          borderColor: "#aaaaaa",
          borderStyle: "solid",
        }}
      >
        <tr>
          <th colspan="4" style={{ background: "#d3e3f7", padding: 10 }}>
            Student Details
          </th>
        </tr>
        <tr>
          <td>
            <b>Admission No:</b>
          </td>
          <td>
            <span>18/CS/108</span>{" "}
          </td>
          <td>
            <b>Student Name:</b>
          </td>
          <td>
            {" "}
            <span>AKASH BYJU</span>{" "}
          </td>
        </tr>

        <tr>
          <td>
            <b>Gender:</b>
          </td>
          <td>
            {" "}
            <span>Male</span>{" "}
          </td>
          <td>
            <b>Date of Birth:</b>
          </td>
          <td>
            {" "}
            <span>15/08/1999</span>{" "}
          </td>
        </tr>
        <tr>
          <td>
            <b>Date of Birth:</b>
          </td>
          <td>
            {" "}
            <span>15/08/1999</span>{" "}
          </td>
          <td>
            <b>Class:</b>{" "}
          </td>
          <td>
            <span>S8 CSE A</span>{" "}
          </td>
        </tr>

        <tr>
          <td>
            <b>Phone No:</b>
          </td>
          <td>
            {" "}
            <span>7025088620</span>{" "}
          </td>
          <td>
            <b>Address:</b>{" "}
          </td>
          <td>
            {" "}
            <span>Mahe, Kannur P.O., Kannur</span>{" "}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Studname;