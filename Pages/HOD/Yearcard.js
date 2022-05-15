import React from 'react'
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./Yearcard.css"


function Yearcard() {
  return (
    <div className="yearcard_main">
      <Box 
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 3,
            width: 200,
            height: 80,
          },
        }}
      >
        <Paper className="yearcard" variant="outlined">
          <div>
            <h2>First Year</h2>
            <button className="yearbutton" type="button" onclick="default.asp">
              A
            </button>
            <button
              className="yearbutton"
              type="button"
              onclick="default.asp"
              style={{ marginLeft: "1cm" }}
            >
              B
            </button>
          </div>
        </Paper>
        <Paper className="yearcard" variant="outlined">
          <div>
            <h2>Second Year</h2>
            <button class="yearbutton" type="button" onclick="default.asp">
              A
            </button>
            <button
              className="yearbutton"
              type="button"
              onclick="default.asp"
              style={{ marginLeft: "1cm" }}
            >
              B
            </button>
          </div>
        </Paper>
        <Paper className="yearcard" variant="outlined">
          <div>
            <h2>Third Year</h2>
            <button className="yearbutton" type="button" onclick="default.asp">
              A
            </button>
            <button
              className="yearbutton"
              type="button"
              onclick="default.asp"
              style={{ marginLeft: "1cm" }}
            >
              B
            </button>
          </div>
        </Paper>
        <Paper className="yearcard" variant="outlined">
          <div>
            <h2>Fourth Year</h2>
            <button className="year_button" type="button" onclick="default.asp">
              A
            </button>
            <button
              className="yearbutton"
              type="button"
              onclick="default.asp"
              style={{ marginLeft: "1cm" }}
            >
              B
            </button>
          </div>
        </Paper>
      </Box>
    </div>
  );
}

export default Yearcard