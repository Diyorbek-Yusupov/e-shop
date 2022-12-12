import React from "react";
import styles from "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Showcase from "./components/showcase/Showcase";
import SubBanner from "./components/subBanner/SubBanner";

function App() {
   return (
      <div className="App">
         <Navbar />
         <div className="container">
            <Showcase />
            <SubBanner />
         </div>
      </div>
   );
}

export default App;
