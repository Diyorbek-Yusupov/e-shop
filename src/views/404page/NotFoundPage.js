import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import "./notFoundPage.scss";

export default function NotFoundPage() {
   return (
      <div className="notFound">
         <div title="404">404</div>
         <span style={{ fontSize: "30px", letterSpacing: "2px" }}>
            Page not Found
         </span>
         <Link to={"/"}>
            <Button bg={"green"}>Batck to Home</Button>
         </Link>
      </div>
   );
}
