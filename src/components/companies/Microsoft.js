import React from "react";
import CompanyData from "../CompanyData";

// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

import MicrosoftLogo from "../../logos/Microsoft.png";

const Microsoft = () => {
  return (
    <>
      <img alt="microsoft" src={MicrosoftLogo} />
      <h3>Microsoft</h3>
      <CompanyData name="msft" />
      <button target="_blank" href="#">
        Link nr 1
      </button>

      <button target="_blank" href="https://microsoft.com">
        Microsoft.com
      </button>

      <button>More info</button>
    </>
  );
};

export default Microsoft;
