import React from 'react';
import {Line} from 'react-chartjs-2';
import './Uniexam.css'

const state = {
  chartData: {
    labels: ["S1", "S2", "S3", "S4", "S5", "S6"],
    datasets: [
      {
        label: "SGPA",
        data: [6.5, 7.3, 6.9, 8.7, 8.3, 9.0, 0],
        borderColor: "rgba(22,98,208,0.6)",
        fill: true,
        backgroundColor: "rgb(213,233,242)",
      },
    ],
  },
};


export default function Uniexam()
{
    return (
    
      <div className="P-card P-margin P-margin-top P-white">
      <div className="P-container P-white">
      <h4><b>Grade Report</b></h4>
      <div className="chart">
        <Line
          data={state.chartData}
          options={{ }}
        />
      </div>
      </div>
      </div>
      
      
      
    );
  }

