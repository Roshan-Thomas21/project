import React from 'react';
import {Bar} from 'react-chartjs-2';
import './Internal2.css';

const state = {
  chartData: {
    labels: [
      "Subject 1",
      "Subject 2",
      "Subject 3",
      "Subject 4",
      "Subject 5",
      "Subject 6",
    ],
    datasets: [
      {
        label: "Internal 2",
        data: [45, 30, 38, 45, 40, 23, 0, 50],
        backgroundColor: [
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
        ],
      },
      
    ],
  },
};

export default function Internal2 ()
{
    return (
      
    <div className="I2-card I2-margin I2-margin-top I2-white">
      <div className="I2-container I2-white">
        <h4><b>Internal Assessment 2</b></h4>
      <div className="chart">
        <Bar
          data={state.chartData}
          options={{  }}
        />
      </div>
      </div>
      </div>
      
    );
  }



