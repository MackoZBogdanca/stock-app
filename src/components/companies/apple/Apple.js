import React from "react";
import CompanyData from "../../CompanyData";
// import CompanyDetails from "../CompanyDetails";
import { Link } from "react-router-dom";

// import "./Apple.css";

import AppleLogo from "../../../logos/Apple.png";

const Apple = ({ toggle, isVisible }) => {
  return (
    <div className="apple">
      <img alt="apple" src={AppleLogo} />
      <h3>Apple</h3>
      <CompanyData name="aapl" />
      <button className="main-button">
        <a
          rel="noopener noreferrer"
          href="https://www.nasdaq.com/market-activity/stocks/aapl"
          target="_blank"
          className="main-link"
        >
          Apple on Nasdaq
        </a>
      </button>

      <button className="main-button">
        <a
          rel="noopener noreferrer"
          href="https://apple.com"
          target="_blank"
          className="main-link"
        >
          Apple.com
        </a>
      </button>

      <button onClick={toggle} className="main-button">
        <Link to="/appledetails" className="main-link">
          AppleDetails
        </Link>
      </button>
      {isVisible && <CompanyData name="aapl" />}
    </div>
  );
};

export default Apple;
