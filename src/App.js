import { useEffect, useState} from 'react';
import './App.css';
import MyComponents from './MyComponents';

function App() {
  const MY_ID = "d2d1462e";
  const MY_KEY = "d451393d5d3ee53849a486b9cd36f808";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("flour")

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
      const data = await response.json();
      console.log(data.hits)
      setMyRecipes(data.hits)
    }
    getRecipe()
  },[wordSubmitted])

  const MyRecipeSearch = (e) => {
    console.log(e.target.value)
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }


  return (
    <div className='App'>

      <div className='container'>
        <h1>Find a recipe</h1>
      </div>

      <div className='container'>
      <form onSubmit={finalSearch}>
          <input className='search' onChange={MyRecipeSearch} value={mySearch}/>
        </form>
      </div>

      <div className='container'>
        <button onClick={finalSearch}>
          SEARCH
        </button>
      </div>
    

    {myRecipes.map((element, index) => (
      <MyComponents key={index}
      label={element.recipe.label}
      image={element.recipe.image}
      calories={element.recipe.calories}
      ingredients={element.recipe.ingredientLines}
      cuisine={element.recipe.cuisineType}
      health={element.recipe.healthLabels} />
    ))}
  </div>
  );
}

export default App;
