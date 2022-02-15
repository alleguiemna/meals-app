import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.scss"

const Home = () => {
  const [searchMeal, setSearchMeal] = useState([])
  const [termSearch, setTermSearch] = useState("")
  const [error, setError] = useState("")

  const fetchMealsByName= async () => {
   const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${termSearch}`)
  .then(response => setSearchMeal(response.data.meals))
  .catch(error=>setError(error))
  }
  useEffect(() => {
    fetchMealsByName()
   }, [termSearch]);
  
  //  const handleClick = () =>
  //  {
  //   fetchMealsByName()
  //  }
  return <div className="home">
            <div className="home-search">
              <input type="text" placeholder="Enter a meal name please ..." onChange={(e) => setTermSearch(e.target.value)} value={termSearch} />
              <button onClick={fetchMealsByName}>Search Meal</button>
            </div>
            <div className="home-list">
              {searchMeal ? (searchMeal.map((search) => 
              <div key={search.idMeal} className="home-list-details">
                <img src={search.strMealThumb} alt=""/>
                <h4>{search.strMeal}</h4>
              </div>)):(
                <h2>No meals found! Try another word</h2>
              )}
            </div>
  </div>;
};

export default Home;
