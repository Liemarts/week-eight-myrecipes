
import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4';
import icon from './icons8-search-48.png';
import MyRecipesComponents from './MyRecipesComponent';


function App() {

  const My_ID = "c8d93e51";
  const My_Key = "9562f3ea71e629b4d5d4467b479f047f";

  const [mySearch, setMySearch] = useState ("");
  const [myRecipes, setMyRecipes] = useState ([]);
  const [wordSubmitted, setWordSubmitted] = useState ("");



  useEffect (()=> {
    const getRecipe = async () => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${My_ID}&app_key=${My_Key}`);
      const data = await response.json();
      console.log (data.hits);
      setMyRecipes (data.hits);
    }
    getRecipe();
  },[wordSubmitted])

  const myRecipeSearch = (e) => {
    console.log (e.target.value);
    setMySearch (e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted (mySearch);
  }

  return (
    <div className='main'>

      <div className="App">
        <div className='container'>
          <video autoPlay muted loop>
          <source src={video} type='video/mp4'/>
          </video> 
          <h1>Find The Best Recipes</h1>
        </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Enter your ingredients...' onChange={myRecipeSearch} value={mySearch} />
        </form>
      </div>

      <div className='container'>
        <button onClick={finalSearch}>
          <img src={icon} alt='icon' width="30px" height="30px" />
        </button>
      </div>

      {myRecipes.map((element, index) => (
        <MyRecipesComponents key={index}
          label = {element.recipe.label}
          image = {element.recipe.image}
          mealType = {element.recipe.mealType}
          dietLabels = {element.recipe.dietLabels}
          calories = {element.recipe.calories}
          ingredients = {element.recipe.ingredientLines}
        />
      ))}
      
      </div>
    </div>
  );
}

export default App;
