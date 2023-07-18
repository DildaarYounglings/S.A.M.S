import React, { useEffect, useRef, useState } from "react";
import { Navigation } from "./MapView";
import { BackBtnSVG, RoadAndTransportationSVG, UserIcon_SVG } from "./AllSvgs";
import * as d3 from "d3";
import { Link, useNavigate } from "react-router-dom";

export const BakovenRequestCardSettings = function () {
  const redirectTo = useNavigate();
  const navigateBack = function(){
    if(window.confirm("Are you sure you wish to go back with out saving your content")){redirectTo('/areasBakoven')}
  }
  return (
    <React.Fragment>
      <div className="BakovenRequestCardSettings">
        <header>
          <div className="header">
            <img
              alt=""
              src="data:image/png;base64,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"
            />
            <p>
              <h1 style={{ textAlign: "left" }}>Bakoven</h1>
              <h3 style={{ textAlign: "left", color: "blue" }}>
                Coordinates: 33.963&deg;S 18.382&deg;E
              </h3>
            </p>
          </div>
          <div className="buttonContainer">
            <button onClick={ () => navigateBack() }>
              <BackBtnSVG />
              <span> back</span>
            </button>
          </div>
        </header>
        <section>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <li>
              <div>
                <ul
                  style={{
                    listStyleType: "none",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <li>
                    <RoadAndTransportationSVG />
                  </li>
                  <li>
                    <p style={{ fontSize: "43px", fontWeight: "bold" }}>
                      Road And Transportation
                    </p>
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      14:20:13 Tue Jun 20 2023
                    </p>
                    <p style={{ fontSize: "23px" }}>
                      lorem ipsum dolor, lorem ipsum dolor,lorem ipsum
                      dolor,lorem ipsum dolor,lorem ipsum dolorlorem ipsum dolor
                    </p>
                  </li>
                  <li>
                    <p>
                      <button style={{ width: "748px", height: "52px" }}>
                        Edit Request Post
                      </button>
                    </p>
                    <p>
                      <button style={{ width: "748px", height: "52px" }}>
                        Revert Status
                      </button>
                    </p>
                    <p>
                      <button style={{ width: "748px", height: "52px" }}>
                        Delete Drom Dabase
                      </button>
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <ul
                  style={{
                    listStyleType: "none",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <li className="ApprovedRequestContainer">
                    <div className="ApprovedRequestItems">
                      <div>
                        <RoadAndTransportationSVG />
                        <span
                          style={{
                            color: "blue",
                            fontWeight: "bold",
                            fontSize: "25px",
                          }}
                        >
                          Road And Transportation
                        </span>
                        <p style={{ fontSize: "17px", opacity: "0.65" }}>
                          14:20:13 Tue Jun 20 2023
                        </p>
                        <p style={{ fontSize: "17px" }}>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Velit minima alias earum ratione voluptas a
                          recusandae culpa, necessitatibus facere asperiores
                          deserunt qui rem labore eligendi aliquam aut
                          cupiditate pariatur reprehenderit.
                        </p>
                        <button
                          style={{
                            height: "46px",
                            width: "315px",
                            backgroundColor: "#228B22",
                          }}
                        >
                          Approved
                        </button>
                        <button className="button">
                          <img
                            src="SAMS-MapView-Page-svgs/navigation/plugsBtn.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                    <div className="ApprovedRequestItems">
                      <div>
                        <RoadAndTransportationSVG />
                        <span
                          style={{
                            color: "blue",
                            fontWeight: "bold",
                            fontSize: "25px",
                          }}
                        >
                          Road And Transportation
                        </span>
                        <p style={{ fontSize: "17px", opacity: "0.65" }}>
                          14:20:13 Tue Jun 20 2023
                        </p>
                        <p style={{ fontSize: "17px" }}>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Velit minima alias earum ratione voluptas a
                          recusandae culpa, necessitatibus facere asperiores
                          deserunt qui rem labore eligendi aliquam aut
                          cupiditate pariatur reprehenderit.
                        </p>
                        <button
                          style={{
                            height: "46px",
                            width: "315px",
                            backgroundColor: "#228B22",
                          }}
                        >
                          Approved
                        </button>
                        <button className="button">
                          <img
                            src="SAMS-MapView-Page-svgs/navigation/plugsBtn.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>

                    <div className="ApprovedRequestItems">
                      <div>
                        <RoadAndTransportationSVG />
                        <span
                          style={{
                            color: "blue",
                            fontWeight: "bold",
                            fontSize: "25px",
                          }}
                        >
                          Road And Transportation
                        </span>
                        <p style={{ fontSize: "17px", opacity: "0.65" }}>
                          14:20:13 Tue Jun 20 2023
                        </p>
                        <p style={{ fontSize: "17px" }}>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Velit minima alias earum ratione voluptas a
                          recusandae culpa, necessitatibus facere asperiores
                          deserunt qui rem labore eligendi aliquam aut
                          cupiditate pariatur reprehenderit.
                        </p>
                        <button
                          style={{
                            height: "46px",
                            width: "315px",
                            backgroundColor: "#228B22",
                          }}
                        >
                          Approved
                        </button>
                        <button className="button">
                          <img
                            src="SAMS-MapView-Page-svgs/navigation/plugsBtn.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
        <footer>
          <div className="footer">
            <ul>
              <li><UserIcon_SVG/></li>
              <li><p style={{maxWidth:"fit-content",borderRight:"1px solid black",paddingRight:"10px"}}>Ja Morant</p></li>
              <li><p>Memeber since Jun 2023</p></li>
            </ul>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};
export const Bakoven = () => {
  const redirectTo = useNavigate();
  const linkRef = useRef();
  const navigateToSettings = function(){
    if(window.confirm("Are you sure that you wish to edit this items settings")){
      redirectTo('/areasBakovenRequestCardSettings');
    }
  }
  return (
    <React.Fragment>
      <div className="Bakoven">
        <div className="header">
          <img
            alt=""
            src="data:image/png;base64,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"
          />
          <div>
            <h1>Bakoven</h1>
            <h3>Coordinates: 33.963&deg;S 18.382&deg;E</h3>
          </div>
        </div>

        <div className="NavigationContainer">
          <Navigation />
        </div>

        <div className="buttonContainer">
          <button onClick={() => linkRef.current.click()}>
            <BackBtnSVG />
            <span style={{minHeight:'fit-content',minWidth:'fit-content'}}><Link style={{all:'unset'}} ref={linkRef} to={'/areas'}>back</Link></span>
          </button>
        </div>
        <div className="body">
          <section className="section1">
            <span className="span1">
              4 <p>Request</p>
            </span>
            <span className="span2">
              4 <p>Approved</p>
            </span>
            <span className="span3">
              0 <p>Denied</p>
            </span>
            <span className="span4">
              0 <p>Pending</p>
            </span>
          </section>
          <section className="section2">
            <h1 style={{ margin: "0px", translate: "-600px 0px" }}>
              Pending Requests
            </h1>
            <div>
              <h4>No New Request</h4>
            </div>
            <h1 style={{ margin: "0px", translate: "-600px 0px" }}>
              Approved Request
            </h1>
            <div className="ApprovedRequestContainer">
              <div className="ApprovedRequestItems">
                <div>
                  <RoadAndTransportationSVG />
                  <span className="ApprovedRequestItems_span"
                  >
                    Road And Transportation
                  </span>
                  <p className='pTagWithDate'>
                    14:20:13 Tue Jun 20 2023
                  </p>
                  <p className='pTagWithDetails'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit minima alias earum ratione voluptas a recusandae
                    culpa, necessitatibus facere asperiores deserunt qui rem
                    labore eligendi aliquam aut cupiditate pariatur
                    reprehenderit.
                  </p>
                  <button
                    style={{
                      height: "46px",
                      width: "315px",
                      backgroundColor: "#228B22",
                    }}
                  >
                    Approved
                  </button>
                  <button className="button" onClick={ () => navigateToSettings() }>
                    <img
                      src="SAMS-MapView-Page-svgs/navigation/plugsBtn.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <div className="ApprovedRequestItems">
                <div>
                  <RoadAndTransportationSVG />
                  <span className="ApprovedRequestItems_span"
                  >
                    Road And Transportation
                  </span>
                  <p className='pTagWithDate'>
                    14:20:13 Tue Jun 20 2023
                  </p>
                  <p className='pTagWithDetails'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit minima alias earum ratione voluptas a recusandae
                    culpa, necessitatibus facere asperiores deserunt qui rem
                    labore eligendi aliquam aut cupiditate pariatur
                    reprehenderit.
                  </p>
                  <button
                    style={{
                      height: "46px",
                      width: "315px",
                      backgroundColor: "#228B22",
                    }}
                  >
                    Approved
                  </button>
                  <button className="button" onClick={ () => navigateToSettings() }>
                    <img
                      src="SAMS-MapView-Page-svgs/navigation/plugsBtn.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <div className="ApprovedRequestItems">
                <div>
                  <RoadAndTransportationSVG />
                  <span className="ApprovedRequestItems_span"
                  >
                    Road And Transportation
                  </span>
                  <p className='pTagWithDate'>
                    14:20:13 Tue Jun 20 2023
                  </p>
                  <p className='pTagWithDetails'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit minima alias earum ratione voluptas a recusandae
                    culpa, necessitatibus facere asperiores deserunt qui rem
                    labore eligendi aliquam aut cupiditate pariatur
                    reprehenderit.
                  </p>
                  <button
                    style={{
                      height: "46px",
                      width: "315px",
                      backgroundColor: "#228B22",
                    }}
                  >
                    Approved
                  </button>
                  <button className="button" onClick={ () => navigateToSettings() }>
                    <img
                      src="SAMS-MapView-Page-svgs/navigation/plugsBtn.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <div className="ApprovedRequestItems">
                <div>
                  <RoadAndTransportationSVG />
                  <span className="ApprovedRequestItems_span"
                  >
                    Road And Transportation
                  </span>
                  <p className='pTagWithDate'>
                    14:20:13 Tue Jun 20 2023
                  </p>
                  <p className='pTagWithDetails'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit minima alias earum ratione voluptas a recusandae
                    culpa, necessitatibus facere asperiores deserunt qui rem
                    labore eligendi aliquam aut cupiditate pariatur
                    reprehenderit.
                  </p>
                  <button
                    style={{
                      height: "46px",
                      width: "315px",
                      backgroundColor: "#228B22",
                    }}
                  >
                    Approved
                  </button>
                  <button className="button" onClick={ () => navigateToSettings() }>
                    <img
                      src="SAMS-MapView-Page-svgs/navigation/plugsBtn.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <div className="ApprovedRequestItems">
                <div>
                  <RoadAndTransportationSVG />
                  <span className="ApprovedRequestItems_span"
                  >
                    Road And Transportation
                  </span>
                  <p className='pTagWithDate'>
                    14:20:13 Tue Jun 20 2023
                  </p>
                  <p className='pTagWithDetails'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit minima alias earum ratione voluptas a recusandae
                    culpa, necessitatibus facere asperiores deserunt qui rem
                    labore eligendi aliquam aut cupiditate pariatur
                    reprehenderit.
                  </p>
                  <button
                    style={{
                      height: "46px",
                      width: "315px",
                      backgroundColor: "#228B22",
                    }}
                  >
                    Approved
                  </button>
                  <button className="button" onClick={ () => navigateToSettings() }>
                    <img
                      src="SAMS-MapView-Page-svgs/navigation/plugsBtn.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export function ViewBakovenRequestItem() {
  return (
    <React.Fragment>
      <div>
        <header className="header">
          <img
            alt=""
            src="data:image/png;base64,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"
          />
          <div>
            <h1>Bakoven</h1>
            <h3>Coordinates: 33.963&deg;S 18.382&deg;E</h3>
          </div>
          <div className="buttonContainer">
            <button>
              <BackBtnSVG />
              <span> back</span>
            </button>
          </div>
        </header>
        <section></section>
        <footer></footer>
      </div>
    </React.Fragment>
  );
}
export function D3SVG_dynamicChartTest() {
  // 1] Setup Initial data and settings    -----------//

  const initialData = [
    { name: "January", value: 10 },
    { name: "February", value: 3 },
    { name: "March", value: 12 },
    { name: "April", value: 7 },
    { name: "May", value: 7 },
    { name: "June", value: 7 },
    { name: "July", value: 7 },
    { name: "August", value: 7 },
    { name: "September", value: 7 },
    { name: "October", value: 7 },
    { name: "November", value: 7 },
    { name: "December", value: 7 },
  ];
  const width = 500;
  const height = 150;
  const padding = 20;
  const maxValue = 20; // to the left is the Max data value

  const [chartdata, setChartdata] = useState(initialData);
  const svgRef = useRef();
  // 2] Setup random data generator and SVG canvas    ----------//

  const newData = function () {
    const d = chartdata.map(function (d) {
      d.value = Math.floor(Math.random() * (maxValue + 1));
      return d;
    });
    return d;
  };
  // 3] Setup functions for Scales    --------------------------//
  useEffect(() => {
    //X-scales
    const xScale = d3
      .scalePoint()
      .domain(chartdata.map((d) => d.name))
      .range([0 + padding, width - padding]);
    console.log("start - end", xScale("January"), xScale("December"));
    //Y-scales
    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(chartdata, function (d) {
          return d.value;
        }),
      ])
      .range([height - padding, 0 + padding]);
    console.log("start - end", yScale(10), yScale(0));
    // 4] Setup functions to draw lines    -----------------------//
    const line = d3
      .line()
      .x((d) => xScale(d.name))
      .y((d) => yScale(d.value))
      .curve(d3.curveMonotoneX);
    console.log("chart draw commands", line(chartdata));
    // 5] Draw line    -------------------------------------------//
    d3.select(svgRef.current)
      .select("path")
      .attr("d", (value) => line(chartdata))
      .attr("fill", "none")
      .attr("stroke", "blue");
    // 6] Setup functions to draw 'X' and 'Y' Axes    ------------//
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    // 7] Draw X and Y axes   ------------------------------------//
    d3.select("#xaxis").remove();
    d3.select(svgRef.current)
      .append("g")
      .attr("transform", `translate(0,${height - padding})`)
      .attr("id", "xaxis")
      .call(xAxis);
    d3.select("#yaxis").remove();
    d3.select(svgRef.current)
      .append("g")
      .attr("transform", `translate(${padding},0)`)
      .attr("id", "yaxis")
      .call(yAxis);
  }, [chartdata]);

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "white" }}>
        <h1>Progress Tracker</h1>
        <svg
          ref={svgRef}
          style={{ backgroundColor: "white" }}
          id="chart"
          viewBox="0 0 500 150"
        >
          <desc>Hello</desc>
          <path d="" fill="white" stroke="blue" strokeWidth="5" />
        </svg>
        <p>
          <button type="button" onClick={() => setChartdata(newData())}>
            click to randomize data
          </button>
        </p>
      </div>
    </React.Fragment>
  );
}
export const DynamicBarChart_SVG = function () {
  const initialData = [
    { id: "d1", value: 10, region: "USA" },
    { id: "d2", value: 11, region: "India" },
    { id: "d3", value: 12, region: "China" },
    { id: "d4", value: 13, region: "Germany" },
  ];

  const svgRef = useRef();
  const [chartData, setChartdata] = useState(initialData);

  function handleCreateChart() {
    // setting up svg container
    const w = 400;
    const h = 300;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible")
      .style("margin-top", "75px");
    // setting the scaling
    const xScale = d3
      .scaleBand()
      .domain(chartData.map((val, i) => i))
      .range([0, w])
      .padding(0.5);
    const yScale = d3.scaleLinear().domain([0, h]).range(h, 0);
    // setting the axes
    const xAxis = d3.axisBottom(xScale).ticks(chartData.length);
    const yAxis = d3.axisLeft(yScale).ticks(5);
    svg.append("g").call(xAxis).attr("transform", `translate(0 , ${h})`);
    svg.append("g").call(yAxis);
    // setting t svg data
    svg
      .selectAll(".svgRef_bars")
      .data(chartData)
      .join("rect")
      .attr("x", (v, i) => xScale(i))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      .attr("height", (val) => h - yScale(val));
  }
  useEffect(() => {
    handleCreateChart();
  }, [chartData]);
  return (
    <React.Fragment>
      <style>
        {`
            .svgRef_container{
              width:250px;
              height:200px;
              border:1px solid blue;
            }
            .svgRef_bars{
              fill: #720570;
            }
        `}
      </style>
      <div>
        <svg ref={svgRef}></svg>
      </div>
    </React.Fragment>
  );
};
