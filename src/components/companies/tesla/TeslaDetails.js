import React from "react";
import CompanyData from "../../CompanyData";
import BackButton from "../../BackButton";

const TeslaDetails = () => {
  return (
    <div>
      <BackButton />
      <h1>Hello from TeslaDetails Component</h1>
      <CompanyData name="tsla" />
    </div>
  );
};

export default TeslaDetails;
