import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Subscription from "./components/Subscription";
import Dashboard from "./components/Dashboard";
import AddFoodToDatabase  from "./components/AddFood";
import Graph from "./components/DisplayGraph";
import Displayplan from "./components/Displayplan";
import Planmeal from "./components/Planmeal";
import Makeplan from "./components/Makeplan";



const App = () => {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subs" element={<Subscription/>} />
          <Route path="/dash" element={<Dashboard/>} />
          {/* <Route path="/se" element={<SearchExercises/> }/> */}
          <Route path="/planner" element={<Planmeal/>} />
          <Route path="/make-my-plan" element={<Makeplan/>} />
          <Route path="/view-my-plan" element={<Displayplan/>} />
          <Route path="/add-food" element={<AddFoodToDatabase/>} />
          <Route path="/graph" element={<Graph/>} />
         
        </Routes>
      </Router>
      
    </div>
  );
};

export default App;
