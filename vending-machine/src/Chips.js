import React from "react";
import { Link } from "react-router-dom";
import ChipsImg from "./Chips.png";
import "./Chips.css";

function Chips() {
  return (
    <div className="Chips">
      <Link to="/">Go Back</Link>
      <p>Mmm. Chips. So salty. So crispy.</p>
      <div className="Chips-ImgContainer">
        <img src={ChipsImg} alt="bag of Lay's potato chips"/>
      </div>
    </div>
  );
}

export default Chips;
