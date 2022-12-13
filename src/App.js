import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Details from "./views/details/Details";
import Home from "./views/home/Home";
import Products from "./views/products/Products";

function App() {
   return (
      <div className="App">
         <Navbar />
         {/* <Home /> */}
         <Products />
         {/* <Details /> */}
      </div>
   );
}

export default App;
