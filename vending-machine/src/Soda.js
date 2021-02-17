import React from "react";
import { Link } from "react-router-dom";
import SodaImg from "./Soda.png";
import "./Soda.css";

function Soda() {
  return (
    <div className="Soda">
      <Link to="/">Go Back</Link>
      <p>Refeshing soda!</p>
      <div className="Soda-ImgContainer">
        <img src={SodaImg} alt="can of soda pop"/>
      </div>
    </div>
  );
}

export default Soda;