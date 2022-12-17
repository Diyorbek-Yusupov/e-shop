import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ProductsData } from "./contexts/context";
import Layout from "./layout/layout";
import NotFoundPage from "./views/404page/NotFoundPage";
import Details from "./views/details/Details";
import Home from "./views/home/Home";
import Products from "./views/products/Products";
import SignIn from "./views/siginIn/SignIn";

function App() {
   const [products, setProducts] = useState([]);
   const [isDarkMode, setIsDarkMode] = useState(
      JSON.parse(localStorage.getItem("isDarkMode")) || false
   );
   const [isLoggedIn, setIsLoggedIn] = useState(
      localStorage.getItem("isLoggedIn")
   );

   useEffect(() => {
      if (isLoggedIn) {
         axios
            .get("https://fakestoreapi.com/products")
            .then((response) => setProducts(response.data))
            .catch((data) => console.error(data.message));
      }
      // }
   }, [isLoggedIn]);
   // if (!isLoggedIn) {
   //    console.log("hello");
   //    return <Navigate to={"/sign-in"} />;
   // }
   return (
      <ProductsData.Provider
         value={{ products, isDarkMode, setIsDarkMode, isLoggedIn }}
      >
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:id" element={<Details />} />
               </Route>
               <Route path="*" element={<NotFoundPage />} />
               <Route
                  path="/sign-in"
                  element={
                     <SignIn
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                     />
                  }
               />
            </Routes>
         </BrowserRouter>
      </ProductsData.Provider>
   );
}

export default App;
