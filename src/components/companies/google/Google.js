import React from "react";
import CompanyData from "../../CompanyData";
import { Link } from "react-router-dom";

// import "./Google.css";

import GoogleLogo from "../../../logos/Google.png";

const Google = ({ toggle, isVisible }) => {
  return (
    <div className="google">
      <img alt="google" src={GoogleLogo} />
      <h3>Google</h3>
      <CompanyData name="goog" />
      <button className="main-button">
        <a
          rel="noopener noreferrer"
          href="https://www.nasdaq.com/market-activity/stocks/goog"
          target="_blank"
          className="main-link"
        >
          Google on Nasdaq
        </a>
      </button>

      <button className="main-button">
        <a
          rel="noopener noreferrer"
          href="https://google.com"
          target="_blank"
          className="main-link"
        >
          Google.com
        </a>
      </button>

      <button onClick={toggle} className="main-button">
        <Link to="/googledetails" className="main-link">
          GoogleDetails
        </Link>
      </button>
      {isVisible && <CompanyData name="goog" />}
    </div>
  );
};

export default Google;
