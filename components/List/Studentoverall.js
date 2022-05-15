import "./Form.css";

function Overall() {
  return (
    <div>
      <table className="single">
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
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <th></th>
          <th>SEM 1</th>
          <th>SEM 2</th>
          <th>SEM 3</th>
          <th>SEM 4</th>
          <th>SEM 5</th>
          <th>SEM 6</th>
        </tr>
        <tr></tr>
        <tr></tr>

        <tr>
          <th rowSpan={4}>1.</th>
          <th rowSpan={4}>Abhishek John</th>
          <td rowSpan={4}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td>Internal 1:</td>
          <td>24</td>
          <td>42</td>
          <td>21</td>
          <td>30</td>
          <td>34</td>
          <td>42</td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>SGPA:</td>
          <td>7.98</td>
          <td>8.02</td>
          <td>6.91</td>
          <td>7.56</td>
          <td>7.80</td>
          <td>7.85</td>
        </tr>
        <tr>
          <td>Internal 2:</td>

          <td>40</td>
          <td>27</td>
          <td>24</td>
          <td>38</td>
          <td>41</td>
          <td>41</td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>CGPA:</td>
          <td>7.98</td>
          <td>8.0</td>
          <td>7.63</td>
          <td>7.61</td>
          <td>7.65</td>
          <td>7.68</td>
        </tr>
      </table>
    </div>
  );
}

export default Overall;
