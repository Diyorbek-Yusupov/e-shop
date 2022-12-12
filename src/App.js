import React from "react";
import styles from "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Showcase from "./components/showcase/Showcase";

function App() {
   return (
      <div className="App">
         <Navbar />
         <div className="container">
            <Showcase />
         </div>
      </div>
   );
}

export default App;
