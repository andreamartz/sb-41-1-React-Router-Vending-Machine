import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.jpg";


function VendingMachine() {
  return (
    <div className="VendingMachine">
      <h1>What would you like to eat?</h1>
      <p><Link to="/chips">chips</Link></p>
      <p><Link to="/cupcakes">cupcakes</Link></p>
      <p><Link to="/soda">soda</Link></p>
      <div className="VendingMachine-ImgContainer">
        <img src={ vendingMachineImg } alt="vending machine"/>
      </div>
    </div>
  );
}

export default VendingMachine;
