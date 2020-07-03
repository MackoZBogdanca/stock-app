import React from "react";
import CompanyData from "../CompanyData";

// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

import TeslaLogo from "../../logos/Tesla.png";

const Tesla = () => {
  return (
    <>
      <img alt="tesla" src={TeslaLogo} />
      <h3>Tesla</h3>
      <CompanyData name="tsla" />
      <button target="_blank" href="#">
        Link nr 1
      </button>

      <button target="_blank" href="https://tesla.com">
        Tesla.com
      </button>

      <button>More info</button>
    </>
  );
};

export default Tesla;
