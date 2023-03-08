import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import Recipe from './component/Recipe';
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  const APP_ID = "96d8cd87";
  const APP_KEY = "6c81fa93035416eddc641bd10eca5e56";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");  
  
  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
  }
 
  useEffect(() => {
    getRecipes();
  }, [query]);
  
   const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    const data = await response.json();
    setRecipes(data.hits);
   }
   return (

    <div className="App">
     <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path='/' element={<Home search={search} updateSearch={updateSearch} getSearch={getSearch} />}/>
      <Route path='login' element={<Login/>}/>

     </Routes>
     </BrowserRouter>
    

    {recipes.map(recipe => (
      <Recipe 
      title={recipe.recipe.label}
      image={recipe.recipe.image}/>
    ))}
    </div>
    );
  
}

export default App;
