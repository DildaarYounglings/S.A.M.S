import React from "react";
import { Navigation } from "./MapView";
import {
  BellSVG,
  MapPicSVG,
  ProfilePicSVG,
  RequestsReviewChartSVG,
} from "./AllSvgs";

export const Dash = () => {
  return (
    <React.Fragment>
      <style>
        {`
            .Dash{
              background-color: white;
            }
            .Dash header{

            }
            .Dash section{
                display: flex; flex-direction: column;
            }
            .Dash section .RequestsReviewChart{
                width: min-content;
                margin: 30px auto;
                display: flex; flex-direction: row;
            }
            .Dash section .RequestsReviewChart .div1{
                gap: 30px;
                display: flex; flex-direction: row;
            }
            .Dash section .AreaTable{
                width: fit-content;
                padding: 10px; margin: 0px auto;
                display: flex; flex-direction: row;   
            }
            .Dash footer{
                display: flex; flex-direction: column;
            }
            .Dash footer .TopUsersList{
                width: fit-content;
                margin: 0px auto;
                display: flex; flex-direction: column;
            }
        `}
      </style>

      <div className="Dash">
        <header>
          <div>
            <div
              style={{
                display: "flex",
                marginLeft: "35%",
                marginRight: "auto",
              }}
            >
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
                <h1 style={{ textAlign: "left" }}>Western Cape Government</h1>
                <h3 style={{ translate: "0px -30px", color: "blue" }}>
                  City of Cape Town Metropolitan Municipality
                </h3>
              </div>
            </div>
          </div>
          <div className="NavigationContainer">
            <Navigation />
          </div>
        </header>
        <section>
          <div className="RequestsReviewChart">
            <RequestsReviewChartSVG />
            <div className="div1">
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  listStyleType: "none",
                }}
              >
                <li>Approved 14</li>
                <li>Declined 02</li>
                <li>Pending 08</li>
              </ul>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  listStyleType: "none",
                }}
              >
                <li>
                  <BellSVG />
                </li>
                <li>
                  <span>5</span>
                  <p>Alerts</p>
                </li>
              </ul>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0px",
                  listStyleType: "none",
                }}
              >
                <li>
                  <h3>High Request Areas</h3>
                </li>
                <li style={{ padding: "5px" }}>
                  <p
                    style={{
                      display: "flex",
                      gap: "85px",
                      paddingBottom: "10px",
                      borderBottom: "1px solid black",
                    }}
                  >
                    <span>Suburb</span>
                    <span s>Code</span>
                  </p>
                  <p style={{ display: "flex", gap: "85px" }}>
                    <span>Crossroads</span>
                    <span>7755</span>
                  </p>
                  <p style={{ display: "flex", gap: "85px" }}>
                    <span>Crossroads</span>
                    <span>7755</span>
                  </p>
                  <p style={{ color: "blue" }}>more</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="AreaTable">
            <MapPicSVG />
            <div>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "500px",
                  listStyleType: "none",
                }}
              >
                <li>
                  <p style={{ fontSize: "44px", fontWeight: "bold" }}>Areas</p>
                  <p style={{ fontSize: "18px" }}>Cape Town based suburbs</p>
                </li>
                <li>
                  <p
                    style={{
                      fontSize: "20px",
                      color: "blue",
                      height: "min-content",
                      width: "min-content",
                      borderBottom: "1px solid blue",
                    }}
                  >
                    more
                  </p>
                </li>
              </ul>
              <table>
                <thead style={{ width: "min-content", height: "min-content" }}>
                  <tr>
                    <th style={{ width: "100px" }}>Surburb</th>
                    <th style={{ width: "200px" }}>Street code</th>
                    <th style={{ width: "300px" }}>Requests Completed</th>
                    <th style={{ width: "300px" }}>Total Requests</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Surburb</td>
                    <td>Street code</td>
                    <td>Requests Completed</td>
                    <td>Total Requests</td>
                  </tr>
                  <tr>
                    <td>Surburb</td>
                    <td>Street code</td>
                    <td>Requests Completed</td>
                    <td>Total Requests</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <footer>
          <div className="TopUsersList">
            <p></p>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0px",
                listStyleType: "none",
              }}
            >
              <li>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "1px" }}
                >
                  <ProfilePicSVG />
                  <ul
                    style={{
                      listStyleType: "none",
                      display: "flex",
                      flexDirection: "row",
                      gap: "50rem",
                    }}
                  >
                    <li>
                      <p>S, Curry</p>
                    </li>
                    <li>
                      <button>Statistics</button>
                      <button>Visit Profile</button>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <ProfilePicSVG />
                  <ul
                    style={{
                      listStyleType: "none",
                      display: "flex",
                      flexDirection: "row",
                      gap: "50rem"
                    }}
                  >
                    <li>
                      <p>S, Curry</p>
                    </li>
                    <li>
                      <button>Statistics</button>
                      <button>Visit Profile</button>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <ProfilePicSVG />
                  <ul
                    style={{
                      listStyleType: "none",
                      display: "flex",
                      flexDirection: "row",
                      gap: "50rem"
                    }}
                  >
                    <li>
                      <p>S, Curry</p>
                    </li>
                    <li>
                      <button>Statistics</button>
                      <button>Visit Profile</button>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  <ProfilePicSVG />
                  <ul
                    style={{
                      listStyleType: "none",
                      display: "flex",
                      flexDirection: "row",
                      gap: "50rem"
                    }}
                  >
                    <li>
                      <p>S, Curry</p>
                    </li>
                    <li>
                      <button>Statistics</button>
                      <button>Visit Profile</button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};
