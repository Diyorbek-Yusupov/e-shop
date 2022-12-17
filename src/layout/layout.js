import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../components/loading/Loading";
import Navbar from "../components/navbar/Navbar";
import { ProductsData } from "../contexts/context";

export default function Layout() {
   const { products, isLoggedIn } = useContext(ProductsData);
   if (!isLoggedIn) return <Navigate to={"/sign-in"} />;
   return products.length ? (
      <>
         <Navbar />
         <Outlet />
      </>
   ) : (
      <Loading />
   );
}
