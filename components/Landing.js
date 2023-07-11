import React, { useState } from 'react';
import './Landing.css';
import { NavLink } from 'react-router-dom';
import logoshesha from './images/logoshesha.png';
import differentfood from './images/differentfood.png';
import landingimg1 from './images/landingimg1.png';
import landingimg2 from './images/landingimg2.png';
import landingimg3 from './images/landingimg3.png';

export const Landing = () => {
    return (<>
        <div className="page">
            <img src={logoshesha} alt="logoshesha.png" style={{ position: "absolute", left: "2%", height: "120px", }} />

            <img src={differentfood} alt="differentfood.png" style={{ position: "absolute", left: "49%", top: "90px", }} />
            <h2 className="heading2">"A recipe has no <br />soul, you as the<br />cook must bring soul<br />to the recipe“-<br /><b>Thomas Keller</b></h2>
            <NavLink to="/Register"><button type="button" className="button2">Sign Up</button></NavLink>

            <h1 className="heading1">Let's Starting Cooking with Popular Recipes</h1>
            <hr style={{position:"relative", top:"520px", height:"12px",}}></hr>
        </div>

        <img src={landingimg1} alt="landingimg1.png" style={{ position: "relative", left: "20%", top:"160px", borderRadius:"20px", boxShadow:"20px 20px 40px ", }} />
        <img src={landingimg2} alt="landingimg2.png" style={{ position: "relative", left: "50%", top:"160px", borderRadius:"20px", boxShadow:"20px 20px 40px ", }} />
        <img src={landingimg3} alt="landingimg3.png" style={{ position: "relative", left: "-5%", top:"290px", borderRadius:"20px", boxShadow:"20px 20px 40px ", }} />
        
    </>)
}
