import React from "react";
import CompanyData from "../../CompanyData";
import BackButton from "../../BackButton";

const AppleDetails = () => {
  return (
    <div>
      <BackButton />
      <h1>Hello from AppleDetails Component</h1>
      <CompanyData name="aapl" />
    </div>
  );
};

export default AppleDetails;
