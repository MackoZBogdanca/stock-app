import React from "react";
import CompanyData from "../../CompanyData";
import { Link } from "react-router-dom";

// import "./Tesla.css";

import TeslaLogo from "../../../logos/Tesla.png";

const Tesla = ({ toggle, isVisible }) => {
  return (
    <div className="tesla">
      <img alt="tesla" src={TeslaLogo} />
      <h3>Tesla</h3>
      <CompanyData name="tsla" />
      <button className="main-button">
        <a
          rel="noopener noreferrer"
          href="https://www.nasdaq.com/market-activity/stocks/tsla"
          target="_blank"
          className="main-link"
        >
          Tesla on Nasdaq
        </a>
      </button>

      <button className="main-button">
        <a
          rel="noopener noreferrer"
          href="https://tesla.com"
          target="_blank"
          className="main-link"
        >
          Tesla.com
        </a>
      </button>

      <button onClick={toggle} className="main-button">
        <Link to="/tesladetails" className="main-link">
          TeslaDetails
        </Link>
      </button>
      {isVisible && <CompanyData name="tsla" />}
    </div>
  );
};

export default Tesla;
