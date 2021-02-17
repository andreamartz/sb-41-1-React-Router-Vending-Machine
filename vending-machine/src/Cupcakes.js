import React from "react";
import { Link } from "react-router-dom";

function Cupcakes() {
  return (
    <div className="Cupcakes">
      <p>Mmm. Cupcakes. So delish!</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Cupcakes;