import React from "react"
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Categories from "./components/categories/Categories";
import RandomMeals from "./components/randomMeals/RandomMeals";
import Home from "./components/home/Home";
import MealsDetail from "./components/mealsDetail/MealsDetail";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
       <Routes>
       <Route  path="/" element={<Home />}/>
       <Route  path="/categories" element={<Categories />}/>
       <Route  path="/random" element={<RandomMeals />}/>
       <Route  path="/:id" element={<MealsDetail />}/>
       </Routes>
       <Footer />
      </Router>
    </div>
  );
}

export default App;
