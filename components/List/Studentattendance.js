import "./Form.css"

function Studentattendance() {
return (
  <div>
    <table className="single_attendance">
      <th>% Attendence for Each Subject</th>
    </table>

    <table className="single_attendance">
      <tr>
        <th>Roll No.</th>
        <th>Student Name</th>
        <th></th>

        <th></th>
        <th>CS402</th>
        <th>CS404</th>
        <th>CS406</th>
        <th>CS408</th>
        <th>CS462</th>
        <th>CS472</th>
      </tr>
      <tr></tr>
      <tr></tr>

      <tr>
        <th rowSpan={4}>1.</th>
        <th rowSpan={4}>Abhishek John</th>
        <td rowSpan={4}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </td>
        <td></td>

        <td>76%</td>
        <td>62%</td>
        <td>81%</td>
        <td>90%</td>
        <td>84%</td>
        <td>92%</td>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      </tr>
      <tr></tr>
    </table>
  </div>
);
}

export default Studentattendance;
