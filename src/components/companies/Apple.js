import React from "react";
import CompanyData from "../CompanyData";
import CompanyDetails from "../CompanyDetails";

// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

import AppleLogo from "../../logos/Apple.png";

const Apple = ({ toggle, isVisible }) => {
  return (
    <>
      <img alt="apple" src={AppleLogo} />
      <h3>Apple</h3>
      <CompanyData name="aapl" />
      <button target="_blank" href="#">
        Link nr 1
      </button>

      <button target="_blank" href="https://apple.com">
        Apple.com
      </button>

      <button onClick={toggle}>More info</button>
      {isVisible && <CompanyDetails name="aapl" />}
    </>
  );
};

export default Apple;
