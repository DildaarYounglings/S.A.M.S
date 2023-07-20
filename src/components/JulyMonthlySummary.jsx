import React from "react";

export const JulyMonthlySummary = ({dialogElRef}) => {
    const dialogueElRef = dialogElRef;
    const closeDialogueBox = function(){
      dialogElRef.current.close();
    }
  return (
    <React.Fragment>
      <dialog ref={dialogueElRef}  className="JulyMonthlySummary">
        <h1 onClick={() => closeDialogueBox() } style={{cursor:'pointer',translate:"20vw -3.9vh",width:'2.35rem',height:"fit-content",backgroundColor:'red',color:"white",border:'2px solid black'}}>X</h1>
        <ul
          className="container"
          style={{ listStyleType: "none", display: "flex" }}
        >
          <li>
            <svg
              className="BarGraphSVG_July"
              width="81"
              height="327"
              viewBox="0 0 81 327"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="80"
                height="327"
                transform="translate(0.5)"
                fill="white"
              />
              <rect x="10.5" width="60" height="281" rx="30" fill="#EDEDED" />
              <path
                d="M11 178H71V251C71 267.569 57.5685 281 41 281C24.4315 281 11 267.569 11 251V178Z"
                fill="#0057FF"
              />
              <path
                d="M30.4 299.55V311.8C30.4 313.5 29.9083 314.825 28.925 315.775C27.9417 316.708 26.625 317.175 24.975 317.175C23.3083 317.175 21.9583 316.692 20.925 315.725C19.9083 314.758 19.4 313.408 19.4 311.675H22.9C22.9167 312.425 23.0917 313.008 23.425 313.425C23.775 313.842 24.275 314.05 24.925 314.05C25.5583 314.05 26.0417 313.85 26.375 313.45C26.7083 313.05 26.875 312.5 26.875 311.8V299.55H30.4ZM37.9328 299.55V310.35C37.9328 311.533 38.2411 312.442 38.8578 313.075C39.4745 313.692 40.3411 314 41.4578 314C42.5911 314 43.4661 313.692 44.0828 313.075C44.6995 312.442 45.0078 311.533 45.0078 310.35V299.55H48.5328V310.325C48.5328 311.808 48.2078 313.067 47.5578 314.1C46.9245 315.117 46.0661 315.883 44.9828 316.4C43.9161 316.917 42.7245 317.175 41.4078 317.175C40.1078 317.175 38.9245 316.917 37.8578 316.4C36.8078 315.883 35.9745 315.117 35.3578 314.1C34.7411 313.067 34.4328 311.808 34.4328 310.325V299.55H37.9328ZM55.4145 314.225H61.1645V317H51.9145V299.55H55.4145V314.225Z"
                fill="black"
              />
            </svg>
          </li>
          <li>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <li>
                <h2>July Monthly Summary</h2>
              </li>
              <li>
                <p>
                  <span>New Users</span> <span>13</span>
                </p>
                <p>
                  <span>Total Requests</span> <span>3</span>
                </p>
                <p>
                  <span>Approved Requests Percentage</span> <span>87%</span>
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </dialog>
    </React.Fragment>
  );
};
