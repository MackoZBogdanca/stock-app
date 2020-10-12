import React from "react";
import CompanyData from "../../CompanyData";
import { Link } from "react-router-dom";

// import "./Microsoft.css";

import MicrosoftLogo from "../../../logos/Microsoft.png";

const Microsoft = ({ toggle, isVisible }) => {
  return (
    <div className="microsoft">
      <img alt="microsoft" src={MicrosoftLogo} />
      <h3>Microsoft</h3>
      <CompanyData name="msft" />
      <button className="main-button">
        <a
          rel="noopener noreferrer"
          href="https://www.nasdaq.com/market-activity/stocks/msft"
          target="_blank"
          className="main-link"
        >
          Microsoft on Nasdaq
        </a>
      </button>

      <button className="main-button">
        <a
          rel="noopener noreferrer"
          href="https://microsoft.com"
          target="_blank"
          className="main-link"
        >
          Microsoft.com
        </a>
      </button>
      <button onClick={toggle} className="main-button">
        <Link to="/microsoftdetails" className="main-link">
          MicrosoftDetails
        </Link>
      </button>
      {isVisible && <CompanyData name="msft" />}
    </div>
  );
};

export default Microsoft;
