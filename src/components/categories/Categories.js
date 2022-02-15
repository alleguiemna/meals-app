import { useEffect, useState } from "react";
import axios from "axios";
import "./Categories.scss"

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  //fetch categories
  const fetchCategories = async () => {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => {setCategories(response.data.categories);setLoading(false)})
      .catch(error=>setError(error))
      }
  //invoke function 
  useEffect(() => {
    fetchCategories()
   }, []);
  //loading
  if(loading)
  { 
    return <h1>Loading ....</h1>
  }
  
  return <div className="categories">
            {
              categories.map((category) => 
              <div key={category.idCategory}>
                <img src={category.strCategoryThumb} alt="category"/>
                <h4>{category.strCategory}</h4>
              </div>)
            }
  </div>;
};

export default Categories;
