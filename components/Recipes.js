import { React, useRef } from 'react';
import { TopNav } from '../components/TopNav';
import './Recipes.css';
import { NavLink } from 'react-router-dom';

const API_KEY = "87b8614592b54548bb52129611a38c16";

//{API_KEY,query,setQuery,recipes,setRecipes,isDoneLoading,setIsDoneLoading}

export const Recipes = (props) => {
  //main variables
  //const API_URL_normal = `https://api.spoonacular.com/recipes/complexSearch?query=curry&apiKey=87b8614592b54548bb52129611a38c16`;
  //let ApiUrl_searchFeature =`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${75}&apiKey=${API_KEY}`
  const videoEl = useRef();

  const handleSearch = async (e) => {
    e.preventDefault(); videoEl.current.play(); props.setIsDoneLoading("loading");
    let myTimeout = setTimeout(() => {
      props.setIsDoneLoading("");
      clearTimeout(myTimeout);
    }, 2000);
    const recipeData = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${props.query}&number=9&apiKey=87b8614592b54548bb52129611a38c16`).then(response => response.json()).then(jsonData => jsonData.results);
    props.setRecipes(recipeData);
    props.setQuery("");
    console.log(recipeData);
  }
  return (<>
   
    <TopNav />
    <section className={`Recipes`}>
      <form style={{ marginBottom: "60px", border: "none" }} onSubmit={(e) => handleSearch(e)}>
        <input placeholder="Search recipe using the ingredients you have"
          className={`RecipeSearchBar`}
          type="text"
          value={props.query}
          onChange={(e) => { console.log(props.query); props.setQuery(e.target.value); }} style={{position:"relative",left:"17%",borderRadius:"10px", height:"50px", width:"60%",}} />
        <button style={{position:"relative", left:"10%",}} className={`RecipeSearchButton`} type="submit">Search</button>
      </form>
      <div style={{ position: "relative", left: "10%", translate: "100px 200px", top:"50px", }} className={`${(props.isDoneLoading === "loading") ? "LoadingScreen" : "DisplayNone"}`}>
        <video ref={videoEl} src={`loading.mp4`} loop="true" className={`${(props.isDoneLoading === "loading") ? "LoadingScreen" : "DisplayNone"}`} />
      </div>
      <div className={`RecipesContainer`}>
        <ul className={`RecipesList`}>
          {props.recipes && props.recipes.map((item) => (
            <li className={`RecipeListItem`} key={item.id}>
              <img className={`RecipeListImg`} src={item.image} alt={item.title} />
              <h3>{item.title}</h3><NavLink to={`/recipesMethods/${item.title}`} style={{ textDecoration: "none", color: "black" }}>Click to view Method</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <div class="btn-group">
                    <button style={{borderRight:"4px solid green",}}>Vegan</button>
                    <button style={{borderRight:"4px solid green",}}>coffee</button>
                    <button style={{borderRight:"4px solid green",}}>Vegetarian</button>
                    <button style={{borderRight:"4px solid green",}}>Breakfast</button>
                </div>

  </>)
}