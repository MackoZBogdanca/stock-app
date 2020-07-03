import React, { useState, useEffect } from "react";
import { iex } from "../config/iex.js";

import axios from "axios";

// import ListGroup from "react-bootstrap/ListGroup";

const CompanyData = ({ name }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const getCompanyData = async () => {
      const companyUrl = `${iex.base_url}/stock/${name}/intraday-prices?chartLast=1&token=${iex.api_token}`;

      const result = await axios(companyUrl);

      setInfo(result.data[0]);
    };

    getCompanyData();
  }, [name]);

  const { close, date, label } = info;

  return (
    <>
      <ul className="list-group-flush">
        <li>Price: {close}</li>
        <li>Date: {date}</li>
        <li>Time: {label}</li>
      </ul>
    </>
  );
};

export default CompanyData;
