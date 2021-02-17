import React from "react";
import { Link } from "react-router-dom";
import CupcakesImg from "./Cupcakes.png";
import "./Cupcakes.css";

function Cupcakes() {
  return (
    <div className="Cupcakes">
      <Link to="/">Go Back</Link>
      <p>Mmm. Cupcakes. So delish!</p>
      <div className="Cupcakes-ImgContainer">
        <img src={CupcakesImg} alt="Hostess cupcakes"/>
      </div>
    </div>
  );
}

export default Cupcakes;