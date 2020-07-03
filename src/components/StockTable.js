import React, { useState } from "react";

import Apple from "../components/companies/Apple";
import Google from "../components/companies/Google";
import Microsoft from "../components/companies/Microsoft";
import Tesla from "../components/companies/Tesla";

// import CardDeck from "react-bootstrap/CardDeck";
// import CompanyDetails from "./CompanyDetails";

const StockTable = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Apple toggle={toggle} isVisible={isVisible} />
      <Google />
      <Microsoft />
      <Tesla />
      {/* <CompanyDetails /> */}
    </>
  );
};

export default StockTable;
