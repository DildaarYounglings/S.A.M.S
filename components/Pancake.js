import React from 'react';
import { TopNav } from '../components/TopNav';
import MethodsPagePancake from "./images/recipeMethodsPagePancake.png";

export const Pancake = () => {
  return (
    <React.Fragment>
      <TopNav/>
        <section className="RecipeMethodsPage">
            <div className="RecipeMethodsHeader">
              <div className="RecipeMethodsHeaderLeft">
                <h1 style={{color:"green"}}>Ingredients</h1>
                <ul>
                  <li>1 cup all-purpose flour</li>
                  <li>2 tablespoons white sugar</li>
                  <li>2 teaspoons baking powder</li>
                  <li>1 teaspoon salt, or to taste</li>
                  <li>1 cup milk</li>
                  <li>2 tablespoons vegetable oil</li>
                  <li>1 egg, beaten</li>
                </ul>
              </div>
              <div className="RecipeMethodsHeaderRight">
                <img src={MethodsPagePancake} alt='p'/>
              </div>
            </div>
            <div className="RecipeMethods">
              <h1 style={{color:"green"}}>Step 1</h1>
              <p>Combine flour, sugar, baking powder, and salt in a large bowl.<br/>Make a well in the center, and pour in milk, oil, and egg. Mix<br/> until smooth.</p>
              <h1 style={{color:"green"}}>Step 2</h1>
              <p>Heat a lightly oiled griddle or frying pan over medium-high heat.<br/>Pour or scoop batter onto the griddle, using approximately 1/4 cup<br/>for each pancake; cook until bubbles form and the edges are dry, 1 to<br/>2 minutes. Flip and cook until browned on the other side. Repeat<br/>with remaining batter.</p>
              <h1 style={{color:"green"}}>Step 3</h1>
              <p>Serve hot and enjoy!</p>
            </div>
        </section>
    </React.Fragment>
  )
}