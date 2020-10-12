import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <nav>
      <div>
        <Link to="/" className="back-button">
          Back
        </Link>
      </div>
    </nav>
  );
};

export default BackButton;
