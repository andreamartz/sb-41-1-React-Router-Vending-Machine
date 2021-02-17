import React from "react";
import { Link } from "react-router-dom";

function Chips() {
  return (
    <div className="Chips">
      <p>Mmm. Chips. So salty. So crispy.</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Chips;
