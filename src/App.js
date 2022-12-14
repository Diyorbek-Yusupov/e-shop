import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Loading from "./components/loading/Loading";
import { ProductsData } from "./contexts/context";
import Layout from "./layout/layout";
import NotFoundPage from "./views/404page/NotFoundPage";
import Details from "./views/details/Details";
import Home from "./views/home/Home";
import Products from "./views/products/Products";

function App() {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      if (!products.length) console.log("useEffect");
      axios
         .get("https://fakestoreapi.com/products")
         .then((response) => setProducts(response.data))
         .catch((data) => console.error(data.message));
   }, [null]);
   return (
      <ProductsData.Provider value={{ products, setProducts }}>
         <BrowserRouter>
            {products.length ? (
               <Routes>
                  <Route path="/" element={<Layout />}>
                     <Route index element={<Home />} />
                     <Route path="/products" element={<Products />} />
                     <Route path="/products/:id" element={<Details />} />
                  </Route>
                  <Route path="*" element={<NotFoundPage />} />
               </Routes>
            ) : (
               <Loading />
            )}
         </BrowserRouter>
      </ProductsData.Provider>
   );
}

export default App;
