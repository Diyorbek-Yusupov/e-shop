import React from "react";
import "./loading.scss";

export default function Loading() {
   return (
      <div className="loadingWapper">
         <div className="container">
            <div className="square one"></div>
            <div className="square two"></div>
            <div className="square three"></div>
            <div className="square two"></div>
            <div className="square three"></div>
            <div className="square four"></div>
            <div className="square three"></div>
            <div className="square four"></div>
            <div className="square five"></div>
         </div>
      </div>
   );
}
