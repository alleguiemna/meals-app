import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Disc } from "react-feather";
import "./MealsDetail.scss";

const MealsDetail = () => {
  const [meal, setMeal] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const params = useParams();
  // console.log(params.id)
  const fetchMealsById = async () => {
    const response = await axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      // .then (response => console.log(response.data.meals))
      .then((response) => {
        setMeal(response.data.meals);
        setLoading(false);
      })
      .catch((error) => setError(error.response.data));
  };
  useEffect(() => {
    fetchMealsById();
  }, []);
  //loading
  if (loading) {
    return <h1>Loading ... </h1>;
  }
  return (
    <div className="meal-detail">
      <div className="meal-detail-div">
        <img src={meal[0].strMealThumb} alt="" />
        <br />
        <p>
          <Disc className="meal-detail-disc" />
          <span>Meal:</span>
          {meal[0].strMeal}
        </p>
        <p>
          <Disc className="meal-detail-disc" />
          <span>Categorie:</span>
          {meal[0].strCategory}
        </p>
        <p>
          <Disc className="meal-detail-disc" />
          <span>Area:</span>
          {meal[0].strArea}
        </p>
        <p>
          <Disc className="meal-detail-disc" />
          <span>Instructions:</span>
          {meal[0].strInstructions}
        </p>

        <p>
          <span>
            <Disc className="meal-detail-disc" />
            Ingredients:
          </span>
          {meal[0].strIngredient1},{meal[0].strIngredient2},
          {meal[0].strIngredient3},{meal[0].strIngredient4},
          {meal[0].strIngredient5},{meal[0].strIngredient6}
        </p>
        <Link to="/" style={{textDecoration:"none"}}>
          <button>Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default MealsDetail;
