import "./Form.css"

function Weak() {
return (
	<div>
       
  <table className="stud_weak">
  <tr colspan={5}><th><h2>Slow Learners</h2></th></tr>
  </table>
  <table className="stud_weak">
  <tr>
    <th rowSpan={2}>Roll No.</th>
    <th rowSpan={2}>Student Name</th>
  </tr>
  <tr></tr>
  
  
  <tr>
  	<th>2.</th>
    <td>Akshay Raj</td>
    
  </tr>
  <tr>
  	<th>4.</th>
    <td>Catherine Stephen</td>
    
  </tr>
  
    <tr>
  	<th>10.</th>
    <td>Listin Stephen</td>
    
  </tr>
  </table>

  </div>
);
}

export default Weak;
