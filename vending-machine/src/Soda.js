import React from "react";

import { Link } from "react-router-dom";

function Soda() {
  return (
    <div className="Soda">
      <p>Refeshing soda!</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Soda;