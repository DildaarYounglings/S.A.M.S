import React, { useRef } from 'react';
import { TopNav } from './TopNav';
import './Home.css';
import { NavLink } from 'react-router-dom';



export const Home = () => {
  const recipeElRef = useRef();
  const pancakeIngredientsEl = useRef();

  return (<>

    <section>
      <TopNav />
      <div className='home_header1'>

        <div className='home_header_left' style={{ marginRight: "auto" }}>
          <h1>Life is uncertain. Eat  first</h1>
          <p className="homeHeaderLeft_p3"> “ A recipe has no soul.<br />You as the cook must bring soul to the recipe”<br /><b>-Thomas Keller</b> </p>


         
        </div>
      </div>
      <img src="images/swirlyArrow.png" style={{ position: "relative", left: "27%", top: "5px" }}></img><br />
          <button className="homeHeaderLeft_Button" onClick={function () { recipeElRef.current.click() }}>Explore Recipes <NavLink ref={recipeElRef} to="/Recomendations" hidden /></button>

      <img src={`images/homeHeaderRight.png`} style={{ position: "relative", height: "100%", width: "45%", left: "54%", top: "-350px", }} alt='' />




      <div className='home_header2'>

        <div className='home_header_right'>
          <img src={`images/homeHeader2.png`} style={{ position: "relative", left: "20%", height: "80%", width: "100%", top: "-290px", }} alt='' />
        </div>

        <div className='home_header_left'>
          <h1 style={{ position: "relative", left: "-55%", top: "-290px", }}>Create your own Recipe</h1>
          <h3 className="homeHeaderLeft_H3" style={{ position: "relative", left: "-55%", top: "-250px", fontWeight:"400", }}>
            Using the ingredients you have we can help you<br /> make a meal<br /><br />Porem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Nunc vulputate libero et velit<br /> interdum, ac aliquet odio mattis.
          </h3>
        </div>
      </div>

      <div style={{ marginTop: "20vh", width: "fit-content" }}>
        <h1 style={{ position: "relative", top: "-280px", left: "7%" }}>Trending Recipes for the Month</h1>

        <div className="home_footer">
          <div className="homeFooter_div1">
            <div style={{ position: "relative", width: "auto", height: "auto" }} >
              <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "25%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
              <img src={`images/pancake.png`} alt='' style={{borderRadius:"10px",}} />
              <button onClick={()=> pancakeIngredientsEl.current.click()} style={{ width:"40%", height:"35px", position:"relative", top:"-50px", left:"5%", backgroundColor:"green", color:"white", }} >View ingredient<NavLink ref={pancakeIngredientsEl} to='/viewingredients' hidden /></button>
            </div>
            <div>
              <h2 className="homeHeaderLeft_h2">Pancake</h2>
              <div><img src={`images/gordonRamsy.png`} alt='' style={{position:"relative", top:"-55px",}} /><h4 style={{position:"relative",top:"-50px",left:"20%",fontSize:"20px",fontWeight:"400",}}>Gordon Ramsay</h4></div>
            </div>
          </div>

          <div className="homeFooter_div2">
            <div style={{ position: "relative", width: "auto", height: "auto" }} >
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "25%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
              <img src={`images/friedChickenAndRice.png`} alt='' style={{borderRadius:"10px",}} />
              <button style={{ width:"40%", height:"35px", position:"relative", top:"-50px", left:"5%", backgroundColor:"green", color:"white", }} >View ingredient</button>
            </div>
            <div>
              <h2 className="homeHeaderLeft_h2">Fried Chicken & Rice</h2>
              <div><img src={`images/pierreGagnaire.png`} alt='' style={{position:"relative", top:"-55px",}} /><h4 style={{position:"relative",top:"-50px",left:"20%",fontSize:"20px",fontWeight:"400",}}>Pierre Gagnaire</h4></div>
            </div>
          </div>

          <div className="homeFooter_div2">
            <div style={{ position: "relative", width: "auto", height: "auto" }} >
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "25%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
              <img src={`images/burger.png`} alt='' style={{borderRadius:"10px",}} />
              <button style={{ width:"40%", height:"35px", position:"relative", top:"-50px", left:"5%", backgroundColor:"green", color:"white", }} >View ingredient</button>
            </div>
            <div>
              <h2 className="homeHeaderLeft_h2">Fried Chicken & Rice</h2>
              <div><img src={`images/pierreGagnaire.png`} alt='' style={{position:"relative", top:"-55px",}} /><h4 style={{position:"relative",top:"-50px",left:"20%",fontSize:"20px",fontWeight:"400",}}>Pierre Gagnaire</h4></div>
            </div>
          </div>
        </div>
      </div>
    </section></>
    )
}
