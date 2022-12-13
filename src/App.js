import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/home/Home";
import Products from "./views/products/Products";

function App() {
   return (
      <div className="App">
         <Navbar />
         <Products />
      </div>
   );
}

export default App;
