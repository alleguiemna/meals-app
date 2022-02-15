import axios from "axios";
import { useEffect, useState } from "react";
import "./RandomMeals.scss"

const RandomMeals = () => {
  const [randomMeal, setRandomMeal] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
 
  const fetchRandomMeals = async () => {
    const response = await axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        setRandomMeal(response.data.meals);
        setLoading(false);
      })
      .catch((error) => setError(error));
  };

  useEffect(() => {
    fetchRandomMeals();
  }, []);
  //loading
  if (loading) {
    return <h1>Loading ...</h1>;
  }
  const handleClick = () =>{
    fetchRandomMeals()
  }
  return (
    <div className="random">
      {randomMeal.map((meal) => (
        <div key={meal.idMeal} className="random-details">
         <div className="random-details-controls">
         <img src={meal.strMealThumb} alt="" />
          <button onClick={handleClick}>Generate another meal</button> 
         </div>
          <div className="random-details-instructions">
          <h4>Instructions</h4>
          <p>{meal.strInstructions}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomMeals;
