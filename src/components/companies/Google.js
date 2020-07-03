import React from "react";
import CompanyData from "../CompanyData";

// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

import GoogleLogo from "../../logos/Google.png";

const Google = () => {
  return (
    <>
      <img alt="google" src={GoogleLogo} />
      <h3>Google</h3>
      <CompanyData name="goog" />
      <button target="_blank" href="#">
        Link nr 1
      </button>

      <button target="_blank" href="https://google.com">
        Google.com
      </button>

      <button>More info</button>
    </>
  );
};

export default Google;
