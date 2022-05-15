import React from 'react';
import {Bar} from 'react-chartjs-2';
import './Internal1.css';

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
        label: "Internal 1",
        data: [45, 30, 41, 42, 40, 38, 0, 50],
        backgroundColor: [
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
          "rgba(22,98,208,0.6)",
        ],
      },
      {
        label: "Internal 2",
        data: [40, 35, 44, 37, 30, 36, 0, 46],
        backgroundColor: [
          "rgb(73,85,137)",
          "rgb(73,85,137)",
          "rgb(73,85,137))",
          "rgb(73,85,137)",
          "rgb(73,85,137)",
          "rgb(73,85,137)",
        ],
      },
    ],
  },
};

export default function Internal1()
{
    return (
     
    <div className="I1-card I1-margin I1-margin-top I1-white">
      <div className="I1-container I1-white">
        <h4><b>Internal Assessment</b></h4>
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
