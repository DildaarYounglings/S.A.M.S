import React from "react";
import { Navigation } from "./MapView";
import {
  BarGraphSVG,
  FilterBtnSVG,
  SortBtnSVG,
  WorkProgressTrackerChart1,
  WorkProgressTrackerChart2,
  WorkProgressTrackerChart3,
  WorkProgressTrackerChart4,
} from "./AllSvgs";

export const WorkProgressTracker = () => {
  return (
    <React.Fragment>
      <style>
        {`
            .WorkProgressTracker{
                background-color: white
            }
            .WorkProgressTracker .header{
                display: flex;
                margin: 0px 35% 30px 35%;
            }
            .WorkProgressTracker .progressCharts{
                display: flex;
                margin: 0px 15.5%;
            }

            .WorkProgressTracker .monthlyTracker .barGraphs{
                margin: 0px 15.5%;
            }
        `}
      </style>
      <div className="WorkProgressTracker">
        <div className="header">
          <img
            style={{ height: "80px", width: "80px", translate: "0px 20px" }}
            src={
              "data:image/png;base64,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"
            }
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "30px",
            }}
          >
            <h1 style={{ textAlign: "left" }}>Work Progress Tracker</h1>
            <h3 style={{ translate: "0px -30px", color: "blue" }}>
              Location located within the Western Cape
            </h3>
          </div>
        </div>
        <div className="navigation">
          <Navigation />
        </div>
        <div className="progressCharts">
          <WorkProgressTrackerChart1 />
          <WorkProgressTrackerChart2 />
          <WorkProgressTrackerChart3 />
          <WorkProgressTrackerChart4 />
        </div>
        <div className="monthlyTracker">
          <h1 style={{ marginBottom: "30px" }}>Monthly Tracker</h1>
          <div style={{margin:"0px 20%",display:"flex",gap:"20px"}}>
            <button style={{height:"43px",width:"650px",borderRadius:"50px 0px 0px 50px"}}>
              <SortBtnSVG />
              <a>Sort</a>
            </button>
            <button style={{height:"43px",width:"650px",borderRadius:"0px 50px 50px 0px"}}>
              <FilterBtnSVG />
              <a>Filter</a>
            </button>
          </div>
          <div className="barGraphs" style={{ marginTop: "30px" }}>
            <BarGraphSVG />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
