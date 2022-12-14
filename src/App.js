import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./layout/layout";
import Home from "./views/home/Home";
import Products from "./views/products/Products";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="/products" element={<Products />} />
            </Route>
         </Routes>
      </BrowserRouter>
      // <div className="App">
      //    <Navbar />
      //    {/* <Home /> */}
      //    <Products />
      //    {/* <Details /> */}
      // </div>
   );
}

export default App;
