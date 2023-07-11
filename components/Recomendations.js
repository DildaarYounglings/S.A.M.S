import { TopNav } from "./TopNav";
//import "./categories.css";
import React from 'react';
export const Recomendations = () => {
  return (
    <React.Fragment>
      <style>
        {`
            .Dildaar-RecomendationsPage{
                display:flex;
                flex-direction: column;
                position:absolute;
                left:50%;
                top:13%;
                width:100%;
                height:fit-content;
                translate:-50% 0%;

            }
            `}
      </style>
      <TopNav />
      <section className="Dildaar-RecomendationsPage">
        <section style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <header> 
            <h1 style={{ translate: "100px", position:"relative", top:"50px", }}>Recomendations</h1>
          </header>

          <section style={{ display: "flex", flexDirection: "row", gap: "10rem", position:"relative",left:"-1%", top:"90px", }}>
            <section style={{ translate: "100px 0px", display: "flex", flexDirection: "column" }}>
              <img src="images/steakCategory.png" alt="Steak" />
              <button style={{ translate: "-30px 0px", width: "90px", height: "50px" }}>Steak</button>
            </section>

            <section style={{ translate: "100px 0px", display: "flex", flexDirection: "column" }}>
              <img src="images/noodlesCategory.png" alt="Steak" />
              <button style={{ translate: "-30px 0px", width: "90px", height: "50px" }}>Noodles</button>
            </section>

            <section style={{ translate: "100px 0px", display: "flex", flexDirection: "column" }}>
              <img src="images/coffeeCategory.png" alt="Steak" />
              <button style={{ translate: "-30px 0px", width: "90px", height: "50px" }}>Coffee</button>
            </section>

            <section style={{ translate: "100px 0px", display: "flex", flexDirection: "column" }}>
              <img src="images/steakCategory.png" alt="Steak" />
              <button style={{ translate: "-30px 0px", width: "90px", height: "50px" }}>Lasagna</button>
            </section>
          </section>
        </section>

        <h1 style={{ position: "relative", translate: "100px 0px", marginTop: "240px", marginBottom: "100px" }}>Popular Recipes</h1>
        <section style={{ display: "grid", gridTemplateColumns: "auto auto auto", position:"relative", left:"-7%", top:"-30px", }}>
          <div style={{ marginBottom: "100px", position: "relative", translate: "200px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10px",  height: "70%", width: "80%", }} src="images/taco.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "30%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ width:"40%", height:"35px", position:"relative", top:"190px", left:"5%", backgroundColor:"green", color:"white", }} >View ingredient</button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "250px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute",  borderRadius: "10px",  height: "70%", width: "80%", }} src="images/pancake.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "30%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{width:"40%", height:"35px", position:"relative", top:"190px", left:"5%",backgroundColor:"green",color:"white", }} >View ingredient</button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "300px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10px",  height: "70%", width: "80%", }} src="images/fishAndSalad.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "30%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{width:"40%", height:"35px", position:"relative", top:"190px", left:"5%",backgroundColor:"green",color:"white", }} >View ingredient</button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "200px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10px",  height: "70%", width: "80%", }} src="images/noodlesDish.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "30%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{width:"40%", height:"35px", position:"relative", top:"190px", left:"5%",backgroundColor:"green",color:"white", }} >View ingredient</button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "250px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10px",  height: "70%", width: "80%", }} src="images/krisztina-papp.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "30%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{width:"40%", height:"35px", position:"relative", top:"190px", left:"5%",backgroundColor:"green",color:"white", }} >View ingredient</button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "300px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10px",  height: "70%", width: "80%", }} src="images/soup.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "30%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{width:"40%", height:"35px", position:"relative", top:"190px", left:"5%",backgroundColor:"green",color:"white", }} >View ingredient</button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "200px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10px",  height: "70%", width: "80%", }} src="images/keesch.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "30%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{width:"40%", height:"35px", position:"relative", top:"190px", left:"5%",backgroundColor:"green",color:"white", }} >View ingredient</button>
          </div>
          
          <div style={{ marginBottom: "100px", position: "relative", translate: "250px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10px", height: "70%", width: "80%", }} src="images/eggAndSteak.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "30%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{width:"40%", height:"35px", position:"relative", top:"190px", left:"5%",backgroundColor:"green",color:"white", }} >View ingredient</button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "300px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10px",  height: "70%", width: "80%", }} src="images/giantMuffin.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "30%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{width:"40%", height:"35px", position:"relative", top:"190px", left:"5%",backgroundColor:"green",color:"white", }} >View ingredient</button>
          </div>
        </section>
      </section>
    </React.Fragment>
  )
}
